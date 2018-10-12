import parser, { UAParser } from "ua-parser-js";

export function getUserAgentInfo() {
	const parser = new UAParser();
	const agent = parser.getResult();
	return agent;
}
