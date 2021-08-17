const fetchCountries = searchQuery => {
  const BASE_URL = 'https://restcountries.eu/rest/v2/name/';
  let url = `${BASE_URL}${searchQuery}`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
};

export default fetchCountries;