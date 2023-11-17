// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchForPeople, searchForShow } from '../API/tvmaze';
import SearchForm from '../Components/SearchForm';
import ShowGrid from '../Components/Shows/ShowGrid';
import ActorGrid from '../Components/Actors/ActorGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);

      let result;

      if (searchOption == 'shows') {
        result = await searchForShow(q);
        setApiData(result);
      } else {
        result = await searchForPeople(q);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
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
