import React from 'react'

import '../../styles/cheeseTypes/cheesetraditional.scss'

import {
    Link
  } from "react-router-dom";

import tartaBrownie from '../../images/cheesecake/brownie-de-cheesecake.jpeg'

const Cheesebrownie = () => {
    window.scrollTo(0, 0)

    return(
        <div className="cheesebrownieJS">
            <div className="cheesebrownie">Tarta de Queso Brownie</div>
            <div id="espacio1">
                <article className="article2">
                        <div id="content">
                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Ingredientes</div>
                                <div className="textTraditionalSpecial">
                                    · 150 gramos de chocolate fondant
                                    <div className="separacionPeque"/>
                                    · 200 gramos de mantequilla
                                    <div className="separacionPeque"/>
                                    · 4 huevos (L)
                                    <div className="separacionPeque"/>
                                    · 150 gramos de azúcar
                                    <div className="separacionPeque"/>
                                    · 70 gramos de harina
                                    <div className="separacionPeque"/>
                                    · 50 gramos de nueces.
                                    <div className="separacionPeque"/>
                                    <div className="separacionPeque"/>
                                    · 200 gramos de queso crema
                                    <div className="separacionPeque"/>
                                    · 250 gramos de queso batido (o yogur)
                                    <div className="separacionPeque"/>
                                    · 2 huevos (L)
                                    <div className="separacionPeque"/>
                                    · 30 gramos de Maizena
                                    <div className="separacionPeque"/>
                                    · 120 gramos de azúcar.
                                </div>
                            </div>

                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Elaboración</div>
                                <div className="separacionPeque"/>
                                <div className="textTraditional">
                                    Precalienta el horno a 200º C con calor arriba y abajo. Prepara el molde untándolo con mantequilla para que después sea fácil desmoldar la tarta.
                                    <div className="separacionPeque"/>
                                    Para hacer el brownie, funde el chocolate con la mantequilla en un cazo al baño maría o en el microondas. Mezcla en un cuenco los huevos, el azúcar y la harina tamizada, una vez listas las dos preparaciones, mézclalas.
                                    <div className="separacionPeque"/>
                                    Trocea las nueces e incorpóralas a la masa, bate suavemente con una espátula para que se repartan bien. Vierte la masa del brownie en el molde.
                                    <div className="separacionPeque"/>
                                    Para preparar la tarta de queso, pon en un cuenco el queso crema, el queso batido, los huevos, la Maizena y el azúcar, bate con las varillas manuales hasta obtener una crema fina y homogénea.
                                    <div className="separacionPeque"/>
                                    Vierte esta masa sobre la masa de brownie y con una espátula o con una cuchara, realiza unos surcos llegando a la masa de chocolate para que se introduzca la masa de queso.
                                    <div className="separacionPeque"/>
                                    Introduce el molde en el horno y baja la temperatura a 180º C. Programa 30-35 minutos. Cuando haya pasado el tiempo marcado, haz la prueba del palillo para ver si la tarta de brownie y de queso está cuajada y cocida. Recuerda que el brownie queda húmedo, por lo que algo se manchará el palillo.
                                </div>
                            </div>
                            
                            <hr/>

                            <div className="bloque">
                                <div className="iconright"></div>
                                <div className="subtitle">Emplatado</div>
                                <div className="textTraditional">
                                    Retira el molde del horno y deja enfriar antes de desmoldar. Una vez desmoldada esta tarta, déjala reposar. El mismo día está deliciosa, pero cuando reposa hasta el día siguiente quizá está un poco más.
                                    <div className="separacionPeque"/>
                                    Córtala en porciones para repartir entre los comensales, puedes decorar con algo de chocolate crujiente, pero no hace falta nada especial para acompañar este delicioso Brownie con <Link to="/cheesecake" className="ref"><b>Tarta de queso</b></Link>.
                                    <div className="separacionPeque"/>
                                    <img src={tartaBrownie} className="imgTypeApple" alt="manzana pic"/>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
        </div>
    )
}

export default Cheesebrownie;