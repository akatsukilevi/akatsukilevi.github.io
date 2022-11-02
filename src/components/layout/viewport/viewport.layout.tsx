import { Suspense, ReactNode, useEffect } from 'react';

import { BackgroundLayout } from '@components/layout';
import { useLoader } from '@services/loader';
import { useMedia } from '@utils/matchMedia';

import classes from './viewport.module.scss';

interface Props {
	children: ReactNode[];
}

export const ViewportLayout = ({ children }: Props) => {
	const [isDesktop] = useMedia('(min-width: 576px)');

	const { isLoading, hadIntro, setLoading, setIntro } = useLoader();

	useEffect(() => {
		if (hadIntro) return;

		setTimeout(() => {
			setLoading(false);
			setIntro(true);
		}, 2000);
	}, [hadIntro]);

	return (
		<>
			{isDesktop && (
				<BackgroundLayout width={2} length={1} emitNum={1} speed={1} maxLines={50} paused={!hadIntro} />
			)}
			<div
				id="pageViewport"
				className={[classes['viewport'], !hadIntro ? classes['viewportFirstLoad'] : ''].join(' ')}
			>
				<div
					className={[classes['loader'], isLoading ? classes['loaderShow'] : classes['loaderHide']].join(' ')}
				>
					<div className={classes['grower']}></div>
					<div className={classes['swiperRotator']}>
						<div className={classes['swiperLeft']}></div>
						<div className={classes['swiperRight']}></div>
					</div>
					<div className={classes['logo']}></div>
				</div>
				{hadIntro && <Suspense fallback={<div>Loading</div>}>{children}</Suspense>}
			</div>
		</>
	);
};
