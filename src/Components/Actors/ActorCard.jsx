import { SearchCard, SearchImgWrapper } from '../../Common/SearchCard';

const ActorCard = ({ name, image, country, birthday, deathday, gender }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>
        {name} {Boolean(gender) && `- ${gender}`}
      </h1>

      <p>{country}</p>
      <p>{birthday}</p>
      <p>{deathday}</p>
    </SearchCard>
  );
};

export default ActorCard;
