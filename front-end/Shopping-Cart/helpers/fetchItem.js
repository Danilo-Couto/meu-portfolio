const fetchItem = (param) => fetch(`https://api.mercadolibre.com/items/${param}`)
  .then((response) => response.json())
  .then((data) => data);

/* ou 
  const fetchItem = async (param) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${param}`); 
  const json = await response.json(); 
  // console.log(json);
  return json;
};
*/

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
