import { LoaderContextProvider } from './loader';

const Providers = [LoaderContextProvider];

export const ServiceProviders = ({ children }: { children: JSX.Element }) => {
	return Providers.reduce((prev, Provider) => <Provider>{prev}</Provider>, children);
};
