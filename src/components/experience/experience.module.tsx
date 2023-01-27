import { PageSection, Grid, GridItem, Card, CardTitle, CardBody, Title, Text, Brand } from '@patternfly/react-core';
import { useInView } from 'react-intersection-observer';

import classes from './experience.module.scss';

export const ExperienceSection = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<PageSection>
			<div ref={ref}></div>
			<Title headingLevel="h1" className={[classes['title'], inView && classes['visible']].join(' ')}>
				Past Experiences
			</Title>
			<Grid hasGutter className={[classes['cards'], inView && classes['visible']].join(' ')}>
				<GridItem md={6}>
					<Card>
						<CardTitle className={classes['centered']}>
							<a href="https://grupotisolucao.com.br" target="_blank">
								<Brand alt="Grupo Ti Solução" widths={{ default: '48px' }}>
									<source srcSet={'/grupotisolucao.png'} />
								</Brand>
								<Title headingLevel="h2">Grupo Ti Solução</Title>
							</a>
						</CardTitle>
						<CardBody className={classes['centered']}>
							<span>
								<p>From March 03, 2015 to June 15, 2017</p>
								<p>Full-Stack Developer</p>
								<br />
								Developed a national-scale payroll loan management system responsible for coordinating multiple distributors
								around the country, keeping control of multiple vendors financial data, ensuring clients loan records were
								synced and updated with multiple banks while keeping a central management system for a full-view details of
								the performance of all sellers, by using stability-first languages and distributed systems to guarantee 0%
								downtime across the whole country, which helped them to reach a all-time record sales of $ 500,000.00 after
								3 months using the software in production. Engineered hardware maintenance tools and benchmarks for ensuring
								the quality and stability of multiple types of hardware, ranging from office computers to large-scale
								servers and across multiple operating systems.
							</span>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem md={6}>
					<Card>
						<CardTitle className={classes['centered']}>
							<a href="https://www.sigamecar.com.br" target="_blank">
								<Brand alt="SigaMeCar" widths={{ default: '48px' }}>
									<source srcSet={'/sigamecar.png'} />
								</Brand>
								<Title headingLevel="h2">SigaMeCar</Title>
							</a>
						</CardTitle>
						<CardBody className={classes['centered']}>
							<span>
								<p>From June 15, 2017 to Present</p>
								<p>Full-Stack Developer</p>
								<br />
								Developed a high availability, fault tolerant car tracking platform from scratch following Industry's best
								practices, with multi-platform compatibility to all major browsers and phone operating systems, while
								developing, implementing and testing a satellite-based GPS tracker solution to multiple models and brands of
								vehicles, ranging from personal vehicles, enterprise-owned trucks and industrial machinery, improving the
								security of the vehicles of our clients by 90% while reducing the cost of maintenance of the vehicle
								trackers by 50%. Also created custom solutions to specific clients to manage and control fleets of vehicles
								and their drivers using a AI-powered platform that insured all vehicles were in the right place at the right
								time in safety, providing over 40% increase on revenue on clients using the system for management of their
								drivers.
							</span>
						</CardBody>
					</Card>
				</GridItem>
			</Grid>
		</PageSection>
	);
};
