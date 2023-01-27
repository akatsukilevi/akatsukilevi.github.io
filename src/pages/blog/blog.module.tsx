import {
	Button,
	EmptyState,
	EmptyStateBody,
	EmptyStateIcon,
	EmptyStatePrimary,
	PageSection,
	Title,
	Text,
	Stack,
	StackItem,
	Pagination,
} from '@patternfly/react-core';
import { ResourcesEmptyIcon, ErrorCircleOIcon } from '@patternfly/react-icons';
import { useFetch } from '@utils/useFetch';
import { Link } from 'react-router-dom';
import { BlogEntry, IBlogEntry } from '@components/blog';
import { useState } from 'react';

const BlogListPage = () => {
	const [page, setPage] = useState(1);
	const { response, loading, error } = useFetch<IBlogEntry[]>(`https://dev.to/api/articles?username=akatsukilevi&page=${page}`);

	return (
		<>
			<PageSection>
				<Title headingLevel="h1">Blog</Title>
				<Text>
					Powered by <a href="https://dev.to/akatsukilevi">DEV.to</a>
				</Text>
			</PageSection>
			<Pagination
				perPageComponent="button"
				toggleTemplate={({ firstIndex, lastIndex }) => (
					<>
						<b>
							{firstIndex} - {lastIndex}
						</b>
					</>
				)}
				perPage={30}
				page={page}
				isDisabled={loading || !response}
				variant="top"
				onSetPage={(_, newPage) => setPage(newPage)}
				isCompact
				isSticky
			/>
			{loading || !response ? (
				<PageSection>
					<Stack hasGutter>
						<StackItem>
							<BlogEntry />
						</StackItem>
						<StackItem>
							<BlogEntry />
						</StackItem>
					</Stack>
				</PageSection>
			) : error ? (
				<PageSection>
					<EmptyState>
						<EmptyStateIcon icon={ErrorCircleOIcon} />
						<Title headingLevel="h4" size="lg">
							An error ocurred!
						</Title>
						<EmptyStateBody>
							Failed to fetch blog entries, please check your internet connection and try again later
						</EmptyStateBody>
						<EmptyStatePrimary>
							<Link to="/">
								<Button variant="link">Return home</Button>
							</Link>
						</EmptyStatePrimary>
					</EmptyState>
				</PageSection>
			) : response.length == 0 ? (
				<PageSection>
					<EmptyState>
						<EmptyStateIcon icon={ResourcesEmptyIcon} />
						<Title headingLevel="h4" size="lg">
							No blog entries found
						</Title>
						<EmptyStateBody>No entries found. Check if you aren't way too far on pagination and try again later</EmptyStateBody>
					</EmptyState>
				</PageSection>
			) : (
				<PageSection>
					<Stack hasGutter>
						{response.map((post, key) => (
							<StackItem key={key}>
								<BlogEntry entry={post} />
							</StackItem>
						))}
					</Stack>
				</PageSection>
			)}
			<Pagination
				perPageComponent="button"
				toggleTemplate={({ firstIndex, lastIndex }) => (
					<>
						<b>
							{firstIndex} - {lastIndex}
						</b>
					</>
				)}
				perPage={30}
				page={page}
				isDisabled={loading || !response}
				variant="bottom"
				onSetPage={(_, newPage) => setPage(newPage)}
				isCompact
				isSticky
			/>
		</>
	);
};

export default BlogListPage;
