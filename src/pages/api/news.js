import newsDB from "./db/news.json";
const fs = require("fs");
const { join } = require("path");

export default async function handler(req, res) {
  const { method } = req;
  const { body } = req;
  const type = req.body?.type;
  const pathToDB = join(process.cwd(), "src/pages/api/db", "news.json");

  switch (method) {
    case "GET":
      res.json(newsDB);
      break;

    case "POST":
      if (!type || !body)
        return res.json("No Request Type or Body").status(500);

      if (type === "ADD") {
        newsDB.push(
          body.url ? { text: body.news, url: body.url } : { text: body.news }
        );

        fs.writeFileSync(pathToDB, JSON.stringify(newsDB), (err) => {
          if (err) return res.json(err).status(401);
        });
        res.json("Successfully added");
        return;
      }

      if (type === "DELETE") {
        newsDB.splice(body.index, 1);
        fs.writeFileSync(pathToDB, JSON.stringify(newsDB), (err) => {
          if (err) return res.json(err).status(401);
        });
        res.json("Deleted");
        return;
      }

      break;
    default:
      break;
  }
}
