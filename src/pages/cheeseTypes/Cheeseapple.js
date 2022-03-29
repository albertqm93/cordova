import React from 'react'

import '../../styles/cheeseTypes/cheesetraditional.scss'

import {
    Link
  } from "react-router-dom";

import tartaApple from '../../images/cheesecake/tarta-de-queso-y-manzana.jpeg'

const Cheeseapple = () => {
    window.scrollTo(0, 0)

    return(
        <div className="cheeseappleJS">
            <div className="cheeseapple">Tarta de Queso y Manzana</div>
            <div id="espacio1">
                <article className="article2">
                        <div id="content">
                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Ingredientes</div>
                                <div className="textTraditionalSpecial">
                                    · 500 gramos de queso fresco tipo Burgos
                                    <div className="separacionPeque"/>
                                    · 4 huevos
                                    <div className="separacionPeque"/>
                                    · 80 gramos de harina
                                    <div className="separacionPeque"/>
                                    · 1 manzana (pusimos una jugosa Fuji)
                                    <div className="separacionPeque"/>
                                    · 220 gramos de azúcar
                                    <div className="separacionPeque"/>
                                    · 1 c/c de canela molida
                                    <div className="separacionPeque"/>
                                    · almendras laminadas.
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Elaboración</div>
                                <div className="separacionPeque"/>
                                <div className="textTraditional">
                                    Casca los huevos y ponlos en un cuenco grande, bátelos junto al azúcar hasta que adquiera un color blanquecino. La cantidad de azúcar a añadir puede variar según el dulzor que proporcione la fruta y el que agrade a tu paladar, con los 220 gramos que hemos puesto ha quedado para golosos.
                                    <div className="separacionPeque"/>
                                    Seguimos, añade a los huevos la harina y la canela, mezcla bien e incorpora el queso fresco desmenuzado y tritura con la batidora de mano hasta que quede una crema fina. Pela la manzana y córtala en láminas para incorporarla inmediatamente a la masa.
                                    <div className="separacionPeque"/>
                                    Unta un molde con mantequilla y vierte la masa en él, cubre con las almendras laminadas y espolvorea un poco de azúcar sobre ellas. Introduce el molde de la tarta en el horno precalentado a 185º C y deja cocer de 30 a 40 minutos, dependiendo del grosor que le hayas dado.
                                    <div className="separacionPeque"/>
                                    Para cerciorarte de que su interior está cocido, introduce un palillo y comprueba que salga limpio. Si las almendras estarán doraditas y crujientes y su interior no está hecho, reduce el calor del horno.
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Emplatado</div>
                                <div className="textTraditional">
                                    Deja enfriar fuera del horno y si puedes esperar a probar esta deliciosa <Link to="/cheesecake" className="ref"><b>Tarta de queso</b></Link> y manzana, resérvala en el frigorífico para que se asiente bien el queso.
                                    <img src={tartaApple} className="imgTypeApple" alt="manzana pic"/>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
        </div>
    )
}

export default Cheeseapple;