const { promises: fs } = require("fs");
const path = require("path");

async function main() {
  const readmeTemplate = await fs.readFile(
    path.join(process.cwd(), "README.template.md"),
    "utf-8",
  );

  const lastUpdated = new Date().toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const readme = readmeTemplate.replace("{last_updated}", lastUpdated);

  await fs.writeFile("README.md", readme);

  console.log("README.md generated successfully.");
}

main();
