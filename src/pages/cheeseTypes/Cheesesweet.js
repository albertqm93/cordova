import React from 'react'
import '../../styles/cheeseTypes/cheesetraditional.scss'

import {
    Link
  } from "react-router-dom";

import tartaSweet from '../../images/cheesecake/tarta-de-queso-y-caramelo.jpeg'

const Cheesesweet = () => {
    window.scrollTo(0, 0)

    return(
        <div className="cheesesweetJS">
            <div className="cheesesweet">Tarta de Queso y Caramelo</div>
            <div id="espacio1">
                <article className="article2">
                        <div id="content">
                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Ingredientes</div>
                                <div className="textTraditionalSpecial">
                                    · 500 gramos de queso crema (tipo Philadelphia)
                                    <div className="separacionPeque"/>
                                    · 250 gramos de nata para montar 35% M.G.
                                    <div className="separacionPeque"/>
                                    · 6 huevos
                                    <div className="separacionPeque"/>
                                    · 400 gramos de azúcar
                                    <div className="separacionPeque"/>
                                    · caramelo (azúcar y agua).
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Elaboración</div>
                                <div className="separacionPeque"/>
                                <div className="textTraditional">
                                    Puedes empezar a preparar el caramelo con azúcar y un poco de agua, no tenemos las cantidades pues lo hacemos a ojo, pero dedicaremos una entrada para quien desee el paso a paso. Cuando el caramelo esté listo, viértelo en la base del molde moviéndolo para que se impregnen todos los rincones y los laterales.
                                    <div className="separacionPeque"/>
                                    Vierte en un cuenco todos los ingredientes de la tarta de queso, el queso, la nata, los huevos y el azúcar, mezcla bien con la batidora hasta obtener una crema fina y homogénea. Incorpora la preparación en el molde con el caramelo.
                                    <div className="separacionPeque"/>
                                    Coloca una bandeja profunda con agua en el horno precalentado a 180º C y dispón en ella la tarta de queso para su cocción al baño maría, deja cocer durante una hora y pasado este tiempo retira la bandeja del horno y deja enfriar la tarta de queso.
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Emplatado</div>
                                <div className="textTraditional">
                                    Cuando la <Link to="/cheesecake" className="ref"><b>Tarta de queso</b></Link> con caramelo se haya enfriado la puedes desmoldar o reservar en el frigorífico hasta el momento de su consumo. Recién hecha esta exquisita pero si reposa no pierde nada, al contrario.
                                    <div className="separacionPeque"/>
                                    Desmolda la tarta de queso volcándola para que quede el caramelo en la parte superior. Córtala en porciones para cada comensal y acompáñala con unos barquillos o un poco de nata, lo mínimo para decorar el plato, pues lo que realmente hay que saborear de este postre es la deliciosa tarta.
                                    <div className="separacionPeque"/>
                                    <img src={tartaSweet} className="imgTypeApple" alt="manzana pic"/>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
        </div>
    )
}

export default Cheesesweet;