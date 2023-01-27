import {
	PageSection,
	Title,
	Text,
	Skeleton,
	Button,
	EmptyState,
	EmptyStateBody,
	EmptyStateIcon,
	EmptyStatePrimary,
	Spinner,
	LabelGroup,
	Label,
	Grid,
	GridItem,
	Card,
	CardBody,
	CodeBlock,
	CodeBlockCode,
	CodeBlockAction,
	ClipboardCopyButton,
	List,
	ListItem,
	ListComponent,
	OrderType,
} from '@patternfly/react-core';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '@utils/useFetch';
import { ErrorCircleOIcon } from '@patternfly/react-icons';
import ReactMarkdown from 'react-markdown';

//* Remark plugins
import remarkCodeTitle from 'remark-code-title';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';

const BlogPage = () => {
	const { id } = useParams<{ id: string }>();
	const { response: post, loading, error } = useFetch<IPost>(`https://dev.to/api/articles/${id}`);

	return (
		<>
			{loading ? (
				<PageSection>
					<Title headingLevel="h2">
						<Skeleton />
					</Title>
					<Text>
						<EmptyState>
							<EmptyStateIcon icon={Spinner} />
							<Title headingLevel="h4" size="lg">
								Loading...
							</Title>
							<EmptyStateBody>
								<Skeleton height="100px" />
							</EmptyStateBody>
						</EmptyState>
					</Text>
				</PageSection>
			) : error || !post ? (
				<PageSection>
					<EmptyState>
						<EmptyStateIcon icon={ErrorCircleOIcon} />
						<Title headingLevel="h4" size="lg">
							An error ocurred!
						</Title>
						<EmptyStateBody>
							The post you are trying to read does not exist or failed to be fetched, please try again later
						</EmptyStateBody>
						<EmptyStatePrimary>
							<Link to="/">
								<Button variant="link">Return home</Button>
							</Link>
						</EmptyStatePrimary>
					</EmptyState>
				</PageSection>
			) : (
				<PageSection>
					<Grid hasGutter>
						<GridItem>
							<Title headingLevel="h2">{post.title}</Title>
							<Title headingLevel="h3">{post.description}</Title>
							<Text>{post.reading_time_minutes} minutes read</Text>
							<LabelGroup isCompact>
								{post.tags.map((tag, key) => (
									<Label isCompact key={key} color="blue">
										{tag}
									</Label>
								))}
							</LabelGroup>
						</GridItem>
						<GridItem
							style={{
								height: '200px',
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundImage: post && `url('${post.cover_image}')`,
							}}
						/>
						<GridItem>
							<Card>
								<CardBody>
									<ReactMarkdown
										remarkPlugins={[
											[remarkGfm, { singleTilde: false }],
											[remarkToc, {}],
											[remarkCodeTitle, {}],
										]}
										components={{
											h1: ({ children }) => <Title headingLevel="h1">{children}</Title>,
											h2: ({ children }) => <Title headingLevel="h2">{children}</Title>,
											h3: ({ children }) => <Title headingLevel="h3">{children}</Title>,
											h4: ({ children }) => <Title headingLevel="h4">{children}</Title>,
											h5: ({ children }) => <Title headingLevel="h5">{children}</Title>,
											h6: ({ children }) => <Title headingLevel="h6">{children}</Title>,
											p: ({ children }) => <Text>{children}</Text>,
											ul: ({ children }) => <List>{children}</List>,
											ol: ({ children }) => (
												<List component={ListComponent.ol} type={OrderType.number}>
													{children}
												</List>
											),
											li: ({ children }) => <ListItem>{children}</ListItem>,
											code({ node, inline, className, children, ...props }) {
												return !inline ? (
													<CodeBlock
														actions={
															<>
																<CodeBlockAction>
																	<ClipboardCopyButton
																		id="basic-copy-button"
																		textId="code-content"
																		aria-label="Copy to clipboard"
																		onClick={() => {
																			navigator.clipboard.writeText(children.toString());
																		}}
																		maxWidth="110px"
																		variant="plain"
																	>
																		Copy to clipboard
																	</ClipboardCopyButton>
																</CodeBlockAction>
															</>
														}
													>
														<CodeBlockCode children={children} />
													</CodeBlock>
												) : (
													<code className={className} {...props}>
														{children}
													</code>
												);
											},
										}}
										children={post.body_markdown}
									/>
								</CardBody>
							</Card>
						</GridItem>
						<GridItem>
							<Text>Published at {post.readable_publish_date}</Text>
						</GridItem>
					</Grid>
				</PageSection>
			)}
		</>
	);
};

export default BlogPage;

interface IPost {
	type_of: string;
	id: number;
	title: string;
	description: string;
	readable_publish_date: string;
	slug: string;
	path: string;
	url: string;
	comments_count: number;
	public_reactions_count: number;
	collection_id: null;
	published_timestamp: Date;
	positive_reactions_count: number;
	cover_image: string;
	social_image: string;
	canonical_url: string;
	created_at: Date;
	edited_at: null;
	crossposted_at: null;
	published_at: Date;
	last_comment_at: Date;
	reading_time_minutes: number;
	tag_list: string;
	tags: string[];
	body_html: string;
	body_markdown: string;
}
