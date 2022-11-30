import { PageSection, Grid, GridItem, Card, CardTitle, CardBody, Title, Text } from '@patternfly/react-core';
import { SchoolIcon, CloudIcon, AwardIcon, BookIcon, EnterpriseIcon, ProjectDiagramIcon } from '@patternfly/react-icons';
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
							<Text>
								<p>From January 01, 2012</p>
								<p>To December 20, 2018</p>
								<p>High School / College</p>
							</Text>
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
							<Text>
								<p>C / C++ Course</p>
								<p>Taught by Henrique Dubugras</p>
								<p>Co-CEO of Brex / Pagar.me</p>
							</Text>
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
							<Text>
								<p>July 12, 2013</p>
								<p>National Finalist</p>
							</Text>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem md={4}>
					<Card>
						<CardTitle className={classes['centered']}>
							<BookIcon size="xl" color="var(--pf-global--primary-color--100)" />
						</CardTitle>
						<CardBody className={classes['centered']}>
							<Title headingLevel="h2">First Internship</Title>
							<Text>
								<p>February 17, 2014</p>
								<p>Grupo Ti Solução</p>
								<p>Intern Developer</p>
							</Text>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem md={4}>
					<Card>
						<CardTitle className={classes['centered']}>
							<EnterpriseIcon size="xl" color="var(--pf-global--primary-color--100)" />
						</CardTitle>
						<CardBody className={classes['centered']}>
							<Title headingLevel="h2">First Job</Title>
							<Text>
								<p>March 03, 2015</p>
								<p>Grupo Ti Solução</p>
								<p>Junior Software Developer</p>
							</Text>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem md={4}>
					<Card>
						<CardTitle className={classes['centered']}>
							<ProjectDiagramIcon size="xl" color="var(--pf-global--primary-color--100)" />
						</CardTitle>
						<CardBody className={classes['centered']}>
							<Title headingLevel="h2">Major Project</Title>
							<Text>
								<p>June 15, 2017</p>
								<p>SigaMeCar</p>
								<p>Senior Developer</p>
							</Text>
						</CardBody>
					</Card>
				</GridItem>
			</Grid>
		</PageSection>
	);
};
