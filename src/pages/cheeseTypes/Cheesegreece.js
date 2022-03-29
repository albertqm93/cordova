import React from 'react'

import '../../styles/cheeseTypes/cheesetraditional.scss'
import tartaGreece from '../../images/cheesecake/tarta-de-queso-y-yogur-griego.jpeg'

const Cheesegreece = () => {
    window.scrollTo(0, 0)

    return(
        <div className="cheesegreeceJS">
            <div className="cheesegreece">Tarta de Queso y Yogur Griego</div>
            <div id="espacio1">
                <article className="article2">
                        <div id="content">
                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Ingredientes</div>
                                <div className="textTraditionalSpecial">
                                    · 500 gramos de un buen yogur griego
                                    <div className="separacionPeque"/>
                                    · 3 huevos L
                                    <div className="separacionPeque"/>
                                    · 40 gramos de Maizena
                                    <div className="separacionPeque"/>
                                    · 150 gramos de azúcar (o el equivalente en otro endulzante saludable)
                                    <div className="separacionPeque"/>
                                    · c/n de mantequilla para el molde.
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Elaboración</div>
                                <div className="separacionPeque"/>
                                <div className="textTraditional">
                                    Puedes hacer esta masa batida con una batidora manual de varillas, con un robot de cocina o batidora eléctrica de mano. En primer lugar pon en el recipiente correspondiente todo el yogur griego, elige el de mejor calidad y mayor cremosidad (hay muchos yogures griegos que no lo son en realidad).
                                    <div className="separacionPeque"/>
                                    Añade los tres huevos, uno a uno, cascándolos y dejándolos caer en un pequeño cuenco o taza, así, si uno saliera malo (cosa que no suele pasar), no habría que tirar todo lo demás.
                                    <div className="separacionPeque"/>
                                    Incorpora a continuación el almidón de maíz (Maizena) y el azúcar, y si deseas hacer una tarta más saludable, sin azúcar, sustitúyelo por el edulcorante que utilices, también sale bien.
                                    <div className="separacionPeque"/>
                                    Bate hasta conseguir una masa fina, homogénea y cremosa, teniendo en cuenta que no conviene excederse en el batido para que no se generen muchas burbujas de aire, que quedarían después en la tarta.
                                    <div className="separacionPeque"/>
                                    Tapa el recipiente y deja reposar en el frigorífico mientras se calienta el horno con calor arriba y abajo a 175º C. Prepara el molde untándolo con la mantequilla, y después vierte la masa. Ten en cuenta que al hornearse la tarta subirá (y después bajará), por lo que debe ser un molde alto.
                                    <div className="separacionPeque"/>
                                    Introduce el molde en el horno caliente y hornea durante 40 minutos, para comprobar que ha cuajado, haz la prueba del palillo, si sale limpio al pinchar en el centro, la tarta de yogur está lista.
                                    <div className="separacionPeque"/>
                                    Deja enfriar la tarta a temperatura ambiente y después introdúcela en el frigorífico bien tapada, al menos un par de horas para que repose.
                                    <div className="separacionPeque"/>
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Presentación</div>
                                <div className="textTraditional">
                                    Recuerda tener la tarta a temperatura ambiente un rato antes de servirla para poder disfrutar de su textura y de su sabor. Desmolda la tarta de yogur griego y sírvela decorada con frutas frescas, manteca de cacahuete, avellanas o con mermelada. ¡Buen provecho!
                                    <img src={tartaGreece} className="imgTypeApple" alt="manzana pic"/>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
        </div>
    )
}

export default Cheesegreece;