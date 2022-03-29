
export function setProduct(product) {
    return { type: 'SET_PRODUCT', payload: product };
}

export function setEmptyCart() {
  return { type: 'EMPTY_CART' };
}

export function setRemoveProductFromCart(product) {
  return { type: 'REMOVE_PRODUCT', payload: product };
}