import { addProductCart, removeProductCart, emptyCart } from './Products'

it('emptyCart', () => {
    const cartEmpty = emptyCart();
    expect(cartEmpty.length).toEqual(0);
});

it('addProductCart', () => {
    const newCart = emptyCart();
    const product = { id: 1, name: 'Product 1' };    
    const cartWithProduct = addProductCart(newCart, product);
    expect(cartWithProduct.length).toBe(1);
    expect(cartWithProduct[0].id).toEqual(1);
    expect(cartWithProduct[0].name).toEqual('Product 1');
    expect(cartWithProduct[0].quantity).toEqual(1);
});

it('removeProductCart', () => {
    const newCart = emptyCart();
    const product = { id: 1, name: 'Product 1' };    
    const cartWithProduct = addProductCart(newCart, product);
    const productRemoved = removeProductCart(cartWithProduct, product);
    expect(productRemoved.length).toBe(0);
});

it('add 2 products and remove all', () => {
    const newCart = emptyCart();
    const product1 = { id: 1, name: 'Product 1' };  
    const product2 = { id: 2, name: 'Product 2' };  
    const cartWithProduct = addProductCart(newCart, product1);
    const cartWithProducts = addProductCart(cartWithProduct, product2);
    const removeAll = emptyCart();
    expect(removeAll.length).toBe(0);
});

it('sums product quantity', () => {
    const newCart = emptyCart();
    const product1 = { id: 1, name: 'Product 1' };
    const product2 = { id: 2, name: 'Product 2' };

    let cart = addProductCart(newCart, product1);
    cart = addProductCart(cart, product2);
    cart = addProductCart(cart, product1);
  
    expect(cart.length).toEqual(2);
    expect(cart[0].id).toEqual(1);
    expect(cart[0].name).toEqual('Product 1');
    expect(cart[0].quantity).toEqual(2);
    expect(cart[1].id).toEqual(2);
    expect(cart[1].name).toEqual('Product 2');
    expect(cart[1].quantity).toEqual(1);
  
    cart = removeProductCart(cart, product1);
    expect(cart.length).toEqual(2);
    expect(cart[0].id).toEqual(1);
    expect(cart[0].name).toEqual('Product 1');
    expect(cart[0].quantity).toEqual(1);
    expect(cart[1].id).toEqual(2);
    expect(cart[1].name).toEqual('Product 2');
    expect(cart[1].quantity).toEqual(1);
  
    cart = removeProductCart(cart, product1);
    expect(cart.length).toEqual(1);
    expect(cart[0].id).toEqual(2);
    expect(cart[0].name).toEqual('Product 2');
    expect(cart[0].quantity).toEqual(1);
  })
