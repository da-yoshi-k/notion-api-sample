import { Client } from "@notionhq/client";
import url from "url";
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const database_id = process.env.DATABASE_ID;

module.exports = (req, res) => {
  req.query = url.parse(req.url, true).query;

  (async () => {
    const response = await notion.pages.create({
      "cover": {
        "type": "external",
        "external": {
          "url":
            "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg",
        },
      },
      "icon": {
        "type": "emoji",
        "emoji": "🥬",
      },
      "parent": {
        "type": "database_id",
        "database_id": database_id,
      },
      "properties": {
        "名前": {
          "title": [
            {
              "text": {
                "content": "Tuscan kale",
              },
            },
          ],
        },
        "説明": {
          "rich_text": [
            {
              "text": {
                "content": "A dark green leafy vegetable",
              },
            },
          ],
        },
      },
      "children": [
        {
          "object": "block",
          "heading_2": {
            "rich_text": [
              {
                "text": {
                  "content": "Lacinato kale",
                },
              },
            ],
          },
        },
        {
          "object": "block",
          "paragraph": {
            "rich_text": [
              {
                "text": {
                  "content":
                    "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                  "link": {
                    "url": "https://en.wikipedia.org/wiki/Lacinato_kale",
                  },
                },
                "href": "https://en.wikipedia.org/wiki/Lacinato_kale",
              },
            ],
            "color": "default",
          },
        },
      ],
    });
  })();
};
