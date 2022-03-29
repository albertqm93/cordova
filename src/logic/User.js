import {
    registro,
    login,
    borrarUsuario,
    registerAuthObserver,
    salir,
  } from '../services/auth';

import { createNewWithId, getById, updateFieldsById, removeById, createNew, getRealTime } from '../services/data';

const ERROR_MESSAGES = {
  'auth/weak-password': 'La contraseña debe tener mínimo 6 caracteres',
  'auth/email-already-in-use': 'Email ya utilizado',
  'auth/wrong-password': 'Usuario y/o contraseña incorrectos',
};

const PROFILES_COLLECTION = 'profiles';
const PRODUCTS_COLLECTION = 'products';

export async function registerUser(email, password, name, lastName, telephone, rol, user, compras) {
  const result = await registro(email, password);

  if (result.success) {
    const profileResult = await createNewWithId(PROFILES_COLLECTION, { email, name, lastName, telephone, rol, user, compras }, result.id);
    return { success: profileResult };
  }
  const message = ERROR_MESSAGES[result.error] ? ERROR_MESSAGES[result.error] : 'Error inesperado';
  return { success: false, message };
}

export async function loginUser(email, password) {
  const result = await login(email, password);

  if (result.success) {
    return { success: true };
  }

  const message = ERROR_MESSAGES[result.error] ? ERROR_MESSAGES[result.error] : 'Error inesperado';
  return { success: false, message };
}

export async function updateUser(id, name, lastName, telephone, rol, user) {
    const profileResult = await updateFieldsById(PROFILES_COLLECTION , id , { name, lastName, telephone, rol, user });
    return { success: profileResult };
}

export async function updateProductPurchase(id, stock) {
  const profileResult = await updateFieldsById(PRODUCTS_COLLECTION , id , { stock });
  return { success: profileResult };
}

export async function updateUserPurchase(id, compras) {
  const profileResult = await updateFieldsById(PROFILES_COLLECTION , id , { compras });
  return { success: profileResult };
}

export async function deleteUser(id) {
    const profileResult = await removeById(PROFILES_COLLECTION, id);
    const result = await borrarUsuario();
    return { success: profileResult && result };
}

export async function deleteProduct(id) {
  const profileResult = await removeById(PRODUCTS_COLLECTION, id);
  return { success: profileResult };
}

export async function createProduct(image, product, detail, price, stock) {
  const productResult = await createNew(PRODUCTS_COLLECTION, { image, product, detail, price, stock });
  return { success: productResult };
}

export async function showProducts(callback) {
  const productResult = await getRealTime(PRODUCTS_COLLECTION, callback);
  return { success: productResult };
}

export function registerUserObserver(callback) {
  registerAuthObserver(callback);
}

export async function getUserById(id) {
  const result = await getById(PROFILES_COLLECTION, id);
  return result;
}

export async function signout() {
  const result = await salir();
  return result.success;
}

//Redux

export function user(state, action){
  return action.payload !== null ? { ...state, logged:true, ...action.payload } : null ;
}

