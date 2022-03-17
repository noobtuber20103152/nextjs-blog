import * as fs from 'fs';
import ConnectToMongo from './ConnectToMongo';
ConnectToMongo();
const FeedbackData = require("./FeedbackSchema")
export default async function Feedback(req, res) {
  try {
    if (req.method === "POST") {
      console.log(req.body)
      const { name, email, desc, tag } = req.body;
      const feedbackcontent = new FeedbackData({ name, email, desc, tag });
      const savedata = await feedbackcontent.save();
      console.log(savedata)
      res.json(savedata)
    }
  } catch (error) {
     console.log("Error during post feedback")

  }
}