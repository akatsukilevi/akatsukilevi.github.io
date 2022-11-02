import { useNavigate } from '@services/loader';

import { useMedia } from '@utils/matchMedia';

import classes from './intro.module.scss';

export const Page = () => {
	const [isDesktop] = useMedia('(min-width: 576px)');
	const navigate = useNavigate();

	return (
		<div className={classes['page']} onClick={() => navigate('/home')}>
			<div className={classes['logo']} />
			<div className={classes['content']}>
				<h1 className={classes['header']}>
					{`|>`} Hi I'm Felipe {`<|`}
				</h1>
				<p className={classes['lineA']}>
					<div>Software developer, 6+ years of experience</div>
					<div>Aiming to innovate with technology</div>
					<div>And achieving with demanding development objectives.</div>
				</p>
				<p className={classes['lineB']}>"Science isn't about why, It's about why not"</p>
			</div>
			<div className={classes['message']}>
				<span>{isDesktop ? 'CLICK TO START' : 'TAP TO START'}</span>
			</div>
		</div>
	);
};
