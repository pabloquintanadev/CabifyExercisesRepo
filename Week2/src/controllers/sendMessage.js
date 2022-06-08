import http from "http";

import saveMessage from "../clients/saveMessage.js";
import updateBudget from "./../clients/updateBudget.js";
import budgetCheck from "../clients/budgetCheck.js";

export default async (req, res) => {
  const body = JSON.stringify(req.body);

  const postOptions = {
    host: "localhost",
    // host: "messageapp",
    port: 3000,
    path: "/message",
    method: "post",
    json: true,
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body),
    },
  };

  const postReq = http.request(postOptions);

  postReq.on("response", async (postRes) => {
    try {
      await updateBudget({ amount: -5 })
      await saveMessage({
        ...req.body,
        status: postRes.statusCode === 200 ? "OK" : "ERROR",
      });
      if (postRes.statusCode !== 200) {
        throw new Error('Error in the messageapp request');
      }

      res.statusCode = 200;
      res.end(postRes.body);
    } catch (error) {
      console.log(error.message);
      res.statusCode = 500;
      res.end(`Internal server error: SERVICE ERROR ${error.message}`);
    }
  });

  postReq.on("timeout", async () => {
    console.error("Timeout Exceeded!");
    postReq.abort();

    try {
      await saveMessage({
        ...req.body,
        status: "TIMEOUT",
      });

    } finally {
      res.statusCode = 500;
      res.end("Internal server error: TIMEOUT");
    }
  });

  postReq.on("error", (error) => {
    res.statusCode = 500;
    res.end(error.message);
  });

  if (await budgetCheck()) {
    postReq.write(body);
    postReq.end();
  }
  else {
    res.statusCode = 500
    res.end("Your budget has not enough amount")

  }

  postReq.write(body);
  postReq.end();
}
