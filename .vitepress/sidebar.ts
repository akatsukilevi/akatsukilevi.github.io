import type { DefaultTheme } from 'vitepress/theme';

export const sidebar: DefaultTheme.Sidebar = [
	{
		text: 'Work Experiences',
		items: [
			{
				text: 'Grupo Ti Solução',
				items: [
					{ text: 'About', link: '/work/grupo_ti_solucao' },
					{ text: 'Website', link: 'https://www.grupotisolucao.com.br' }
				]
			},
			{
				text: 'SigaMeCar',
				items: [
					{ text: 'About', link: '/work/sigamecar' },
					{ text: 'Website', link: 'https://sigamecar.com.br' }
				]
			}
		]
	},
	{
		text: 'Projects',
		items: [
			{
				text: 'Crygotchi',
				link: '/projects/crygotchi/',
				items: [
					{ text: 'Devlog', link: '/projects/crygotchi/devlog' }
				]
			}
		]
	}
];
