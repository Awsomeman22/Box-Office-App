import ShowCard from './ShowCard';

const ShowGrid = ({ Shows }) => {
  console.log(Shows);
  return (
    <div>
      {Shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={
            data.show.image
              ? data.show.image.medium
              : 'public/not_found_image.png'
          }
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
