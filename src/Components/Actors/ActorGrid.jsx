import ActorCard from './ActorCard';

const ActorGrid = ({ Actors }) => {
  console.log(Actors);
  return (
    <div>
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
    </div>
  );
};

export default ActorGrid;
