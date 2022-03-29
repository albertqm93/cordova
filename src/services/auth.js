import * as firebase from 'firebase';

export async function registro(email, password) {
  try {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return { success: true, id: result.user.uid };
  } catch (error) {
    return { success: false, error: error.code };
  }
}

export async function login(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.code };
  }
}

export async function borrarUsuario() {
  try {
    await firebase.auth().currentUser.delete();
    return true
  } catch (error) {
    return { success: false, error: error.code };
  }
}

export function registerAuthObserver(callback) {
  firebase.auth().onAuthStateChanged(callback);
}

export async function salir() {
  try {
    await firebase.auth().signOut();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.code };
  }
}
