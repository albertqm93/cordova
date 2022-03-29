import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { registerUser } from '../logic/User';

import '../styles/register.scss'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        marginLeft: '43%',
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginLeft: '43%',
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Register = ( { history }) => {
  const classes = useStyles();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [rol, setRol] = useState('');
  const [ventas] = useState(0);
  const [error, setError] = useState('');

  const handlerVentas = (event) => {
    const ventasTarget = Number(event.target.value)
    ventas(ventasTarget)
  }

  const handlerTelephone = (event) => {
    const telephoneTarget = Number(event.target.value)
    setTelephone(telephoneTarget)
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (!email || !password || !name) {
      setError('Email y contraseña obligatorios')
      return;
    }

    const result = await registerUser(email, password, name, lastName, telephone, rol, user, ventas);
    if (!result.success) { 
      setError(result.message);
    } else {
      history.push("/");
    }
  }

    return(
        <div className="registerJS">
            <div className="register">Registro</div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="user" label="Usuario" variant="outlined" type="user" value={user} onChange={(event) => setUser(event.target.value)} />
                <br/>
                <TextField id="password" label="Contraseña" type="password" variant="outlined" value={password} onChange={(event) => setPassword(event.target.value)} />
                <br/>
                <TextField id="email" label="Email" variant="outlined" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <br/>
                <TextField id="name" label="Nombre" variant="outlined" type="name" value={name} onChange={(event) => setName(event.target.value)} />
                <br/>
                <TextField id="lastName" label="Apellido" variant="outlined" type="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                <br/>
                <TextField id="telephone" label="Teléfono" type="telephone" variant="outlined" value={telephone} onChange={handlerTelephone} />
                <br/>
                <TextField id="compras" type="number" variant="outlined" value={handlerVentas} />
                <br/>
                <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="rol"
                        type="rol"
                        value={rol}
                        onChange={(event) => setRol(event.target.value)}
                    >
                        <MenuItem id="cliente" value={"Cliente"}>Trabajador</MenuItem>
                        <MenuItem id="trabajador" value={"Trabajador"}>Cliente</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <Button id="buttonRegister" variant="contained" onClick={handleSubmitForm}>Enviar</Button>
            </form>
            {error !== '' && <span>{error}</span>}
        </div>
    )
}

export default Register;