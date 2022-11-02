import { useNavigate } from '@services/loader';

import classes from './projects.module.scss';

export const Page = () => {
	const navigate = useNavigate();

	return (
		<div className={classes['page']}>
			<div className={classes['header']}>
				<div className={classes['titleBadge']}>
					<span>&nbsp;</span>
					<span>
						{`<$>: `}
						<b onClick={() => navigate('/home')}>~</b>
						{`/projects`}
					</span>
				</div>
			</div>
			<div className={classes['pageContent']}>
				<div className={classes['section']} style={{ animationDelay: '0.5s' }}>
					<h2>Projects</h2>
					<ul>
						<li style={{ animationDelay: '1s' }}>
							<h3 className={classes['title']}>
								<a href="https://tailsproject.co" target="_blank">
									Tails Project
								</a>
							</h3>
							<div className={classes['content']}>
								<p>{'>'} April 27, 2022</p>
								<p>{'<'} Present</p>
								<p>{'$'} FOSS Roleplaying Social Network</p>
								<div>
									A FOSS social network aimed to provide a rich-featured community aimed for
									Roleplaying, providing a easy-to-use, easy-to-extend federated community. Currently
									under development
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
