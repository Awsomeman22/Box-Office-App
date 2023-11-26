import ActorCard from './ActorCard';
import { FlexGrid } from '../../Common/FlexGrid';

const ActorGrid = ({ Actors }) => {
  console.log(Actors);
  return (
    <FlexGrid>
      {Actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          image={
            data.person.image
              ? data.person.image.medium
              : '/not_found_image.png'
          }
          country={
            data.person.country ? data.person.country.name : 'No Country Known'
          }
          birthday={
            data.person.birthday
              ? `Born in ${data.person.birthday}`
              : 'No birthday Known'
          }
          deathday={
            data.person.deathday ? `Died in ${data.person.deathday}` : 'Alive'
          }
          gender={data.person.gender ? data.person.gender : 'No gender found'}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
