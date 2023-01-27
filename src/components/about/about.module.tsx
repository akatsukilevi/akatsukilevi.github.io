import { PageSection, Grid, GridItem, Card, CardTitle, CardBody, Title, Progress } from '@patternfly/react-core';
import { JsIcon, NodeJsIcon, MicrosoftIcon, DatabaseIcon } from '@patternfly/react-icons';
import { useInView } from 'react-intersection-observer';

import classes from './about.module.scss';

export const AboutSection = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<PageSection>
			<div ref={ref}></div>
			<Grid hasGutter>
				<GridItem md={5}>
					<Title headingLevel="h1" className={[classes['title'], inView && classes['visible']].join(' ')}>
						"Science isn't about why, it's about why not"
					</Title>
					<br />
					<p className={[classes['textA'], inView && classes['visible']].join(' ')}>
						Background in cloud, desktop and mobile platforms. Skilled in using JavaScript/Typescript, .NET, Java, and
						SQL/No-SQL.
					</p>
					<p className={[classes['textB'], inView && classes['visible']].join(' ')}>
						Complex problem-solver with an analytical driven mindset.
					</p>
					<p className={[classes['textC'], inView && classes['visible']].join(' ')}>
						Dedicated to achieving demanding development objectives and innovating with new solutions.
					</p>
					<p className={[classes['textD'], inView && classes['visible']].join(' ')}>
						Resourceful Application Developer with outstanding knowledge of Front-End, Back-End and Dev Ops with 6+ years of
						experience.
					</p>
				</GridItem>
				<GridItem md={7}>
					<Grid hasGutter className={[classes['cards'], inView && classes['visible']].join(' ')}>
						<GridItem md={6}>
							<Card>
								<CardTitle className={classes['centered']}>
									<JsIcon size="xl" color="var(--pf-global--primary-color--100)" />
								</CardTitle>
								<CardBody className={classes['centered']}>
									<Title headingLevel="h2">JavaScript / TypeScript</Title>
									<Progress aria-label="JavaScript / TypeScript" value={100} />
								</CardBody>
							</Card>
						</GridItem>
						<GridItem md={6}>
							<Card>
								<CardTitle className={classes['centered']}>
									<NodeJsIcon size="xl" color="var(--pf-global--primary-color--100)" />
								</CardTitle>
								<CardBody className={classes['centered']}>
									<Title headingLevel="h2">Node.JS</Title>
									<Progress aria-label="Node.JS" value={100} />
								</CardBody>
							</Card>
						</GridItem>
						<GridItem md={6}>
							<Card>
								<CardTitle className={classes['centered']}>
									<MicrosoftIcon size="xl" color="var(--pf-global--primary-color--100)" />
								</CardTitle>
								<CardBody className={classes['centered']}>
									<Title headingLevel="h2">.NET Core</Title>
									<Progress aria-label=".NET Core" value={90} />
								</CardBody>
							</Card>
						</GridItem>
						<GridItem md={6}>
							<Card>
								<CardTitle className={classes['centered']}>
									<DatabaseIcon size="xl" color="var(--pf-global--primary-color--100)" />
								</CardTitle>
								<CardBody className={classes['centered']}>
									<Title headingLevel="h2">MySQL / Postgres</Title>
									<Progress aria-label="MySQL / Postgres" value={90} />
								</CardBody>
							</Card>
						</GridItem>
					</Grid>
				</GridItem>
			</Grid>
		</PageSection>
	);
};
