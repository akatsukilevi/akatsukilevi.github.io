import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, Button } from '@patternfly/react-core';
import { GitlabIcon, EnvelopeIcon, TwitterIcon, LinkedinIcon } from '@patternfly/react-icons';

export const LayoutToolbar = () => {
	return (
		<Toolbar id="fill-toolbar">
			<ToolbarContent>
				<ToolbarGroup
					variant="icon-button-group"
					alignment={{ default: 'alignRight' }}
					spacer={{ default: 'spacerNone', md: 'spacerMd' }}
				>
					<ToolbarGroup variant="icon-button-group">
						<ToolbarItem>
							<a href="https://gitlab.com/akatsukilevi" target="_blank">
								<Button variant="link">
									<GitlabIcon color="white" size="md" />
								</Button>
							</a>
						</ToolbarItem>
						<ToolbarItem>
							<a href="https://www.linkedin.com/in/felipe-angelo-sgarbi-fullstack" target="_blank">
								<Button variant="link">
									<LinkedinIcon color="white" size="md" />
								</Button>
							</a>
						</ToolbarItem>
						<ToolbarItem>
							<a href="mailto:akatsukilevi@duck.com" target="_blank">
								<Button variant="link">
									<EnvelopeIcon color="white" size="md" />
								</Button>
							</a>
						</ToolbarItem>
						<ToolbarItem>
							<a href="https://twitter.com/akatsuki_levi" target="_blank">
								<Button variant="link">
									<TwitterIcon color="white" size="md" />
								</Button>
							</a>
						</ToolbarItem>
					</ToolbarGroup>
				</ToolbarGroup>
			</ToolbarContent>
		</Toolbar>
	);
};
