// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Pokémon Hearth',
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
					label: 'References',
					items: [
						{ slug: 'reference/about' },
						{ slug: 'reference/new_features' },
						{ label: 'PokéDex', link: 'https://hearth.eidex.pages.net/', attrs: {target: "_blank", rel: "noopener noreferrer", style: 'font-weight: bold'} },
						{ label: 'Interactive Map', link: 'https://map.emeraldimperium.net/', attrs: {target: "_blank", rel: "noopener noreferrer", style: 'font-weight: bold'} },
					]
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Characters',
					autogenerate: { directory: 'characters' },
				},
				{
					label: 'Locations',
					autogenerate: { directory: 'locations' },
				},
				{
					label: 'Items',
					autogenerate: { directory: 'items' },
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
