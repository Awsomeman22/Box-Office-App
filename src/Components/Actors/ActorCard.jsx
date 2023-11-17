const ActorCard = ({ name, image, country, birthday, deathday, gender }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>
        {name} {Boolean(gender) && `- ${gender}`}
      </h1>

      <p>{country}</p>
      <p>{birthday}</p>
      <p>{deathday}</p>
    </div>
  );
};

export default ActorCard;
