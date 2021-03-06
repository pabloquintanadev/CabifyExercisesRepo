import http from "http";

import updateBudget from "../clients/updateBudget.js";

export default async (req, res) => {
    const body = JSON.stringify(req.body);

    const postOptions = {
        host: "localhost",
        // host: "mongo",
        port: 3000,
        path: "/credit",
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
            await updateBudget(req.body);

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
            await updateBudget(req.body);

        } finally {
            res.statusCode = 500;
            res.end("Internal server error: TIMEOUT");
        }
    });

    postReq.on("error", (error) => {
        res.statusCode = 500;
        res.end(error.message);
    });

    postReq.write(body);
    postReq.end();
}
