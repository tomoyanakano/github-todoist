import {
  GetResponseTypeFromEndpointMethod,
  GetResponseDataTypeFromEndpointMethod,
  Endpoints,
} from "@octokit/types";
import { Octokit } from "octokit";


const octokit = new Octokit();
export type GetIssuesResponseType = Endpoints["GET /issues"]["response"]
export type Issue = Endpoints["GET /issues"]["response"]["data"][0]
