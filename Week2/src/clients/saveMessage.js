import { Message, BackUpMessage } from "../models/message.js"

import lockedSync from "locked-sync"
const sync = lockedSync()

import updateBudget from "./updateBudget.js"

export default async (messageParams) => {
  const message = new Message(messageParams);

  if (message.status === 'OK') {

    const end = await sync()

    try {

      await updateBudget(-1)

      const doc = await message.save();
      console.log("Message saved succesfully. The message:", doc);

      const backUpMessage = new BackUpMessage(messageParams)

      try {

        const doc2 = await backUpMessage.save()

        console.log("Message backup saved succesfully:", doc2)

      } catch (err) {

        await updateBudget(1)
        console.log("Error while saving budget backup from saveMessage", err)

      }

      return doc;

    } catch (err) {

      console.log("Error while saving", err);

    } finally {
      end()
    }
  }

}