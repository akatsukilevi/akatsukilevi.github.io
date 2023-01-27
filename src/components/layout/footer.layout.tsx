import { Button, Grid, GridItem, PageSection } from '@patternfly/react-core';
import { GitlabIcon, EnvelopeIcon, LinkedinIcon, MastodonIcon } from '@patternfly/react-icons';

import classes from './footer.module.scss';

let easterEggTrigger = Math.random() * (1_000_000 - 1) + 1;

export const LayoutFooter = () => {
	return (
		<PageSection className={classes['footer']}>
			<Grid>
				<GridItem md={6}>
					<a href="https://mastodon.social/@akatsukilevi" target="_blank">
						<Button variant="link" icon={<MastodonIcon color="white" size="md" />}>
							@akatsukilevi@mastodon.social
						</Button>
					</a>
				</GridItem>
				<GridItem md={6}>
					<a href="https://gitlab.com/akatsukilevi" target="_blank">
						<Button variant="link" icon={<GitlabIcon color="white" size="md" />}>
							Akatsuki Levi
						</Button>
					</a>
				</GridItem>
				<GridItem md={6}>
					<a href="https://www.linkedin.com/in/felipe-angelo-sgarbi-fullstack" target="_blank">
						<Button variant="link" icon={<LinkedinIcon color="white" size="md" />}>
							Felipe Angelo Sgarbi
						</Button>
					</a>
				</GridItem>
				<GridItem md={6}>
					<a href="mailto:akatsukilevi@duck.com" target="_blank">
						<Button variant="link" icon={<EnvelopeIcon color="white" size="md" />}>
							akatsukilevi@duck.com
						</Button>
					</a>
				</GridItem>
			</Grid>
			<Grid>
				<GridItem>
					{easterEggTrigger === 4510 ? 'Never Gonna Give You Up' : 'Made by Felipe Angelo Sgarbi, Powered by Open Source!'}
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
