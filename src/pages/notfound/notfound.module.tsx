import { Title, Button, EmptyState, EmptyStateIcon, EmptyStateBody, EmptyStateSecondaryActions } from '@patternfly/react-core';
import { OutlinedQuestionCircleIcon } from '@patternfly/react-icons';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<EmptyState>
			<EmptyStateIcon icon={OutlinedQuestionCircleIcon} />
			<Title headingLevel="h4" size="lg">
				404: This page does not exists
			</Title>
			<EmptyStateBody>The requested page was not found</EmptyStateBody>
			<EmptyStateSecondaryActions>
				<Link to="/">
					<Button variant="primary">Go back home</Button>
				</Link>
			</EmptyStateSecondaryActions>
		</EmptyState>
	);
};

export default NotFoundPage;
