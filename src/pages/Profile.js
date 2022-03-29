import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { updateUser, deleteUser } from '../logic/User';

import { useSelector, useDispatch } from 'react-redux';

import { setUser as setReduxUser } from '../redux/actions/userActions';

import '../styles/profile.scss'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        marginLeft: '40%',
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginLeft: '40%',
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Profile = ( { history }) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const emailStore = useSelector(state => state.user ? state.user.email : false);
    const nameStore = useSelector(state => state.user ? state.user.name : false);
    const lastNameStore = useSelector(state => state.user ? state.user.lastName : false);
    const telephoneStore = useSelector(state => state.user ? state.user.telephone : false);
    const rolStore = useSelector(state => state.user ? state.user.rol : false);
    const userStore = useSelector(state => state.user ? state.user.user : false);
    const id = useSelector(state => state.user ? state.user.id : false);

    const [user, setUser] = useState('');
    //const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    //const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [rol, setRol] = useState('');

    

    const updateProfile = async (event) => {
        const result = await updateUser(id, name, lastName, telephone, rol, user);
        if (!result.success) { 
          //setError(result.message);
        } else {
          dispatch(setReduxUser({name, lastName, telephone, rol, user}));
          history.push("/profile");
          console.log("Perfil actualizado")
        }
      }

      const deleteProfile = async (event) => {
        event.preventDefault();
        const result = await deleteUser(id);
        if (!result.success) { 
          //setError(result.message);
        } else {
          dispatch(setReduxUser(null));
          history.push("/login");
        }
      }

    return(
        <div className="profileJS">
            <div className="profile">Profile</div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic1" label="Usuario" disabled variant="outlined" defaultValue={userStore} onChange={(event) => setUser(event.target.value)} />
                <br/>
                <TextField id="outlined-basic2" label="Contraseña" type="password" variant="outlined"/>
                <br/>
                <TextField id="outlined-basic3" label="Email" disabled variant="outlined" defaultValue={emailStore} />
                <br/>
                <TextField id="outlined-basic4" label="Nombre" variant="outlined" defaultValue={nameStore} onChange={(event) => setName(event.target.value)} />
                <br/>
                <TextField id="outlined-basic5" label="Apellido" variant="outlined" defaultValue={lastNameStore} onChange={(event) => setLastName(event.target.value)} />
                <br/>
                <TextField id="outlined-basic6" label="Teléfono" type="number" variant="outlined" defaultValue={telephoneStore} onChange={(event) => setTelephone(event.target.value)} />
                <br/>
                <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={rolStore}
                        onChange={(event) => setRol(event.target.value)}
                    >
                        <MenuItem value={"Cliente"}>Trabajador</MenuItem>
                        <MenuItem value={"Trabajador"}>Cliente</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <Button id="buttonSave" variant="contained" onClick={updateProfile}>Guardar cambios</Button>
                <Button id="buttonDelete" variant="contained" onClick={deleteProfile}>Eliminar cuenta</Button>
            </form>
        </div>
    )
}

export default Profile;