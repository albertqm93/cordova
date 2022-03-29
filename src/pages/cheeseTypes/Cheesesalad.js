import React from 'react'
import '../../styles/cheeseTypes/cheesetraditional.scss'

import tartaSalad from '../../images/cheesecake/tarta-de-queso-salada.jpeg'

const Cheesesalad = () => {
    window.scrollTo(0, 0)

    return(
        <div className="cheesesaladJS">
            <div className="cheesesalad">Tarta de Queso Salada</div>
            <div id="espacio1">
                <article className="article2">
                        <div id="content">
                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Ingredientes</div>
                                <div className="textTraditionalSpecial">
                                    · 2 láminas de hojaldre
                                    <div className="separacionPeque"/>
                                    · 250 gr. queso ricotta o requesón fresco
                                    <div className="separacionPeque"/>
                                    · 125 gr. queso mozzarella
                                    <div className="separacionPeque"/>
                                    · 150 gr. queso gouda curado
                                    <div className="separacionPeque"/>
                                    · 80 gr Parmesano grana padanno
                                    <div className="separacionPeque"/>
                                    · 2 huevos + 1 yema
                                    <div className="separacionPeque"/>
                                    · Sal
                                    <div className="separacionPeque"/>
                                    · Pimienta recién molida
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Elaboración</div>
                                <div className="separacionPeque"/>
                                <div className="textTraditional">
                                    Extiende una lámina de hojaldre sobre el molde que vayas a utilizar para esta tarta de queso. En un bol pon el queso ricotta desmenuzado, el queso mozzarella en dados (habiendo retirado completamente el agua en conserva), el queso gouda cortado en trocitos y el parmesano rallado. Mezcla todos los quesos con ayuda de una cuchara o un tenedor y no lo dejes hasta que veas que están completamente ligados.
                                    <div className="separacionPeque"/>
                                    Añade dos huevos completos y vuelve a remover de nuevo. Igual que antes, tendrás que remover hasta que veas que todo el queso está empapado de huevo. Echa sal, pimienta recién molida y remueve una vez más. Vuelca todo el queso sobre la base de hojaldre que hemos preparado previamente. Extiéndelo para que quede lo más uniforme posible.
                                    <div className="separacionPeque"/>
                                    Coloca encima del relleno la otra lámina de hojaldre y cierra los bordes. En mi caso, he pasado los bordes de la lámina que hace de tapa por detrás de los bordes de la lámina de base, he presionado un poquito y listo. Bate una yema de huevo y pintas toda la parte superior con ayuda de un pincel de cocina.
                                    <div className="separacionPeque"/>
                                    Introdúcelo en el horno precalentado a 180º durante 35 minutos aproximadamente. Tendrás que estar atento puesto que puede que el huevo se dore en menos tiempo y ahí tendrás que valorar si la parte inferior del hojaldre está lista (es decir, si han pasado sólo 15 minutos, déjalo un poco más) o si necesita un poquito más de cocción. Si es ésta segunda parte, cubres la parte superior con un poco de papel de aluminio y mantienes la cocción un poco más.
                                </div>
                            </div>
                            
                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Emplatado</div>
                                <div className="textTraditional">
                                Retíralo y deja que se enfríe la tarta salada unos 10 minutos. Después, ya puedes desmoldar (con cuidado) y servirla.
                                </div>
                                <img src={tartaSalad} className="imgTypeTraditional" alt="manzana pic"/>
                            </div>
                        </div>
                    </article>
                </div>
        </div>
    )
}

export default Cheesesalad;