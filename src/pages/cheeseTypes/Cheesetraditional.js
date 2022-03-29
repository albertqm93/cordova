import React from 'react'

import '../../styles/cheeseTypes/cheesetraditional.scss'

import {
    Link
  } from "react-router-dom";

import tartaTradicional from '../../images/cheesecake/tarta-de-queso-tradicional.jpeg'

const Cheesetraditional = () => {
    window.scrollTo(0, 0)

    return(
        <div className="cheesetraditionalJS">
            <div className="cheesetraditional">Receta Tarta de Queso Tradicional</div>
                <div id="espacio1">
                    <article className="article2">
                        <div id="content">
                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Ingredientes</div>
                                <div className="textTraditionalSpecial">
                                    · 1 tarrina de queso Philadelphia (250 gramos)
                                    <div className="separacionPeque"/>
                                    · 3 yogures naturales (de 125 gramos cada uno)
                                    <div className="separacionPeque"/>
                                    · 3 huevos (M)
                                    <div className="separacionPeque"/>
                                    · 50 gramos de harina
                                    <div className="separacionPeque"/>
                                    · 150 gramos de azúcar
                                    <div className="separacionPeque"/>
                                    · mantequilla para el molde.
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Elaboración</div>
                                <div className="separacionPeque"/>
                                <div className="textTraditional">
                                    Pon el horno a calentar a 175º C. Unta el molde con mantequilla, espolvorea un poco de harina y azúcar, repártelo por el molde y desecha lo que no quede adherido a la mantequilla. Reserva el molde.
                                    <div className="separacionPeque"/>
                                    Mezcla en un cuenco amplio todos los ingredientes, el queso, los yogures (puedes sustituir alguno por un yogur de limón u otro sabor), los huevos, la harina y el azúcar, y bate con la batidora de mano hasta obtener una crema fina.
                                    <div className="separacionPeque"/>
                                    Vierte la masa en el molde e introdúcelo en el horno cuando esté a la temperatura marcada. Deja cocer una media hora, dependerá del grosor que le hayas dado y si ves que se tuesta mucho, cúbrela con papel de aluminio.
                                    <div className="separacionPeque"/>
                                    La tarta estará hecha cuando introduzcas un palillo y salga limpio. Cuando retires la tarta de queso del horno, déjala enfriar y después resérvala en el frigorífico, es cuando adquirirá la particular y clásica textura de las tartas de queso.
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Presentación</div>
                                <div className="textTraditional">
                                    Puedes servir la <Link to="/cheesecake" className="ref"><b>Tarta de Queso</b></Link> sola, a nosotros nos encanta así, o acompañarla de algún coulis de frutas, chocolate e incluso con galletas, ya que este pastel o tarta no lleva base. Hoy la hemos probado con uvas y chocolate, la verdad es que las uvas y el queso…
                                    </div>
                                    <img src={tartaTradicional} className="imgTypeTraditional" alt="tradicional pic"/>
                                </div>
                            </div>
                    </article>
                </div>
        </div>
    )
}

export default Cheesetraditional;