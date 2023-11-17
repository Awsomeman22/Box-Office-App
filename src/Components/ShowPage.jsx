import { useParams } from 'react-router-dom';

const ShowPage = () => {
  const { showId } = useParams();
  console.log(showId);
  return <div>This is the Dynamic Show Page for {showId}</div>;
};

export default ShowPage;
