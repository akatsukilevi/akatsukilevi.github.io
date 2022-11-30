import { Grid, GridItem, PageSection } from '@patternfly/react-core';

import classes from './footer.module.scss';

export const LayoutFooter = () => {
	return (
		<PageSection className={classes['footer']}>
			<Grid>
				<GridItem>Copyright &copy; Felipe Angelo Sgarbi. All Rights Reserved</GridItem>
			</Grid>
		</PageSection>
	);
};
