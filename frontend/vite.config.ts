import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				exportType: 'default',
			},
			include: '**/*.svg',
		}),
	],
	resolve: {
		alias: {
			'@ui': path.resolve(__dirname, 'src/UI'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@containers': path.resolve(__dirname, 'src/containers'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@actions': path.resolve(__dirname, 'src/actions'),
			'@api': path.resolve(__dirname, 'src/api'),
		},
	},
});
