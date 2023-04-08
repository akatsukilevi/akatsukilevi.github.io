import type { HeadConfig } from "vitepress/types/shared";

export const dependencies: HeadConfig[] = [
	['link', { rel: "preconnect", href: "https://api.fonts.coollabs.io" }],
	['link', { rel: "stylesheet", href: "https://api.fonts.coollabs.io/css2?family=Fira+Sans&family=Satisfy&display=swap" }],
	['link', { rel: "stylesheet", href: "https://api.fonts.coollabs.io/css2?family=Fira+Code&family=Satisfy&display=swap" }],
];
