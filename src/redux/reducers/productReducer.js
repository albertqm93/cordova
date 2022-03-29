import { addProductCart, removeProductCart, emptyCart } from '../../logic/Products'

export default function productReducer(state = [], action) {
  switch (action.type) {
    case 'SET_PRODUCT': {
      console.log("action", action)
      return addProductCart(state, action.payload);
    }
    case 'EMPTY_CART': {
      console.log("action", action)
      return emptyCart();
    }
    case 'REMOVE_PRODUCT': {
      console.log("action", action)
      return removeProductCart(state, action.payload) ; 
    }
    default: {
      return state;
    }
  }
}
