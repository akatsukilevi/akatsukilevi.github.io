//* Utils
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

//* Stylesheets
import '@patternfly/patternfly/patternfly.css';
import '@styles/global.scss';

//* Layout
import { LayoutHeader, LayoutLoading, LayoutFooter } from '@components/layout';
import { Page } from '@patternfly/react-core';

//* Pages
const NotFoundPage = lazy(() => import('@pages/notfound'));
const HomePage = lazy(() => import('@pages/index'));
const BlogListPage = lazy(() => import('@pages/blog'));
const BlogPage = lazy(() => import('@pages/blogPage'));

export const App = () => {
	return (
		<HashRouter>
			<Page header={<LayoutHeader />}>
				<Suspense fallback={<LayoutLoading />}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/blog" element={<BlogListPage />} />
						<Route path="/blog/:id" element={<BlogPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Suspense>
				<LayoutFooter />
			</Page>
		</HashRouter>
	);
};
