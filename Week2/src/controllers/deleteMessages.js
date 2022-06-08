import deleteMessages from "../clients/deleteMessages.js";

export default async (req, res) => {
  const messages = await deleteMessages();
  
  res.json(messages);
}
