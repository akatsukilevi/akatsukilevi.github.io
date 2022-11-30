//* Utils
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

//* Stylesheets
import '@patternfly/patternfly/patternfly.css';
import '@styles/global.scss';

//* Layout
import { LayoutHeader, LayoutLoading, LayoutFooter, LayoutBackground } from '@components/layout';
import { Page } from '@patternfly/react-core';

//* Pages
const NotFoundPage = lazy(() => import('@pages/notfound'));
const HomePage = lazy(() => import('@pages/index'));

export const App = () => {
	return (
		<BrowserRouter>
			<LayoutBackground width={2} length={1} emitNum={1} speed={1} maxLines={50} />
			<Page header={<LayoutHeader />}>
				<Suspense fallback={<LayoutLoading />}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Suspense>
				<LayoutFooter />
			</Page>
		</BrowserRouter>
	);
};
