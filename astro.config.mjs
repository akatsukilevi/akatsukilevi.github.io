import { defineConfig } from 'astro/config';

//* Astro plugins
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

const isGithub = process.env.ASTRO_BUILD_GITHUB === 'true';

export default defineConfig({
	publicDir: './assets',
	site: isGithub ? 'https://akatsukilevi.github.io' : 'https://akatsukilevi.gitlab.io',
	integrations: [mdx(), sitemap(), tailwind()]
});
