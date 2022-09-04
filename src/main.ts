import { Task } from "@doist/todoist-api-typescript";
import { fetchIssues } from "./githubAPI";
import { addTask, fetchTasks } from "./todoistAPI";
import { GetIssuesResponseType, Issue } from "./types/issue";
require('dotenv').config();

const main = async () => {
  const issues: GetIssuesResponseType['data']  = await fetchIssues();
  console.log(`${issues.length} issues found👀`)
  const tasks: Task[] = await fetchTasks();
  const result = await Promise.all(issues.map(async(issue: Issue) => {
    if (!checkDuplication(tasks, issue)) {
      return await addTask(issue)
    } else {
      return undefined
    }
  }))
  const addedTasks = result.filter((task) => !(task === undefined))
  console.log(`${addedTasks.length} tasks added✨`);
}

const checkDuplication = (tasks: Task[], issue: Issue): boolean => {
  return tasks.some((task) => task.content.includes(issue.title))
}

main();