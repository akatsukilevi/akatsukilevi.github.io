import { lazy } from 'react';

import { LayoutBackground } from '@components/layout';

const Hero = lazy(() => import('@components/hero'));
const AboutSection = lazy(() => import('@components/about'));
const ExperiencesSection = lazy(() => import('@components/experience'));
const EducationSection = lazy(() => import('@components/education'));
const ContactSection = lazy(() => import('@components/contact'));

const IndexPage = () => {
	return (
		<>
			<LayoutBackground width={2} length={1} emitNum={1} speed={1} maxLines={50} />
			<Hero />
			<AboutSection />
			<ExperiencesSection />
			<EducationSection />
			<ContactSection />
		</>
	);
};

export default IndexPage;
