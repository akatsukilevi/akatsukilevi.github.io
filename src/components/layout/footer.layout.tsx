import { Grid, GridItem, PageSection } from '@patternfly/react-core';

import classes from './footer.module.scss';

let easterEggTrigger = Math.random() * (1_000_000 - 1) + 1;

export const LayoutFooter = () => {
	return (
		<PageSection className={classes['footer']}>
			<Grid>
				<GridItem>
					{easterEggTrigger === 4510 ? 'Never Gonna Give You Up' : 'Copyright &copy; Felipe Angelo Sgarbi. All Rights Reserved'}
				</GridItem>
			</Grid>
		</PageSection>
	);
};
