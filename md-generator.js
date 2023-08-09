import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

// Define the output path
const outputPath = "./src/content/blog";

// Create the output directory if it doesn't exist
mkdirSync(outputPath, { recursive: true });

// Read the JSON file
const data = JSON.parse(readFileSync("./src/dummy/articles.json", "utf8"));

// Initialize a counter for the number of markdown files created
let count = 0;

// Loop through the data and create a markdown file for each entry
data.forEach((entry) => {
  // Create the file name based on the slug and output path
  const fileName = join(outputPath, `${entry.slug}.md`);

  // Create the content of the file with an h1 tag based on the title and a "Published on" section
  const content = `# ${entry.title}\n\nPublished on ${entry.date}\n`;

  // Write the content to the file
  writeFileSync(fileName, content);

  // Increment the counter
  count++;
});

console.log(`${count} markdown files created successfully in ${outputPath}!`);
