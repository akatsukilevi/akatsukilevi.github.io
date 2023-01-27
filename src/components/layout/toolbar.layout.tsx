import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, Button } from '@patternfly/react-core';
import { Link, useLocation } from 'react-router-dom';

const Routes = [
	{
		path: '/',
		name: 'Home',
	},
	{
		path: '/blog',
		name: 'Blog',
	},
];

export const LayoutToolbar = () => {
	const { pathname } = useLocation();

	return (
		<Toolbar id="fill-toolbar">
			<ToolbarContent>
				<ToolbarGroup spacer={{ default: 'spacerNone', md: 'spacerMd' }}>
					<ToolbarItem>
						{Routes.map((entry, key) => (
							<Button
								key={key}
								component={(x) => <Link {...x} to={entry.path} />}
								variant={pathname == entry.path ? 'primary' : 'link'}
							>
								{entry.name}
							</Button>
						))}
					</ToolbarItem>
				</ToolbarGroup>
			</ToolbarContent>
		</Toolbar>
	);
};
