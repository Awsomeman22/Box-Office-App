import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShowById } from '../API/tvmaze';

const ShowPage = () => {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  console.log(showId);

  useEffect(() => {
    async function fetchData() {
      try {
        const Data = await getShowById(showId);
        setShowData(Data);
        console.log(Data);
      } catch (error) {
        setShowError(error);
      }
    }
    fetchData();
  }, [showId]);

  if (showData) {
    return <div>we got showData: {showData.name}</div>;
  }

  if (showError) {
    return <div>we have an error: {showError.message}</div>;
  }

  return <div>louding</div>;
};

export default ShowPage;
