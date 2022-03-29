import React from 'react'

import '../../styles/cheeseTypes/cheesetraditional.scss'
import tartaLime from '../../images/cheesecake/tarta-de-queso-y-lima.jpeg'

const Cheeselime = () => {
    window.scrollTo(0, 0)

    return(
        <div className="cheeselimeJS">
            <div className="cheeselime">Tarta de Queso y Lima</div>
            <div id="espacio1">
                <article className="article2">
                        <div id="content">
                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Ingredientes</div>
                                <div className="textTraditionalSpecial">
                                    · 1 paquete galletas tipo digestive
                                    <div className="separacionPeque"/>
                                    · 90 gr. mantequilla
                                    <div className="separacionPeque"/>
                                    · 2 sobres de cuajada
                                    <div className="separacionPeque"/>
                                    · 200 ml de leche entera
                                    <div className="separacionPeque"/>
                                    · 500 ml de nata para montar
                                    <div className="separacionPeque"/>
                                    · 600 gr. de queso crema
                                    <div className="separacionPeque"/>
                                    · 6 limas
                                    <div className="separacionPeque"/>
                                    · 170 gr de leche condensada
                                    <div className="separacionPeque"/>
                                    · Zumo de una lima
                                    <div className="separacionPeque"/>
                                    · 75 gr de azúcar glass
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Elaboración</div>
                                <div className="separacionPeque"/>
                                <div className="textTraditional">
                                    Vamos a preparar la base de la tarta con galletas; para ello, tritura bien todas las galletas. Si tienes una picadora, en pocos minutos estará listo. Añade a las galletas trituradas las dos cucharadas de mantequilla derretida. Mézclalo bien y lo echas sobre el fondo del molde escogido, cúbrelo bien y presionas un poquito para que quede unido. Mételo en la nevera hasta que requiramos de sus servicios.
                                    <div className="separacionPeque"/>
                                    En un cazo ve echando la ralladura de las cuatro limas. Después, las exprimes y echas también su zumo. Añade al cazo los 500 ml de nata, la leche condensada (sustituye al azúcar) y medio vaso de leche, el resto de la leche la reservas. Pon el fuego a nivel bajo y remueve. Mientras tanto, en el vaso de leche que hemos reservado deshaz los dos sobres de cuajada. En el momento en el que el contenido del cazo esté caliente y homogéneo, añade el queso crema. Remueve con unas varillas constantemente hasta que esté completamente disuelto, que no haya ningún tipo de grumo, también podéis utilizar la batidora eléctrica para que quede bien mezclado.
                                    <div className="separacionPeque"/>
                                    Una vez que lo tengáis a punto, sólo tenéis que añadir la leche en la que se ha disuelto la cuajada. Ponerlo a fuego medio bajo, remover de manera constante para evitar que se pegue ninguna zona y manteneros así hasta que dé el primer hervor. En cuanto hierva, estará listo el relleno de queso y lima. 
                                    <div className="separacionPeque"/>
                                    Saca el molde de la tarta de la nevera y coloca una cuchara en el fondo, sobre ella vierte el relleno de la tarta. Utilizamos una cuchara de esta manera para evitar la posibilidad de que se levante cualquier trocito de galleta que no se haya quedado unificado.
                                    <div className="separacionPeque"/>
                                    Dejamos que se enfríe a temperatura ambiente y, a continuación, lo metemos en la nevera de un día para otro.
                                </div>
                            </div>
                            
                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Emplatado</div>
                                <div className="textTraditional">
                                    La presentación puede variar mucho en función de lo que se os ocurra. En nuestro caso le hemos echado un glaseado por encima pero también podéis hacerla más densa con una hoja de gelatina para que quede sólido, o podéis caramelizar la lima o presentarla al natural en rodajas.
                                    <div className="separacionPeque"/>
                                    Esta tarta es ideal servirla directa de la nevera, para que el fresquito del sabor de la lima también se acompañe con la temperatura.
                                    <div className="separacionPeque"/>
                                    <img src={tartaLime} className="imgTypeApple" alt="manzana pic"/>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
        </div>
    )
}

export default Cheeselime;