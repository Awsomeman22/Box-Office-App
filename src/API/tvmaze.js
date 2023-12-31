const BASE_URL = 'https://api.tvmaze.com';

// /search/shows?q=

const apiGet = async queryString => {
  //   throw new Error('something bad happened');

  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();
  return body;
};

export const searchForShow = query => apiGet(`/search/shows?q=${query}`);

export const searchForPeople = query => apiGet(`/search/people?q=${query}`);

export const getShowById = query =>
  apiGet(`/shows/${query}?embed[]=seasons&embed[]=cast`);

export const getShowByIds = async showIds => {
  const promises = showIds.map(async showId => {
    const result = await apiGet(`/shows/${showId}`);
    return result;
  });

  return Promise.all(promises);
};
