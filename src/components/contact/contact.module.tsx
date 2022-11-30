import { GitlabIcon, EnvelopeIcon, TwitterIcon, LinkedinIcon } from '@patternfly/react-icons';
import { Bullseye, Button, Flex, FlexItem, PageSection, Title } from '@patternfly/react-core';
import { useInView } from 'react-intersection-observer';

import classes from './contact.module.scss';

export const ContactSection = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 1 });

	return (
		<PageSection isCenterAligned className={classes['section']}>
			<Bullseye>
				<Flex direction={{ default: 'column' }}>
					<FlexItem style={{ textAlign: 'center' }}>
						<Title headingLevel="h1" className={[classes['title'], inView && classes['visible']].join(' ')}>
							Get in touch!
						</Title>
					</FlexItem>
					<FlexItem style={{ textAlign: 'center' }}>
						<p>
							<a
								href="https://gitlab.com/akatsukilevi"
								target="_blank"
								className={[classes['textA'], inView && classes['visible']].join(' ')}
							>
								<Button variant="link">
									<GitlabIcon color="white" size="md" />
								</Button>
							</a>
							<a
								href="https://www.linkedin.com/in/felipe-angelo-sgarbi-fullstack"
								target="_blank"
								className={[classes['textB'], inView && classes['visible']].join(' ')}
							>
								<Button variant="link">
									<LinkedinIcon color="white" size="md" />
								</Button>
							</a>
							<a
								href="mailto:akatsukilevi@duck.com"
								target="_blank"
								className={[classes['textC'], inView && classes['visible']].join(' ')}
							>
								<Button variant="link">
									<EnvelopeIcon color="white" size="md" />
								</Button>
							</a>
							<a
								href="https://twitter.com/akatsuki_levi"
								target="_blank"
								className={[classes['textD'], inView && classes['visible']].join(' ')}
							>
								<Button variant="link">
									<TwitterIcon color="white" size="md" />
								</Button>
							</a>
						</p>
					</FlexItem>
				</Flex>
			</Bullseye>
			<div ref={ref}></div>
		</PageSection>
	);
};
