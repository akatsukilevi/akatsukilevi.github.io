import { defineConfig, splitVendorChunkPlugin } from 'vite';

import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin()],
	publicDir: 'assets',
	build: {
		outDir: 'public',
		reportCompressedSize: true,
		sourcemap: false,
		minify: true,
	},
});
