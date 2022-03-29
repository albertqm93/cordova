import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { loginUser } from '../logic/User'

import Register from "./Register";

import {
    Link
} from "react-router-dom";

import '../styles/login.scss'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        marginLeft: '43%',
      },
    },
  }));

const Login = ({ history }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signup, setsignup] = useState(false);

  const handleSubmitForm = async (event) => {
      if (!email || !password) {
        setError('Email y contraseña obligatorios')
        return;
      }

      const result = await loginUser(email, password);
      if (!result.success) { 
        setError(result.message);
      } else {
        history.push("/");
      }
    }

    return(
        <div className="loginJS">
            <div className="login">Inicio de sesión</div>
            {!signup ? (
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmitForm}>
                <TextField id="email" label="Email" variant="outlined" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <br/>
                <TextField id="password" label="Contraseña" type="password" variant="outlined" value={password} onChange={(event) => setPassword(event.target.value)} />
                <br/>
                <Button id="buttonLogin" variant="contained" onClick={handleSubmitForm}>Enviar</Button>
            </form>
            ) : (
              <Register setsignup={setsignup} />
            )}
            {error !== '' && <span>{error}</span>}
            <br/>
            <Link to="/forget" className="forgetPassword">He olvidado mi contraseña</Link>
            <Link to="/register" className="registerUser">No tienes cuenta? Registrate!</Link>
        </div>
    )
}

export default Login;