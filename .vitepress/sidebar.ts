import type { DefaultTheme } from 'vitepress/theme';

export const sidebar: DefaultTheme.Sidebar = [
	{
		text: 'Projects',
		collapsed: false,
		items: [
			{
				text: 'Crygotchi',
				link: '/projects/crygotchi/',
				items: [
					{ text: 'Devlog', link: '/projects/crygotchi/devlog/' }
				]
			}
		]
	},
	{
		text: 'Work Experiences',
		collapsed: true,
		items: [
			{
				text: 'Grupo Ti Solução',
				collapsed: true,
				items: [
					{ text: 'About', link: '/work/grupo_ti_solucao' },
					{ text: 'Website', link: 'https://www.grupotisolucao.com.br' }
				]
			},
			{
				text: 'SigaMeCar',
				collapsed: true,
				items: [
					{ text: 'About', link: '/work/sigamecar' },
					{ text: 'Website', link: 'https://sigamecar.com.br' }
				]
			}
		]
	}
];
