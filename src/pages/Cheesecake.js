import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import {
    Link
  } from "react-router-dom";

import '../styles/cheesecake.scss'

import tartaTradicional from '../images/cheesecake/tarta-de-queso-tradicional.jpeg'
import tartaChocolate from '../images/cheesecake/tarta-de-queso-y-chocolate.jpeg'
import tartaManzana from '../images/cheesecake/tarta-de-queso-y-manzana.jpeg'
import tartaArandanos from '../images/cheesecake/tarta-de-queso-y-arandanos.jpeg'
import tartaYogur from '../images/cheesecake/tarta-de-queso-y-yogur-griego.jpeg'
import tartaCaramelo from '../images/cheesecake/tarta-de-queso-y-caramelo.jpeg'
import tartaRequeson from '../images/cheesecake/tarta-de-requeson.jpeg'
import tartaRicotta from '../images/cheesecake/tarta-de-queso-ricotta-y-mascarpone.jpeg'
import tartaBrownie from '../images/cheesecake/brownie-de-cheesecake.jpeg'
import tartaWhite from '../images/cheesecake/tarta-de-queso-y-chocolate-blanco.jpeg'
import tartaSalad from '../images/cheesecake/tarta-de-queso-salada.jpeg'
import tartaLime from '../images/cheesecake/tarta-de-queso-y-lima.jpeg'

