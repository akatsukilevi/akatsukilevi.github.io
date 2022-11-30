import { EmptyState, EmptyStateIcon, PageSection, Spinner, Title } from '@patternfly/react-core';

export const LayoutLoading = () => {
	return (
		<PageSection style={{ height: '80vh', display: 'flex', justifyContent: 'center' }}>
			<EmptyState>
				<EmptyStateIcon icon={Spinner} />
				<Title headingLevel="h4" size="lg">
					Loading...
				</Title>
			</EmptyState>
		</PageSection>
	);
};
