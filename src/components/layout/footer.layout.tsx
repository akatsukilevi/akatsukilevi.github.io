import { Grid, GridItem, PageSection } from '@patternfly/react-core';

import classes from './footer.module.scss';

let easterEggTrigger = Math.random() * (1_000_000 - 1) + 1;

export const LayoutFooter = () => {
	return (
		<PageSection className={classes['footer']}>
			<Grid>
				<GridItem>
					{easterEggTrigger === 4510 ? 'Never Gonna Give You Up' : 'Made by &copy; Felipe Angelo Sgarbi, Powered by Open Source!'}
					{' - '}
					<a href="https://gitlab.com/akatsukilevi/akatsukilevi.gitlab.io" target="_blank">
						See Source Code
					</a>
					{' - Hosting provided by '}
					<a href="https://docs.gitlab.com/ee/user/project/pages/" target="_blank">
						Gitlab Pages
					</a>
				</GridItem>
			</Grid>
		</PageSection>
	);
};
