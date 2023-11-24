import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';

const usePresistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const presistedValue = localStorage.getItem(localStorageKey);

    return presistedValue ? JSON.parse(presistedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

const starredShowsReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter(showId => showId !== action.showId);
    default:
      return currentStarred;
  }
};

const ShowGrid = ({ Shows }) => {
  const [starredShows, dispatchStarred] = usePresistedReducer(
    starredShowsReducer,
    [],
    'starredShows'
  );
  console.log({ starredShows });

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

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
          onStarMeClick={onStarMeClick}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
