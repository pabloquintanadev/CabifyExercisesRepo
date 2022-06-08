import { Message, BackUpMessage } from "../models/message.js";

export default (conditions) => {

    const message = Message.findById(conditions.messageId)

    return message.status
};
