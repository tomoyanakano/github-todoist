import addTask from "./addTask";
import { fetchIssues } from "./fetchIssues"
import { GetIssuesResponseType, Issue } from "./types/issue";
require('dotenv').config();

const main = async () => {
  const issues: GetIssuesResponseType['data']  = await fetchIssues();
  issues.map((issue: Issue, index: number) => {
    addTask(issue)
  })
}

main();