import React from 'react'
import '../../styles/cheeseTypes/cheesetraditional.scss'

import {
    Link
  } from "react-router-dom";

import tartaRicotta from '../../images/cheesecake/tarta-de-queso-ricotta-y-mascarpone.jpeg'

const Cheesericotta = () => {
    window.scrollTo(0, 0)

    return(
        <div className="cheesericottaJS">
            <div className="cheesericotta">Tarta de Queso Ricotta y mascarpone</div>
            <div id="espacio1">
                <article className="article2">
                        <div id="content">
                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Ingredientes</div>
                                <div className="textTraditionalSpecial">
                                    · 500 gramos de queso ricotta
                                    <div className="separacionPeque"/>
                                    · 3 huevos M
                                    <div className="separacionPeque"/>
                                    · 20 gramos de Maizena
                                    <div className="separacionPeque"/>
                                    · 140 gramos de azúcar (se puede sustituir por edulcorante)
                                    <div className="separacionPeque"/>
                                    · c/n de mantequilla (para el molde).
                                    <div className="separacionPeque"/>
                                    · mascarpone
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Elaboración</div>
                                <div className="separacionPeque"/>
                                <div className="textTraditional">
                                    Pon en un bol el queso ricotta y añade los huevos, cáscalos de uno en uno en otro recipiente antes de ponerlos en el bol con el queso, de este modo se evita tener que tirar todo si un huevo saliera malo, aunque suele ser algo difícil que ocurra.
                                    <div className="separacionPeque"/>
                                    Añade al bol la Maizena (también se puede poner harina si no se tiene almidón de maíz), y también el azúcar o el edulcorante elegido, puede ser líquido o granulado. 
                                    <div className="separacionPeque"/>
                                    Tritura con la batidora de mano eléctrica, cubre el bol y deja reposar en el frigorífico al menos media hora. Cuando convenga (cada horno tarda lo suyo en calentarse), enciende el horno para que se vaya calentando a 180º C con calor arriba y abajo.
                                    <div className="separacionPeque"/>
                                    Prepara el molde antiadherente, úntalo con un poco de mantequilla y el mascarpone que facilitará el desmoldado, a continuación, vierte la masa batida para la tarta de ricotta e introduce el molde en el horno cuando esté a la temperatura indicada, pero bájala a 175º C al introducir el preparado.                            
                                    <div className="separacionPeque"/>
                                    Hornea durante unos 30 minutos, la tarta de queso estará subida cuando se haya horneado, pero al retirarla del horno y enfriar bajará un poco. Deja enfriar totalmente antes de desmoldar, incluso puedes dejarla en el molde para que repose hasta el día siguiente, este reposo le va muy bien para coger más cuerpo y que lo sabores estén más pronunciados.
                                    <div className="separacionPeque"/>
                                    De todas formas, no sirvas la tarta de queso recién sacada del frigorífico, déjala a temperatura ambiente un ratito antes de servirla, para que esté fresca, pero no excesivamente fría y que no se pueda saborear.
                                </div>
                            </div>
                            
                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Presentación</div>
                                <div className="textTraditional">
                                    Sirve la <Link to="/cheesecake" className="ref"><b>Tarta de queso</b></Link> de ricotta y mascarpone decorándola al gusto, puedes acompañarla de fruta fresca, de mermelada de frutos rojos (es muy típico), de sirope de chocolate negro… Encantará a todos los comensales, sean golosos o no. ¡Buen provecho!
                                    <div className="separacionPeque"/>
                                    <img src={tartaRicotta} className="imgTypeApple" alt="manzana pic"/>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
        </div>
    )
}

export default Cheesericotta;