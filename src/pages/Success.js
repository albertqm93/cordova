import React from 'react'

import { useSelector } from 'react-redux';

import '../styles/success.scss'
import Ok from '../images/ok.png';


const Success = () => {

    const name = useSelector(state => state.user.name);

    return(
        <div className="SuccessJS">
            <img className="okIcon" src={Ok} alt="ok icon" />
            <div className="text">Felicidades <span className="name">{name}</span> has comprado satisfactoriamente, muchas gracias!</div>
            <br/>
        </div>         
    )
}

export default Success;