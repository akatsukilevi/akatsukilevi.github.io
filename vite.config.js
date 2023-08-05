const { readdir } = require('node:fs/promises');
const { resolve, join } = require('node:path');
const { defineConfig } = require('vite');

// Plugins
const handlebars = require('vite-plugin-handlebars');

/** @type {import('vite').UserConfig} */
const baseConfig = {
	root: 'src',
	plugins: [
		handlebars({ partialDirectory: resolve(__dirname, 'partials') })
	]
}

// Got from 'https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search'
const walk = async (dirPath) => Promise.all(
  await readdir(dirPath, { withFileTypes: true }).then((entries) => entries.map((entry) => {
    const childPath = join(dirPath, entry.name)
    return entry.isDirectory() ? walk(childPath) : childPath
  })),
)

export default defineConfig(async ({ command }) => {
	if (command === 'serve') {
		return baseConfig;
	}

	//! Listen, Vite doesn't properly do multi-page with HTML, and I won't be populating this by hand

	//* Scan all the HTML files
	const root = resolve(__dirname, 'src');
	const allFiles = (await walk(root)).flat(Number.POSITIVE_INFINITY).filter(x => x.endsWith('.html'));

	//* Convert to a Vite build path
	const input = {
		main: 'src/index.html'
	};

	allFiles.forEach(file => {
		let key = file.replace(root + '/', '').replace('.html', '');
		if (key.includes('index')) input[key.replace('/index', '')] = file;
		else input[key] = file.replace(root, 'src');
	});

	//* Create build
	return {
		...baseConfig,
		build: {
			rollupOptions: { input },
			outDir: resolve(__dirname, 'dist'),
			sourcemap: false,
			cssMinify: true,
			minify: true,
		}
	}
});
