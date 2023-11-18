// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchForPeople, searchForShow } from '../API/tvmaze';
import SearchForm from '../Components/SearchForm';
import ShowGrid from '../Components/Shows/ShowGrid';
import ActorGrid from '../Components/Actors/ActorGrid';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['Search', filter],
    queryFn: () =>
      filter.searchOption == 'shows'
        ? searchForShow(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured: {apiDataError.message}</div>;
    }

    if (apiData?.length == 0) {
      return <div>No Results Found !</div>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid Shows={apiData} />
      ) : (
        <ActorGrid Actors={apiData} />
      );
    }

    return null;
  };

  // console.log(apiData);

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
