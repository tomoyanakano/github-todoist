import { Task, TodoistApi } from '@doist/todoist-api-typescript'
import { Issue } from './types/issue'

export const addTask = async (issue: Issue) => {
  const api = new TodoistApi(`${process.env.TODOIST_API_TOKEN}`)
  await api.addTask({ content: `**[${issue.repository?.name}]** ${issue.title} (${issue.url})`})
}

export const fetchTasks = async (): Promise<Task[]> => {
  const api = new TodoistApi(`${process.env.TODOIST_API_TOKEN}`)
  const tasks: Task[] = await api.getTasks();
  return tasks;
}