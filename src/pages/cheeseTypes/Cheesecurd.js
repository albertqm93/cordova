import React from 'react'

import '../../styles/cheeseTypes/cheesetraditional.scss'
import tartaCurd from '../../images/cheesecake/tarta-de-requeson.jpeg'

const Cheesecurd = () => {
    window.scrollTo(0, 0)

    return(
        <div className="cheesecurdJS">
            <div className="cheesecurd">Tarta de Queso Requeson</div>
            <div id="espacio1">
                <article className="article2">
                        <div id="content">
                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Ingredientes</div>
                                <div className="textTraditionalSpecial">
                                    · 375 gramos de requesón
                                    <div className="separacionPeque"/>
                                    · 250 gramos de yogur natural
                                    <div className="separacionPeque"/>
                                    · 3 huevos L
                                    <div className="separacionPeque"/>
                                    · 50 gramos de harina de repostería
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
                                    Trocea el requesón y ponlo en el vaso de la batidora o robot de cocina, incorpora los yogures y los huevos. Añade también la harina y el azúcar y tritura con la batidora de mano hasta que obtengas una crema fina, pero no batas demasiado para que no genere muchas burbujas.
                                    <div className="separacionPeque"/>
                                    Tapa el recipiente y deja reposar en el frigorífico al menos media hora. Mientras tanto, enciende el horno con calor arriba y abajo a 175º C. Prepara también el molde alto antiadherente en el que vayas a hornear la tarta, que puede ser un poco más grande, pero entonces quedará más fina y necesitará menos tiempo de horneado. Simplemente unta el molde con mantequilla, pero sin excesos.
                                    <div className="separacionPeque"/>
                                    Cuando el horno haya alcanzado la temperatura, vierte el preparado de la tarta de requesón en el molde poco a poco, e introdúcelo en el horno. Programa unos 35-40 minutos. Verás que en el horno ha crecido, incluso sobresaliendo del molde, pero al retirarla del horno y reposar bajará.
                                    <div className="separacionPeque"/>
                                    Comprueba con una brocheta de madera que la tarta está cocida antes de retirarla del horno, y después déjala enfriar antes de desmoldar, aunque si tienes que terminarla pronto, puedes desmoldarla aún tibia para que se enfríe antes.
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Emplatado</div>
                                <div className="textTraditional">
                                    Sirve la tarta de requesón en una tartera o cortada en porciones en los platos, a nosotros nos gusta comer este tipo de tartas sola, pero también se puede acompañar con un poco de mermelada, con miel, con nueces, con galletas crujientes… ¡buen provecho!
                                    <img src={tartaCurd} className="imgTypeApple" alt="manzana pic"/>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
        </div>
    )
}

export default Cheesecurd;