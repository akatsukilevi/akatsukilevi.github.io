import { useEffect, useState } from 'react';

export const useMedia = (query: string) => {
	const [matches, setMatches] = useState<boolean>(window.matchMedia(query).matches);

	useEffect(() => {
		const mediaQuery = window.matchMedia(query);
		const onChange = (ev: MediaQueryListEvent) => setMatches(ev.matches);

		mediaQuery.addEventListener('change', onChange);
		return () => mediaQuery.removeEventListener('change', onChange);
	}, []);

	return [matches];
};
