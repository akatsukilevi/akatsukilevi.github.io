import { useNavigate } from '@services/loader';
import { useState } from 'react';

import classes from './home.module.scss';

const pages: IPage[] = [
	{
		title: 'About Me',
		subtitle: 'Get to know more about me',
		descrption: ['From who I am, past experiences', 'And things of my life', 'Get to know who I am!'],
		url: '/about',
		color: '#cc241d',
	},
	{
		title: 'Projects',
		subtitle: 'What I do on spare-time',
		descrption: ['Because coding random things', 'Even on free time', 'Is where creativity goes wild'],
		url: '/projects',
		color: '#d65d0e',
	},
	{
		title: 'Credits',
		subtitle: 'Credit where credit is due!',
		descrption: [
			'Not everything can be done hand-made by yourself',
			'From fonts, color palette and everything external',
		],
		url: '/credits',
		color: '#b16286',
	},
	{
		title: 'Blog',
		subtitle: 'Weird codes and shenanigans',
		descrption: [
			'New experiences, process of learning and more',
			"Here's how I've learned new skills",
			"Or just about stuff I've discovered",
		],
		url: '/blog',
		color: '#458588',
		disabled: true,
	},
];

export const Page = () => {
	const [selected, setSelected] = useState<number>(0);
	const navigate = useNavigate();

	const page = pages[selected];

	return (
		<div className={classes['page']}>
			<div className={classes['header']}>
				<div className={classes['titleBadge']}>
					<span>&nbsp;</span>
					<span>
						{`<$>: `}
						<b onClick={() => navigate('/home')}>~</b>
					</span>
				</div>
			</div>

			<div className={classes['description']}>
				{page && (
					<>
						<h1>
							{page.title}
							{page.disabled && ` (Not available)`}
						</h1>
						<div style={{ textAlign: 'center' }}>
							{page.descrption.map((x, k) => (
								<p key={k}>{x}</p>
							))}
						</div>
					</>
				)}
			</div>

			<div className={classes['menu']}>
				{pages.map((page, key) => (
					<div onMouseEnter={() => setSelected(key)}>
						<button
							className={[selected === key ? classes['active'] : '', classes['button' + key]].join(' ')}
							style={{ backgroundColor: page.disabled ? 'var(--theme-dark-1)' : page.color }}
							onClick={() => !page.disabled && navigate(page.url)}
						>
							<b>{page.title}</b>
							<div>{page.subtitle}</div>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

interface IPage {
	title: string;
	subtitle: string;
	descrption: string[];
	color: string;
	url: string;
	disabled?: boolean;
}
