import { fetchIssues } from "./fetchIssues"
require('dotenv').config();

const main = async () => {
  const issues = await fetchIssues();
}

main();