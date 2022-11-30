import { lazy } from 'react';

const Hero = lazy(() => import('@components/hero'));
const AboutSection = lazy(() => import('@components/about'));
const ExperiencesSection = lazy(() => import('@components/experience'));
const EducationSection = lazy(() => import('@components/education'));
const ContactSection = lazy(() => import('@components/contact'));

const IndexPage = () => {
	return (
		<>
			<Hero />
			<AboutSection />
			<ExperiencesSection />
			<EducationSection />
			<ContactSection />
		</>
	);
};

export default IndexPage;
