// salvar os itens do carrinho de compras no localStorage, em uma chave denominada cartItems. Todas as adições e remoções devem ser abordadas para que a lista esteja sempre atualizada.

const saveCartItems = (item) => localStorage.setItem('cartItems', item);
  
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}