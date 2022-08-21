const fetchSimulator = require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

window.fetch = jest.fn(fetchSimulator);

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  test('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toEqual('function');
  //  fail('Teste vazio');
});

  // Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada;
  test ('funcao fetchItem com argumento MLB1615760527 é chamada', () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  })

// Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";
  test ('ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint', () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenLastCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })

  // Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.
  test ('', async () => {
    // const compt = 
    expect(await fetchItem('MLB1615760527')).toStrictEqual(item);
  })

  // Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error('mensagem esperada aqui') para comparar com o objeto retornado da API.
  test ('', async () => {
  expect( () => (fetchItem()).toThrow('You must provide an url') );
  })

})