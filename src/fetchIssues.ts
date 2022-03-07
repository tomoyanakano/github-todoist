import { Octokit, App } from "octokit";

export const fetchIssues = async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
  const response = await octokit.rest.issues.list(); 
  const issues = response.data
  return issues;
}