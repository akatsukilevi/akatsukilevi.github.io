import { defineConfig } from 'vitepress';

//* Plugins
import tsconfig from 'vite-tsconfig-paths';

//* Parts
import { TITLE, DESCRIPTION, seo } from './seo';
import { icons } from './icons';
import { sidebar } from './sidebar';

export default defineConfig({
	lang: 'en-US',
	title: 'Felipe A. Sgarbi',
	titleTemplate: TITLE,
	description: DESCRIPTION,
	srcDir: './src',
	mpa: true,
	lastUpdated: true,
	vite: {
		plugins: [tsconfig()] as any[],
		publicDir: '../assets',
	},
	head: [...seo, ...icons],
	markdown: {
		theme: 'vitesse-dark',
		lineNumbers: true,
	},
	themeConfig: {
		logo: '/logo.png',
		sidebar,
		nav: [
			{ text: 'Blog', link: '/blog/' }
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/akatsukilevi' },
			{ icon: 'twitter', link: 'https://twitter.com/akatsuki_levi' },
			{ icon: 'mastodon', link: 'https://mastodon.social/@akatsukilevi' },
			{ icon: 'linkedin', link: 'https://www.linkedin.com/in/felipe-angelo-sgarbi-fullstack' },
		],
		footer: {
			message: 'Powered by Open Source! - <a href="https://gitlab.com/akatsukilevi/akatsukilevi.gitlab.io">See Source Code</a> - Hosting provided by <a href="https://docs.gitlab.com/ee/user/project/pages/">Gitlab Pages</a>',
			copyright: 'Copyright © 2023-present Felipe Angelo Sgarbi - Released under <a href="https://choosealicense.com/licenses/gpl-3.0/">GPLv3 License</a>'
		}
	}
});
