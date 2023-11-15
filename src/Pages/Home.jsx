// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchForPeople, searchForShow } from '../API/tvmaze';
import SearchForm from '../Components/SearchForm';

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

    if (apiData) {
      return apiData[0].show
        ? apiData.map(Data => <div key={Data.show.id}>{Data.show.name}</div>)
        : apiData.map(Data => (
            <div key={Data.person.id}>{Data.person.name}</div>
          ));
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
