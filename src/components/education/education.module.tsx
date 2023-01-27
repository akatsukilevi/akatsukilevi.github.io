import { PageSection, Grid, GridItem, Card, CardTitle, CardBody, Title } from '@patternfly/react-core';
import { SchoolIcon, CloudIcon, AwardIcon, EnterpriseIcon, ProjectDiagramIcon, PodcastIcon } from '@patternfly/react-icons';
import { useInView } from 'react-intersection-observer';

import classes from './education.module.scss';

export const EducationSection = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<PageSection>
			<div ref={ref}></div>
			<Title headingLevel="h1" className={[classes['title'], inView && classes['visible']].join(' ')}>
				Education, Awards & Accomplishments
			</Title>
			<Grid hasGutter className={[classes['cards'], inView && classes['visible']].join(' ')}>
				<GridItem md={4}>
					<Card>
						<CardTitle className={classes['centered']}>
							<SchoolIcon size="xl" color="var(--pf-global--primary-color--100)" />
						</CardTitle>
						<CardBody className={classes['centered']}>
							<Title headingLevel="h2">E.E. Benedito Matarazzo</Title>
							<ul>
								<li>From January 01, 2012</li>
								<li>To December 20, 2018</li>
								<li>College Degree</li>
							</ul>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem md={4}>
					<Card>
						<CardTitle className={classes['centered']}>
							<CloudIcon size="xl" color="var(--pf-global--primary-color--100)" />
						</CardTitle>
						<CardBody className={classes['centered']}>
							<Title headingLevel="h2">Matarazzo CC50</Title>
							<ul>
								<li>C / C++ Course</li>
								<li>Taught by Henrique Dubugras</li>
								<li>Co-CEO of Brex / Pagar.me</li>
							</ul>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem md={4}>
					<Card>
						<CardTitle className={classes['centered']}>
							<AwardIcon size="xl" color="var(--pf-global--primary-color--100)" />
						</CardTitle>
						<CardBody className={classes['centered']}>
							<Title headingLevel="h2">Brazilian Computer Olympics</Title>
							<ul>
								<li>July 12, 2013</li>
								<li>National Finalist</li>
							</ul>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem md={4}>
					<Card>
						<CardTitle className={classes['centered']}>
							<EnterpriseIcon size="xl" color="var(--pf-global--primary-color--100)" />
						</CardTitle>
						<CardBody className={classes['centered']}>
							<a href="https://grupotisolucao.com.br" target="_blank">
								<Title headingLevel="h2">First Job</Title>
							</a>
							<ul>
								<li>March 03, 2015</li>
								<li>Grupo Ti Solução</li>
								<li>Senior Developer</li>
							</ul>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem md={4}>
					<Card>
						<CardTitle className={classes['centered']}>
							<ProjectDiagramIcon size="xl" color="var(--pf-global--primary-color--100)" />
						</CardTitle>
						<CardBody className={classes['centered']}>
							<a href="https://www.sigamecar.com.br" target="_blank">
								<Title headingLevel="h2">Major Project</Title>
							</a>
							<ul>
								<li>June 15, 2017</li>
								<li>SigaMeCar</li>
								<li>Senior Developer</li>
							</ul>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem md={4}>
					<Card>
						<CardTitle className={classes['centered']}>
							<PodcastIcon size="xl" color="var(--pf-global--primary-color--100)" />
						</CardTitle>
						<CardBody className={classes['centered']}>
							<a href="https://events.hashicorp.com/hashitalks2023" target="_blank">
								<Title headingLevel="h2">HashiTalks 2023</Title>
							</a>
							<ul>
								<li>February 17, 2023</li>
								<li>Hashicorp User Groups</li>
								<li>Speaker</li>
							</ul>
						</CardBody>
					</Card>
				</GridItem>
			</Grid>
		</PageSection>
	);
};
