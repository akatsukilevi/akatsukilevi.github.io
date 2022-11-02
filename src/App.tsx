import { Router, Route } from 'wouter';
import { lazy } from 'react';

import { useHashLocation } from '@utils/useHashLocation';
import { ViewportLayout } from '@components/layout';
import { ServiceProviders } from '@services';

const IntroPage = lazy(() => import('@views/intro'));
const HomePage = lazy(() => import('@views/home'));
const AboutPage = lazy(() => import('@views/about'));
const ProjectsPage = lazy(() => import('@views/projects'));
const CreditsPage = lazy(() => import('@views/credits'));

const App = () => {
	return (
		<ServiceProviders>
			<Router hook={useHashLocation}>
				<ViewportLayout>
					<Route path="/" component={IntroPage} />
					<Route path="/home" component={HomePage} />
					<Route path="/about" component={AboutPage} />
					<Route path="/projects" component={ProjectsPage} />
					<Route path="/credits" component={CreditsPage} />
				</ViewportLayout>
			</Router>
		</ServiceProviders>
	);
};

export default App;
