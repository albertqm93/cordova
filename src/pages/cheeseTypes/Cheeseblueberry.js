import React from 'react'

import '../../styles/cheeseTypes/cheesetraditional.scss'

import {
    Link
  } from "react-router-dom";

import tartaBlueberry from '../../images/cheesecake/tarta-de-queso-y-arandanos.jpeg'

const Cheeseblueberry = () => {
    window.scrollTo(0, 0)

    return(
        <div className="cheeseblueberryJS">
            <div className="cheeseblueberry">Tarta de Queso y Arándanos</div>
            <div id="espacio1">
                <article className="article2">
                        <div id="content">
                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Ingredientes</div>
                                <div className="textTraditionalSpecial">
                                    · 250 gramos de queso fresco (también puedes hacerla con queso crema)
                                    <div className="separacionPeque"/>
                                    · 3 huevos
                                    <div className="separacionPeque"/>
                                    · 375 gramos de yogur (3 yogures)
                                    <div className="separacionPeque"/>
                                    · 50 gramos de harina
                                    <div className="separacionPeque"/>
                                    · 140 gramos de azúcar
                                    <div className="separacionPeque"/>
                                    · 100 gramos de arándanos
                                    <div className="separacionPeque"/>
                                    · caramelo líquido.
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Elaboración</div>
                                <div className="separacionPeque"/>
                                <div className="textTraditional">
                                    Precalienta el horno a 175º C introduciendo una bandeja grande y honda con agua para cocer la tarta de queso al baño maria. Vierte en un cuenco amplio el queso fresco, los huevos, el yogur, la harina y el azúcar. Tritura con la batidora de mano o en la Thermomix y reserva mientras se hace el caramelo.
                                    <div className="separacionPeque"/>
                                    Puedes hacerlo con 100 gramos de azúcar, 50 gramos de agua y unas gotas de esencia de vainilla. Ponlo todo en un cazo y cuece hasta que tenga la densidad adecuada, pero recuerda no moverlo en ningún momento para que no se cristalice. También puedes comprar el caramelo si tienes prisa, aunque la elaboración en casa no se extiende más de 15 minutos.
                                    <div className="separacionPeque"/>
                                    Vierte el caramelo en el molde (puedes utilizar uno grande o varios pequeños e individuales), voltea el molde para que el caramelo se reparta por toda la base y a continuación vierte la crema para la elaboración de la tarta de queso. Finalmente incorpora los arándanos.
                                    <div className="separacionPeque"/>
                                    Introduce el molde en la bandeja con agua del horno y procede a la cocción al baño maría. Reduce la temperatura del horno a 160º C y deja cocer durante una hora.
                                    <div className="separacionPeque"/>
                                    Pasado este tiempo comprueba pinchando con un palillo que la tarta de queso ha cuajado, entonces retírala del horno y déjala enfriar.
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Emplatado</div>
                                <div className="textTraditional">
                                    Desmolda la <Link to="/cheesecake" className="ref"><b>Tarta de queso</b></Link> con arándanos. Córtala en porciones si has hecho una tarta de tamaño familiar y sírvela en platillos acompañando con crumble, una salsa o mermelada de arándanos, lo que más te guste. A nuestra tarta le acompaña el crujiente de un crumble de chocolate y almendras.
                                    <img src={tartaBlueberry} className="imgTypeBlueberry" alt="manzana pic"/>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
        </div>
    )
}

export default Cheeseblueberry;