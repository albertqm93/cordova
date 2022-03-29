import React from 'react'

import '../styles/forget.scss'

const Forget = () => {
    return(
        <div className="forgetJS">
            <div className="forgetTitle">Introduce el Email para recuperar la contraseña</div>
            <form id="contact-form" /*onSubmit={this.handleSubmit.bind(this)}*/ method="POST">
                <div className="form-group">
                    <label htmlFor="user">Email:</label>
                    <input type="text" className="form-control10" />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <br/>
        </div>         
    )
}

export default Forget;