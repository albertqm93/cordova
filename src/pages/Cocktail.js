import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/cocktail.scss'

import tartaTradicional from '../images/cheesecake/tarta-de-queso-tradicional.jpeg'
import tartaChocolate from '../images/cheesecake/tarta-de-queso-y-chocolate.jpeg'
import tartaManzana from '../images/cheesecake/tarta-de-queso-y-manzana.jpeg'


const Cocktail = () => {
    return(
        <>
            <div className="App">
            </div>
            <div className="bodyy">
                <div className="titlee">Que es un Cóctel?</div>
                <div className="textt">La definición básica establece que un cóctel(del inglés cocktail) es una combinación de diferentes bebidas(alcoholicas o no) como jugos de fruta, gaseosas(bebidas carbonatadas), fermentados(cerveza, sidra) y/o destiladas(whisky, ron, vodka, etc). </div>
                <div className="textt">Si bien sus orígenes pueden remontarse hasta fines del siglo XVIII en Inglaterra y en Estados Unidos, su popularidad definitiva llegó en la década de 1920 durante la Ley Seca en Estados Unidos, cuando agregar fruta y/o bebidas saboriadas a una bebida alcoholica permitía disimular la baja calidad del alcohol de contrabando.</div>
                
                <hr/>

                <div className="titlee">Que significa la palabra Cóctel?</div>
                <div className="textt">La teoría mas reconocida sobre el origen de la palabra inglesa cocktail y su significado, dice que se originaria a partir de la contracción de las palabras en inglés "cock's tail" que significa "cola de gallo".</div>
                <div className="textt">Fue en el siglo XIX, que en las tabernas locales servían habitualmente vinos y licores sin mezclar, pero también disponian de bebidas compuestas.</div>

                <hr/>

                <div className="titlee">Utensilios de coctelería</div>
                <div className="textt">
                    <ul>
                        <li className="titleeli">1. Imprescindibles</li>
                        <li>· Vaso de medida</li>
                        <li>· Agitador</li>
                        <li>· Colador</li>
                        <li>· Cuchara de bar</li>
                        <li>· Hielera</li>
                        <li>· Prensador</li>
                        <li>· Exprimidor</li>
                        <li>· Cristalería</li>
                        <li className="titleeli">2. Opcionales</li>
                        <li>· Pelador</li>
                        <li>· Vaso mezclador</li>
                        <li>· Colador de malla fina</li>
                        <li>· Colador Julep</li>
                    </ul>
                </div>

                <hr/>

                <div className="titlee">Compenentes de un cóctel</div>
                <div className="textt">En la práctica, la mayoría de los cócteles está compuesto por tres elementos fundamentales, base, modificador y agente de sabor:</div>
                <div className="titlee">1. Base</div>
                <div className="textt">Constituye el elemento principal, la base que definirá la estructura del cóctel. Por lo general se considera como base al ingrediente de mayor volumen, densidad o graduación alcohólica.</div>
                <div className="titlee">2. Modificador</div>
                <div className="textt">Es el que construye y da carácter al cóctel, en algunos casos los licores añadidos para complementar o en otros casos azucares, jarabes o frutas. Por lo general está representado por una sola bebida.</div>
                <div className="titlee">3. Agente de sabor</div>
                <div className="textt">Es el que transforma el cóctel, esos ingredientes que serán agregados para añadir y definir personalidad final, destinados a mejorar el aroma, sabor y/o apariencia, medidos generalmente en golpes o gotas.</div>

                <div className="titlee">Tipos de cócteles</div>
                <div className="textt">
                    <ul>
                        <li className="titleeli">1. Cócteles aperitivos</li>
                        <li>Son las que en su composición contengan bebidas aperitivas, que despierten el apetito del consumidor y por supuesto se deben consumir antes de alguna comida.</li>
                        <li className="titleeli">2. Cócteles refrescantes</li>
                        <li>Recetas cuyos ingredientes contribuyen a calmar la sed. Por lo general en estas recetas se incluyen gaseosas, soda, jugos o zumos de frutas, refrescos y son las típicas bebidas del verano</li>
                        <li className="titleeli">3. Cócteles digestivos</li>
                        <li>En su composición llevan bebidas digestivas que facilitan el proceso de los alimentos en el organismo, se consumen después de las comidas, sobre todo si es pesada. Los licores mas usados en este tipo de receta son Cointreau, Cognac, Amareto, Kahlúa, entre otros.</li>
                        <li className="titleeli">4. Cócteles nutritivos</li>
                        <li>Recetas combinadas con ingredientes que posean vitaminas o minerales como el caso de la leche, crema de cacao, alguna infusión de plantas, clara de huevos, etc.</li>
                        <li className="titleeli">5. Cócteles de invierno</li>
                        <li>Son aquellos cócteles que utilizan licores de alta graduación alcohólica, que entibian el cuerpo y que pueden incorporar con otros productos calóricos como el chocolate, el café, etc.</li>
                    </ul>
                </div>

                <div className="titlee">Ornamento, adorno y decoración</div>
                <div className="textt">Cuando hablamos de coctelería, es importante comprender la diferencia entre estos tres elementos, que habitualmente suelen confundirse.</div>
                <div className="textt">
                    <ul>
                        <li className="titleeli">1. Ornamento</li>
                        <li>Es un dorno en la presentación del cóctel que puede influir directamente en sus características de sabor. Por ejemplo, unas gotas de amargo de angostura.</li>
                        <li className="titleeli">2. Adorno</li>
                        <li>Es un detalle en la presentación del cóctel y que a pesar de ser comestible no influye en absoluto en su características de sabor finales. Por ejemplo, la rodaja de limón al borde de la copa.</li>
                        <li className="titleeli">3. Decoración</li>
                        <li>Es un adorno no comestible que no influye en el sabor final del cóctel, utilizado como elemento estético o para alguna función específica. Por ejemplo, las bombillas.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Cocktail;