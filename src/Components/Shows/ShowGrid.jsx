import { useStarredShows } from '../../lib/useStarredShows';
import ShowCard from './ShowCard';
import { FlexGrid } from '../../Common/FlexGrid';

const ShowGrid = ({ Shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();
  console.log({ starredShows });

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  console.log(Shows);
  return (
    <FlexGrid>
      {Shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={
            data.show.image
              ? data.show.image.medium
              : 'public/not_found_image.png'
          }
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
