import fs from "fs";
import path from "path";
import matter from "gray-matter";
import html from "remark-html";
import highlight from "remark-highlight.js";

import unified from "unified";
import parser from "remark-parse";

const tilsDirectory = path.join(process.cwd(), "til");

export async function getTilsData(limit) {
  // Get file names under /til
  const fileNames = fs.readdirSync(tilsDirectory);
  let data = [];

  for (const fileName of fileNames) {
    const fileContents = fs.readFileSync(
      `${tilsDirectory}/${fileName}`,
      "utf8"
    );

    const matterResult = matter(fileContents);

    const processedContent = await unified()
      .use(parser)
      .use(highlight)
      .use(html)
      .process(matterResult.content);

    const contentHtml = processedContent.toString();

    data.push({
      ...matterResult.data,
      id: fileName,
      contentHtml,
    });
  }

  return data
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, limit ? limit : data.length);
}
