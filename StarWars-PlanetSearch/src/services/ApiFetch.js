const getPlanets = async () => {
  const URL_BASE_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(URL_BASE_API);
  const data = await response.json();
  return data.results;
};

export default getPlanets;
