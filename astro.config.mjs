// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

	integrations: [
		starlight({
			title: 'Pokemon Hearth',
			social: [
				{ 
					icon: 'discord', 
					label: 'Discord', 
					href: 'https://discord.gg/XDetmVQQZy' 
				},
				

			],
			editLink: {
				baseUrl: 'https://github.com/izrofid/hearthdocs/edit/master',
			},
			components: {SiteTitle: './src/starlightOverrides/SiteTitle.astro'},
			sidebar: [
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Resources',
					items:[
						{ label: 'Online Dex', link: 'https://dex.emeraldimperium.net/', attrs: {target: "_blank",rel: "noopener noreferrer"} },
						{ label: 'Interactive Map', link: 'https://map.emeraldimperium.net/', attrs: {target: "_blank",rel: "noopener noreferrer"} },
					]
				},

			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	site: "https://hearthdocs.pages.dev",
});
