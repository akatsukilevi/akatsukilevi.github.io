import { createRoot } from 'react-dom/client';
import { App } from './App';

document.addEventListener('DOMContentLoaded', () => {
	try {
		const container = document.getElementById('root');
		const root = createRoot(container!);

		root.render(<App />);
	} catch (error) {
		alert && alert('An error ocurred and the website is unable to load. Check logs for details');
		console.error(error);
	}
});
