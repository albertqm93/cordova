import { user, registerUser } from './User'
import {
    registro,
    login,
    borrarUsuario,
    registerAuthObserver,
    salir,
  } from '../services/auth';

it('user not logged', () => {
    const usuario = null;
    const logged = {payload: null};    
    const userFunc = user(usuario, logged)
    expect(userFunc).toEqual(null);
});

it('user logged', () => {
    const usuario = { compras: 1, email: 'albert11@gmail.com', id: 'Ba49nnMoBibJpKEzR99SSogo49n1', lastName: 'q', name: 'a', rol: 'Cliente', telephone: 1, user: 'albert11', logged:false };    
    const logged = {payload: true};
    const userFunc = user(usuario, logged)
    expect(userFunc.logged).toEqual(true);
});

//asyncs
//falta inicializar firebase
it('register user', async () => {
    const email = 'testingjest@test.com';
    const password = 'test123';
    const name = 'albert';
    const lastName = 'quesada';
    const telephone = 123;
    const rol = 'Cliente';
    const user = 'testingjest';
    const compras = 0;
    const data = await registro(email, password);
    console.log("data", data)
});

