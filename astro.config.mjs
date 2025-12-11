// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://tu-dominio.vercel.app',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
		routing: {
			prefixDefaultLocale: false,
			redirectToDefaultLocale: true,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en',
					es: 'es',
				},
			},
		}),
		mdx(),
	],
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp',
		},
	},
	build: {
		inlineStylesheets: 'auto',
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'hover',
	},
});
