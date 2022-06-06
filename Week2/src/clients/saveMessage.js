import Message from "../models/message.js";

import Budget from "../models/budget.js"

export default async (messageParams) => {
  const message = new Message(messageParams);
  
  try {
    const doc = await message.save();

    console.log("Message saved succesfully:", doc);
    return doc;
  } catch (err) {
    console.log("Error while saving", err);
  }
}
