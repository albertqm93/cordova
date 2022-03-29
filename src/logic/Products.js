import { get } from '../services/data';


const PRODUCTS_COLLECTION = 'products';


export async function searchProducts(search) {
    const products = await get(PRODUCTS_COLLECTION);
    const productsFiltered = products.filter((productToFilter) => {
        return productToFilter.product.includes(search) || productToFilter.price.toString().includes(search)
    })
    return productsFiltered;
}

//Redux

export function addProductCart(state, payload){
    for(var i=0; i < state.length; i++){
        if(state[i].id === payload.id){
          state[i].quantity +=1;
          return [...state]
        }
      }
      return [...state, {...payload, quantity:1}] ; 
}

export function removeProductCart(state, payload){
  for(var j=0; j < state.length; j++){
    if(state[j].id === payload.id){
      state[j].quantity -=1;
    }
  }
  return [...state.filter((product) => product.quantity > 0 )] ; 
}

export function emptyCart(){
    return [] ; 
}

