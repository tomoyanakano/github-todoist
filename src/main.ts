import { Task } from "@doist/todoist-api-typescript";
import { fetchIssues } from "./githubAPI";
import { addTask, fetchTasks } from "./todoistAPI";
import { GetIssuesResponseType, Issue } from "./types/issue";
require('dotenv').config();

const main = async () => {
  const issues: GetIssuesResponseType['data']  = await fetchIssues();
  const tasks: Task[] = await fetchTasks();
  issues.map((issue: Issue) => {
    if (!checkDuplication(tasks, issue)) {
      addTask(issue)
    }
  })
}

const checkDuplication = (tasks: Task[], issue: Issue): boolean => {
  return tasks.some((task) => task.content.includes(issue.title))
}

main();