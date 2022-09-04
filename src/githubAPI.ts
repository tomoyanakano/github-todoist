import { Octokit, App } from "octokit";
import { GetIssuesResponseType } from "./types/issue";

export const fetchIssues = async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
  const response: GetIssuesResponseType = await octokit.rest.issues.list({
    per_page: 100,
  }); 
  const issues: GetIssuesResponseType['data'] = response.data
  return issues;
}