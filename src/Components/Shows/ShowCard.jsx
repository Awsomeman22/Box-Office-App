import { Link } from 'react-router-dom';

const ShowCard = ({ name, image, id, summary }) => {
  const summaryStrip = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No Discription';

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStrip}</p>
      <Link to={`/shows/${id}`}>Read more</Link>
      <button type="button">Star me</button>
    </div>
  );
};

export default ShowCard;
