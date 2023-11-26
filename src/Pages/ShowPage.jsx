import { Link, useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { getShowById } from '../API/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../Components/Shows/ShowMainData';
import Details from '../Components/Shows/Details';
import Seasons from '../Components/Shows/Seasons';
import Cast from '../Components/Shows/Cast';
import styled from 'styled-components';
import { TextCenter } from '../Common/TextCenter';

const ShowPage = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['todos', showId],
    queryFn: () => getShowById(showId),
  });
  console.log(showData);

  if (showData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to={'/'}>Go Back Home</Link>
        </BackHomeWrapper>

        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />

        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBlock>

        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>

        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }

  if (showError) {
    return <TextCenter>we have an error: {showError.message}</TextCenter>;
  }

  return <TextCenter>louding</TextCenter>;
};

export default ShowPage;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
