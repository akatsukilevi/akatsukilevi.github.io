import type { HeadConfig } from "vitepress/types/shared";

export const TITLE = `Felipe Angelo Sgarbi's Portfolio`;
export const DESCRIPTION = 'Software developer, 6+ years of experience. Aiming to innovate with technology and achieve with demanding development objectives.';

export const seo: HeadConfig[] = [
	[
		'meta',
		{ name: 'keywords', content: 'nodejs,javascript,typescript,sql,mysql,mariadb,dotnet,c#,csharp,docker,nomad,terraform' }
	],
	['meta', { name: 'author', content: 'Felipe Angelo Sgarbi' }],
	['meta', { property: 'title', content: TITLE }],
	['meta', { property: 'description', content: DESCRIPTION }],
	['meta', { property: 'url', content: 'https://akatsukilevi.gitlab.io/' }],
	['meta', { property: 'type', content: 'website' }],
	['meta', { property: 'image', content: 'https://akatsukilevi.gitlab.io/header.jpg' }],
	['meta', { property: 'image:width', content: '5000' }],
	['meta', { property: 'image:height', content: '3313' }],
	['meta', { property: 'locale', content: 'en_US' }],
	['meta', { property: 'site_name', content: TITLE }],
	['link', { rel: 'canonical', href: 'https://akatsukilevi.gitlab.io' }]
];
