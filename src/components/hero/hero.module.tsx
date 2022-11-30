import { PageSection, Bullseye, Text, TextVariants, TextContent } from '@patternfly/react-core';
import { ChevronDownIcon } from '@patternfly/react-icons';
import { useState, useEffect } from 'react';

import classes from './hero.module.scss';

export const Hero = () => {
	const [isFinished, setFinished] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setFinished(true), 1500);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			<PageSection isCenterAligned className={classes['main-hero']}>
				<Bullseye className={classes['main-content']}>
					<div className={[classes['logoWaves'], isFinished && classes['logoWavesFinished']].join(' ')}>
						<div className={[classes['waveA'], classes['wavesAnimation']].join(' ')}></div>
						<div className={[classes['waveB'], classes['wavesAnimation']].join(' ')}></div>
						<div className={[classes['waveC'], classes['wavesAnimation']].join(' ')}></div>
						<div className={[classes['waveD'], classes['wavesAnimation']].join(' ')}></div>
						<div className={classes['logo']} />
					</div>
					<TextContent className={classes['content-text']}>
						<Text component={TextVariants.h1}>Hi, I'm Felipe</Text>
						<p>
							Software developer, 6+ years of experience. <br />
							Aiming to innovate with technology and achieving with demanding development objectives.
						</p>
						<ChevronDownIcon size="xl" className={classes['text-extra']} />
					</TextContent>
				</Bullseye>
			</PageSection>
		</>
	);
};
