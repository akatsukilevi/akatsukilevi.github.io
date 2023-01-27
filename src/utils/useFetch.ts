import { useState, useEffect } from 'react';

interface useFetchPayload<T> {
	response: T | null;
	loading: boolean;
	error: boolean;
}

function useFetch<T = any>(url: string, options?: RequestInit): useFetchPayload<T> {
	const [response, setResponse] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const doFetch = async () => {
			try {
				const res = await fetch(url, options);
				const json = await res.json();

				setLoading(false);
				setResponse(json as T);
			} catch (error) {
				console.error(`Failed to fetch '${url}'`, error);

				setLoading(false);
				setError(true);
			}
		};

		doFetch();
	}, [url, options]);

	return { response, loading, error };
}

export { useFetch };
