import React from 'react'

import '../../styles/cheeseTypes/cheesetraditional.scss'

import {
    Link
  } from "react-router-dom";

import tartaChocolate from '../../images/cheesecake/tarta-de-queso-y-chocolate.jpeg'

const Cheesecolate = () => {
    window.scrollTo(0, 0)

    return(
        <div className="cheesecolateJS">
            <div className="cheesecolate">Receta Tarta de Queso y Chocolate</div>
            <div id="espacio1">
                <article className="article2">
                        <div id="content">
                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Ingredientes</div>
                                <div className="textTraditionalSpecial">
                                    · 400 gramos de queso crema (tipo Philadelphia, puede ser light)
                                    <div className="separacionPeque"/>
                                    · 100 gramos de queso batido 0% M.G.
                                    <div className="separacionPeque"/>
                                    · 120 gramos de azúcar (se puede sustituir por otro endulzante o edulcorante)
                                    <div className="separacionPeque"/>
                                    · 3 huevos (L)
                                    <div className="separacionPeque"/>
                                    · una pizca de sal
                                    <div className="separacionPeque"/>
                                    · 25 gramos de Maizena
                                    <div className="separacionPeque"/>
                                    · 12 gramos de cacao puro en polvo
                                    <div className="separacionPeque"/>
                                    · c/n de extracto de vainilla.
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Elaboración</div>
                                <div className="separacionPeque"/>
                                <div className="textTraditional">
                                    Vierte en un cuenco el queso crema, el queso batido y el azúcar, bate con una espátula de silicona o con las varillas hasta obtener una crema fina y homogénea. Añade los huevos batidos, la pizca de sal y vuelve a mezclar.
                                    <div className="separacionPeque"/>
                                    Tamiza la Maizena con el cacao e incorpóralo a la preparación anterior, además del extracto de vainilla, la cantidad de éste dependerá de la intensidad de su sabor, si se desea, también se puede omitir o se puede poner el interior de una vaina de vainilla natural.
                                    <div className="separacionPeque"/>
                                    Bate de nuevo la mezcla, si te quedaran grumos puedes utilizar la batidora de mano. Entonces, una vez preparada la masa de la tarta de queso, cubre el recipiente y déjalo reposar en el frigorífico al menos media hora.                                
                                    <div className="separacionPeque"/>
                                    Prepara el molde para hacer la tarta, untándolo con mantequilla y espolvoreando un poco de harina y azúcar, y precalienta el horno a 175º C, con calor arriba y abajo.
                                    <div className="separacionPeque"/>
                                    Vierte el preparado de la tarta en el molde y deja que se asiente bien. Introduce el molde en el horno y hornea la tarta de queso y chocolate durante 30-40 minutos, hasta que al pinchar con un palillo, éste salga limpio, indicación de que la tarta está cuajada. Déjala 15 minutos más en el horno apagado.
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Emplatado</div>
                                <div className="textTraditional">
                                    Sirve la <Link to="/cheesecake" className="ref"><b>Tarta de queso</b></Link> y cacao una vez que se haya enfriado y reposado, gana mucho en sabor y en textura. No necesita nada para acompañar, pero siempre puedes servirla con alguna galleta crujiente. ¡Buen provecho!
                                </div>
                                <img src={tartaChocolate} className="imgTypeTraditional" alt="chocolate pic"/>
                            </div>
                        </div>
                    </article>
                </div>
        </div>
    )
}

export default Cheesecolate;