import React from 'react'

import '../../styles/cheeseTypes/cheesetraditional.scss'
import tartaWhite from '../../images/cheesecake/brownie-de-cheesecake.jpeg'

const Cheesewhite = () => {
    window.scrollTo(0, 0)

    return(
        <div className="cheesewhiteJS">
            <div className="cheesewhite">Tarta de Queso y Chocolate Blanco</div>
            <div id="espacio1">
                <article className="article2">
                        <div id="content">
                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Ingredientes</div>
                                <div className="textTraditionalSpecial">
                                    · 200 gr de galletas tipo digestive
                                    <div className="separacionPeque"/>
                                    · 60 – 80 gr de mantequilla
                                    <div className="separacionPeque"/>
                                    · 500 gr de queso crema (tipo philadelphia o mascarpone)
                                    <div className="separacionPeque"/>
                                    · 200 gr de chocolate blanco
                                    <div className="separacionPeque"/>
                                    · 500 ml. de nata para montar (35% materia grasa)
                                    <div className="separacionPeque"/>
                                    · 3 cucharadas de azúcar
                                    <div className="separacionPeque"/>
                                    · 3 sobres de cuajada o 3 hojas de gelatina
                                    <div className="separacionPeque"/>
                                    · 200 de Frambuesas semicongeladas y frescas
                                    <div className="separacionPeque"/>
                                    · 1 vasito pequeño de leche (sólo si usas cuajada)
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Elaboración</div>
                                <div className="separacionPeque"/>
                                <div className="textTraditional">
                                    Para preparar la base de galletas sólo necesitas triturar las galletas con la minipimer (opción rápida) o como puedas apañarte. Cuando estén trituradas, derrite la mantequilla y mézclalo con las galletas para formar la base. Una vez la tengas, extiéndelo por el recipiente y aplástalo con ayuda de una cuchara, para que quede lo más uniforme posible.                                
                                    <div className="separacionPeque"/>
                                    El primer paso para comenzar a hacer la crema es derretir el chocolate blanco al baño maría, para ello lo trocearemos y lo pondremos en un bol, ponemos un cazo con agua a hervir y colocamos el bol dentro. Volcamos todo el queso crema sobre un recipiente. Para poder trabajarlo mejor podemos sacarlo unos minutos antes para que ablande, aunque no suele ser muy duro.
                                    <div className="separacionPeque"/>
                                    Añade el azúcar al queso y comienza a batirlo de manera envolvente para que el azúcar llegue a todo el queso. Puedes hacerlo con varillas manuales, eléctricas o con batidora, lo que más sencillo te resulte. A continuación, añade la gelatina diluida, la nata y el chocolate derretido a la crema de queso, mézclalo bien para que todos los ingredientes queden bien integrados.
                                    <div className="separacionPeque"/>
                                    Volcar la mitad de la crema sobre la galleta con ayuda de una cuchara que acercaremos al bol para que no se levante la galleta. Sólo la mitad, para que puedas echarle las frutas que quieras y luego lo cubres con el resto de la crema.
                                </div>
                            </div>
                            
                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Emplatado</div>
                                <div className="textTraditional">
                                    Finalmente, deja que la tarta se enfríe e introdúcela en el frigorífico hasta que cuaje. Lo mejor es que la dejes durante 24 horas y cuando quieras servirla añade unas frutas frescas o mermelada para llenarla de color y sabor, un fantástico plato frío que te sorprenderá.
                                    <div className="separacionPeque"/>
                                    <img src={tartaWhite} className="imgTypeApple" alt="manzana pic"/>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
        </div>
    )
}

export default Cheesewhite;