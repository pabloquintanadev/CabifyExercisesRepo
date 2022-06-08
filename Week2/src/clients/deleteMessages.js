import { Message, BackUpMessage } from "../models/message.js";

export default (conditions = {}) => Message.deleteMany(conditions);
