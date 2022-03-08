import * as fs from 'fs';

export default async function feedback(req, res) {
    if (req.method == "POST") {
        console.log(req.body);
        let data = await fs.promises.readdir("feedbackdata");
        fs.promises.writeFile(`feedbackdata/${data.length + 1}.json`, JSON.stringify(req.body));
        res.status(200).send(req.body)
    }
    if (req.method == 'GET') {
      res.send(200)
    }
}