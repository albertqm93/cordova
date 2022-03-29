import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../styles/contact.scss'

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
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Contact = () => {
    const classes = useStyles();
    return(
        <div className="contactJS">
            <div className="contact">Contacto</div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                <br/>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <br/>
                <TextField id="outlined-multiline-static" label="Mensaje" multiline rows="6" variant="outlined" />
                <br/>
                <Button variant="contained" className={classes.boton} id="buttonContact">Enviar</Button>
            </form>

        </div>
    )
}

export default Contact;