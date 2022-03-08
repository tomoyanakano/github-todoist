import { TodoistApi } from '@doist/todoist-api-typescript'
import { Issue } from './types/issue';

const addTask = (issue: Issue) => {
  const api = new TodoistApi(`${process.env.TODOIST_API_TOKEN}`)
  api.addTask({ content: `**[${issue.repository?.name}]** ${issue.title} (${issue.url})`})
}

export default addTask;
