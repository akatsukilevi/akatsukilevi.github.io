import { Masthead, MastheadMain, MastheadBrand, MastheadContent, Brand } from '@patternfly/react-core';
import { Link } from 'react-router-dom';

import { LayoutToolbar } from './toolbar.layout';

export const LayoutHeader = () => {
	return (
		<Masthead>
			<MastheadMain>
				<MastheadBrand component={(props) => <Link {...props} to="/" />}>
					<Brand alt="Logo" widths={{ default: '48px' }}>
						<source srcSet={'/logo_transparent.png'} />
					</Brand>
				</MastheadBrand>
			</MastheadMain>
			<MastheadContent>
				<LayoutToolbar />
			</MastheadContent>
		</Masthead>
	);
};
