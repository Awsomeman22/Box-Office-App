import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { getShowById } from '../API/tvmaze';
import { useQuery } from '@tanstack/react-query';

const ShowPage = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['todos', showId],
    queryFn: () => getShowById(showId),
  });
  console.log(showData);

  if (showData) {
    return <div>we got showData: {showData.name}</div>;
  }

  if (showError) {
    return <div>we have an error: {showError.message}</div>;
  }

  return <div>louding</div>;
};

export default ShowPage;
