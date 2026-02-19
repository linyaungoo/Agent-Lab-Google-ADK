
import { LlmAgent, GoogleSearchTool, AgentTool } from '@google/adk';

// Google Search Agent
const myAgentGoogleSearchAgent = new LlmAgent({
  name: "My_Agent_google_search_agent",
  model: "gemini-2.5-flash",
  description: "Agent specialized in performing Google searches.",
  instruction: "Use the GoogleSearchTool to find information on the web.",
  subAgents: [],
  tools: [
    new GoogleSearchTool()
  ]
});

// URL Context Agent
// NOTE: UrlContextTool is not available in '@google/adk'. Please implement or import the correct tool if needed.
// const myAgentUrlContextAgent = new LlmAgent({
//   name: "My_Agent_url_context_agent",
//   model: "gemini-2.5-flash",
//   description: "Agent specialized in fetching content from URLs.",
//   instruction: "Use the UrlContextTool to retrieve content from provided URLs.",
//   subAgents: [],
//   tools: [
//     new UrlContextTool()
//   ]
// });

// Root Agent
const rootAgent = new LlmAgent({
  name: "My_Agent",
  model: "gemini-2.5-flash",
  description: "Agent to help interact with my data.",
  instruction: "",
  subAgents: [],
  tools: [
    new AgentTool({ agent: myAgentGoogleSearchAgent })
  ]
});

export default rootAgent;
