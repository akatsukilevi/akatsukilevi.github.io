import { createContext, useContext, useState } from 'react';
import { useLocation } from 'wouter';

interface ILoaderContext {
	isLoading: boolean;
	hadIntro: boolean;
	setLoading: (newValue: boolean) => void;
	setIntro: (newValue: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LoaderContext = createContext<ILoaderContext>(null as any);

export const useLoader = () => useContext(LoaderContext);
export const useNavigate = () => {
	const { setLoading } = useLoader();
	const [, goTo] = useLocation();

	return (path: string) => {
		//* Start animation
		setLoading(true);

		//* Prepare to navigate
		setTimeout(() => {
			goTo(path);
			setLoading(false);
		}, 2 * 1000);
	};
};

export const LoaderContextProvider = ({ children }: { children: JSX.Element }) => {
	const [isLoading, setLoading] = useState(true);
	const [hadIntro, setIntro] = useState(false);

	return (
		<LoaderContext.Provider value={{ isLoading, hadIntro, setLoading, setIntro }}>
			{children}
		</LoaderContext.Provider>
	);
};
