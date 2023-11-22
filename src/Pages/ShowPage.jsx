import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { getShowById } from '../API/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../Components/Shows/ShowMainData';
import Details from '../Components/Shows/Details';
import Seasons from '../Components/Shows/Seasons';
import Cast from '../Components/Shows/Cast';

const ShowPage = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['todos', showId],
    queryFn: () => getShowById(showId),
  });
  console.log(showData);

  if (showData) {
    return (
      <div>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />

        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>

        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }

  if (showError) {
    return <div>we have an error: {showError.message}</div>;
  }

  return <div>louding</div>;
};

export default ShowPage;
