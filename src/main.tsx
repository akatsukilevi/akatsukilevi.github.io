import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

import { Loader } from '@components/layout';

import '@theme/global.scss';

async function bootstrap() {
	const rootElement = document.getElementById('root');
	if (!rootElement) throw new Error('No root element found!');

	const root = createRoot(rootElement);

	const App = lazy(() => import('./App'));

	root.render(
		<StrictMode>
			<Suspense fallback={<Loader />}>
				<App />
			</Suspense>
		</StrictMode>
	);
}

bootstrap().catch((err) => {
	alert('An fatal error ocurred! Check log for more details');
	console.error(err);
});
