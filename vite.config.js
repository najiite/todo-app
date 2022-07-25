import { sveltekit } from '@sveltejs/kit/vite';
import autoImport from 'sveltekit-autoimport';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		autoImport({
		components: ['./src/components'],
	  }),sveltekit()
	]
};

export default config;
