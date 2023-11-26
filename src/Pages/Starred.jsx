import { useQuery } from '@tanstack/react-query';
import { getShowByIds } from '../API/tvmaze';
import { useStarredShows } from '../lib/useStarredShows';
import ShowGrid from '../Components/Shows/ShowGrid';
import { TextCenter } from '../Common/TextCenter';

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
    return <TextCenter>No shows were starred</TextCenter>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid Shows={starredShows} />;
  }

  if (starredShowsError) {
    return <TextCenter>Error Ocurred: {starredShowsError.message}</TextCenter>;
  }

  return <TextCenter>Shows are loading</TextCenter>;
};

export default Starred;