const Cheesecake = () => {
    return(
        <div className="cheesecakeJS">
            <div className="cheesecake">
            <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block w-100"
                        src={tartaTradicional}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block w-100"
                        src={tartaChocolate}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block w-100"
                        src={tartaManzana}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            <div id="espacio">
                <div className="article1">
                    <div className="titlee">Qué es la tarta de queso?</div> 
                    
                    <div>
                        <div className="bloquee2">
                        La <Link to="/cheesecake" className="ref" onClick={window.scrollTo(0, 0)}><b>Tarta de Queso</b></Link> es un alimento muy conocido que existe desde el siglo XX, es un postre que esta hecho por: queso cheddar, azúcar, ricota y muchas veces le añadimos crema.
                        <div className="separacionPeque"/>
                        Tiene muchos ingredientes extras que se le pueden añadir como: crema de leche, patata, almendras, limones, naranjas, mermelada, chocolate, whisky.
                        <div className="separacionPeque"/>
                        La <Link to="/cheesecake" className="ref" onClick={window.scrollTo(0, 0)}><b>Tarta de Queso</b></Link> mas comun es con salsa de arándanos. Todos estos ingredientes nombrados anteriormente se colocan encima de un bizcocho, por ejemplo, que hace de capa. Si uno quiere que la tarta sea mas ligera tiene la opción de hacerla refrigerada o horneada, de la otra manera, seria cocinada tradicionalmente. Dentro de ésta se hacen distintos productos como: yogures, sorbetes, galletas, brownies, helados con el mismo sabor.
                        </div>

                        <hr/>

                        <div className="subtitle">Tipos de <Link to="/cheesecake" className="ref" onClick={window.scrollTo(0, 0)}>Tarta de Queso</Link> y recetas</div>
                        <div className="types">
                            <div className="childs">
                                <div className="subTypesSpecial"> <Link to="/cheesetraditional" className="ref" onClick={window.scrollTo(0, 0)}>Tarta de Queso tradicional</Link></div>
                                <div className="separacionPeque"/>
                                <img src={tartaTradicional} className="imgType" alt="tradicional pic"/>
                            </div>
                            <div className="childs">
                                <div className="separacionPeque"/>
                                <div className="subTypesSpecial"> <Link to="/cheesecolate" className="ref">Tarta de Queso y Chocolate</Link></div>
                                <div className="separacionPeque"/>
                                <img src={tartaChocolate} className="imgType" alt="chocolate pic"/>
                            </div>
                            <div className="childs">
                                <div className="subTypesSpecial"> <Link to="/cheeseapple" className="ref">Tarta de Queso y Manzana</Link></div>
                                <div className="separacionPeque"/>
                                <img src={tartaManzana} className="imgType" alt="manzana pic"/>
                            </div>
                            <div className="childs">
                                <div className="subTypesSpecial"> <Link to="/cheeseblueberry" className="ref">Tarta de Queso y Arándanos</Link></div>
                                <div className="separacionPeque"/>
                                <img src={tartaArandanos} className="imgType" alt="arandanos pic"/>
                            </div>
                            <div className="childs">
                                <div className="subTypes"> <Link to="/cheesegreece" className="ref">Tarta de Queso y Yogur Griego</Link></div>
                                <div className="separacionPeque"/>
                                <img src={tartaYogur} className="imgType" alt="yogur pic"/>
                            </div>
                            <div className="childs">
                                <div className="subTypes"> <Link to="/cheesesweet" className="ref">Tarta de Queso y Caramelo</Link></div>
                                <div className="separacionPeque"/>
                                <img src={tartaCaramelo} className="imgType" alt="caramelo pic"/>
                            </div>
                            <div className="childs">
                                <div className="subTypes"> <Link to="/cheesecurd" className="ref">Tarta de Requesón</Link></div>
                                <div className="separacionPeque"/>
                                <img src={tartaRequeson} className="imgType" alt="requesón pic"/>
                            </div>
                            <div className="childs">
                                <div className="subTypes"> <Link to="/cheesericotta" className="ref">Tarta de Queso Ricotta y Mascarpone</Link></div>
                                <div className="separacionPeque"/>
                                <img src={tartaRicotta} className="imgType" alt="ricotta pic"/>
                            </div>
                            <div className="childs">
                                <div className="subTypes"> <Link to="/cheesebrownie" className="ref">Tarta de Queso Brownie</Link></div>
                                <div className="separacionPeque"/>
                                <img src={tartaBrownie} className="imgType" alt="brownie pic"/>
                            </div>
                            <div className="childs">
                                <div className="subTypes"> <Link to="/cheesewhite" className="ref">Tarta de Queso y Chocolate Blanco</Link></div>
                                <div className="separacionPeque"/>
                                <img src={tartaWhite} className="imgType" alt="white pic"/>
                            </div>
                            <div className="childs">
                                <div className="subTypes"> <Link to="/cheesesalad" className="ref">Tarta de Queso Salada</Link></div>
                                <div className="separacionPeque"/>
                                <img src={tartaSalad} className="imgType" alt="salad pic"/>
                            </div>
                            <div className="childs">
                                <div className="subTypes"> <Link to="/cheeselime" className="ref">Tarta de Queso y Lima</Link></div>
                                <div className="separacionPeque"/>
                                <img src={tartaLime} className="imgType" alt="lima pic"/>
                            </div>

                        </div>

                        <hr/>
                        <div id="bloquee">
                            <div className="subtitle">Versiones de tarta de queso en diferentes países</div>
                            <div className="separacionTitulos"/>
                            <div className="versiones"><div className="subSubTitle">Grecia: </div><div className="paises">La versión griega se caracteriza por utilizar la <b>mizithra</b> o como nosotros le llamamos <b>queso feta</b></div></div>
                            <div className="separacionPeque"/>
                            <div className="versiones"><div className="subSubTitle">Italia: </div><div className="paises">La tarta de queso italiana se caracteriza por llevar como de ingredientes la <b>ricotta</b>, el <b>queso mascarpone</b> y la <b>miel</b>.</div></div>
                            <div className="separacionPeque"/>
                            <div className="versiones"><div className="subSubTitle">Japón: </div><div className="paises">El cheesecake japonés recibe el nombre de <b>“Fuwa-Fuwa”</b> y se caracteriza por asemejarse más a un bizcocho que a un pastel.</div></div>
                            <div className="separacionPeque"/>
                            <div className="versiones"><div className="subSubTitle">Alemania: </div><div className="paises">Los alemanes suelen comer esta tarta con <b>queso cottage</b> y <b>masa recién hecha</b> en vez de base de galleta triturada.</div></div>
                        </div>
                        
                        <hr/>

                        <div className="subtitle">Historia de la Tarta de Queso</div>
                        <div className="separacionTitulos"/>
                        <div className="bloquee2">
                            La <Link to="/cheesecake" className="ref" onClick={window.scrollTo(0, 0)}>Tarta de Queso</Link> es el resultado de muchas modificaciones a lo largo de miles de años, se cree que su nacimiento se remonta 4000 años antes de la era actual, por la Antigua Grecia, en la isla de Samos.
                            <div className="separacionPeque"/>
                            En la Antigua Grecia se consideraba una auténtica fuente de energía y no en vano era alimento de los primeros atletas de los juegos olímpicos cuando estos comenzaron en el año 776 a.C, aunque no fue hasta el año 230 d.C cuando al escritor Ateneo se le atribuyó la autoría de la primera receta escrita de la tarta de queso, en aquellos tiempos simplemente se calentaba el queso triturado en una cacerola de cobre con miel y harina para posteriormente dejarlo enfriar y servir.
                            <div className="separacionPeque"/>
                            Cuando Grecia fue conquistada por los romanos, la tarta de queso se convirtió en un motín de guerra. Ellos modificaron la receta incluyendo huevo y horneándola entre ladrillos calientes, la rebautizaron con el nombre de libuma y era un pastel que solo se servía en ocasiones muy especiales.
                        </div>

                        <hr/>

                        <div className="subtitle">Composición</div>
                        <div className="separacionTitulos"/>
                        <div className="bloquee2">
                            Los antiguos griegos lo consideraban un pastel. Algunos autores modernos señalan que la presencia de huevos, como la única forma de levadura, es la prueba de que se trata de una torta. Y otros afirman que la corteza separada, el relleno suave, y la ausencia de harina demuestra que se trata de una tarta de crema.
                            <div className="separacionPeque"/>
                            No sólo el tipo de queso afecta la textura y el sabor, sino la habilidad de incorporar otro tipo de ingredientes. Cuando el relleno de un pastel de queso es muy líquido (o aguado) no será tan estructuralmente firme y se desparramará sobre la mesa. Una forma de evitar esto es utilizar gelatina sin sabor o un poco de fécula de maíz batida con huevos.
                            <div className="separacionPeque"/>
                            Es recomendable no utilizar ninguna fruta que contenga enzimas "come proteínas" vivas, tales como papaya, piña o mango sin cocinar estas primero, si no el pastel de queso no cuajará.
                            <div className="separacionPeque"/>
                            Para que el pastel de queso no se quiebre por encima al hornearlo, se recomienda no batir demasiado los huevos cuando se incorporan con el queso cremoso. También, cuando el pastel esté cuajado, se puede apagar el horno, y dejar que se cocine con el calor remanente.
                            <div className="separacionFooter"/>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Cheesecake;