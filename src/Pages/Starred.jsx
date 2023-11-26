import { useQuery } from '@tanstack/react-query';
import { getShowByIds } from '../API/tvmaze';
import { useStarredShows } from '../lib/useStarredShows';
import ShowGrid from '../Components/Shows/ShowGrid';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
  });

  console.log({ starredShows });

  if (starredShows?.length == 0) {
    return <div>No shows were starred</div>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid Shows={starredShows} />;
  }

  if (starredShowsError) {
    return <div>Error Ocurred: {starredShowsError.message}</div>;
  }

  return (
    <div>
      <div>Shows are loading</div>
    </div>
  );
};

export default Starred;
