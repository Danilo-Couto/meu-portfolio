const fetchSimulator = require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

window.fetch = jest.fn(fetchSimulator);

describe('1 - Teste a função fecthProducts', () => {
  
  // implemente seus testes aqui
    test('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toEqual('function');
    // fail('Teste vazio');
    })

  // Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;
    test ('funcao fetchProducts com argumento computador é chamada', () => {
      fetchProducts('computador')
      expect(fetch).toHaveBeenCalled();
    })

  // Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    test ('ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint', () => {
      fetchProducts('computador')
      expect(fetch).toHaveBeenLastCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    })

    // Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.
    test ('', async () => {
      // const compt = 
      expect(await fetchProducts('computador')).toStrictEqual(computadorSearch.results);
    })

    // Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error('mensagem esperada aqui') para comparar com o objeto retornado da API.
    test ('', async () => {
    expect( () => (fetchProducts()).toThrow('You must provide an url') );
    })
    
  })

    
