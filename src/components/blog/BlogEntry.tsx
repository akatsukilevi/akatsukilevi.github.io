import {
	Card,
	Grid,
	GridItem,
	CardTitle,
	CardBody,
	CardFooter,
	Level,
	LevelItem,
	LabelGroup,
	Label,
	Skeleton,
} from '@patternfly/react-core';
import { useNavigate } from 'react-router-dom';

interface Props {
	entry?: IBlogEntry;
}

export const BlogEntry = ({ entry }: Props) => {
	const navigate = useNavigate();

	return (
		<Card hasSelectableInput={entry != null} isSelectableRaised={entry != null} onClick={() => entry && navigate(`/blog/${entry.id}`)}>
			<Grid>
				<GridItem
					style={{
						height: '300px',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundImage: entry && `url('${entry.cover_image}')`,
					}}
				/>
				<GridItem>
					<CardTitle>{!entry ? <Skeleton /> : entry.title}</CardTitle>
					<CardBody>{!entry ? <Skeleton /> : entry.description}</CardBody>
					<CardFooter>
						<Level>
							<LevelItem>{!entry ? <Skeleton /> : entry.readable_publish_date}</LevelItem>
							{entry && (
								<LabelGroup isCompact>
									{entry.tag_list.map((tag, key) => (
										<Label isCompact key={key} color="blue">
											{tag}
										</Label>
									))}
								</LabelGroup>
							)}
						</Level>
					</CardFooter>
				</GridItem>
			</Grid>
		</Card>
	);
};

export interface IBlogEntry {
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
	tag_list: string[];
	tags: string;
}
