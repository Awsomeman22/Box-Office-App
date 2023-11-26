import { Link } from 'react-router-dom';

const ShowCard = ({ name, image, id, summary, onStarMeClick, isStarred }) => {
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
      <Link href={`/shows/${id}`} target="_blank" rel="noreferrer">
        Read more
      </Link>

      <button type="button" onClick={() => onStarMeClick(id)}>
        {isStarred ? 'Unstar Me' : 'Star Me'}
      </button>
    </div>
  );
};

export default ShowCard;
