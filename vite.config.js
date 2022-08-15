import { sveltekit } from '@sveltejs/kit/vite';
import * as path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@styles/style-define.scss";'
			}
		}
	},
	resolve: {
		alias: {
			"@": path.join(__dirname, "./src"),
			"@styles": path.join(__dirname, "./src/styles"),
		}
	}
};

export default config;
