import { NavLink } from "react-router-dom";
import './styles.css';

function FooterL(){
    return(
        
        
        <div id="footer">
            <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Enlaces</h5>
                        <ul className="list-unstyled quick-links">
                            <li>
                                <NavLink to="otros">
                                    <i className="fa fa-angle-double-right"></i> Otros</NavLink>
                            </li>
                            <li>
                                <NavLink to="noticias">
                                    <i className="fa fa-angle-double-right"></i> Noticias</NavLink>
                            </li>
                            <li>
                                <NavLink to="musica">
                                    <i className="fa fa-angle-double-right"></i> Música</NavLink>
                            </li>
                            <li>
                                <NavLink to="deportes">
                                    <i className="fa fa-angle-double-right"></i> Deportes</NavLink>
                            </li>
                            <li>
                                <NavLink to="entretenimiento">
                                    <i className="fa fa-angle-double-right"></i> Entretenimiento</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Información</h5>
                        <ul className="list-unstyled quick-links">
                            <li>
                                <NavLink to="#">
                                    <i className="fa fa-angle-double-right"></i> Nuestro trabajo</NavLink>
                            </li>
                            <li>
                                <NavLink to="#">
                                    <i className="fa fa-angle-double-right"></i> Acerca de</NavLink>
                            </li>
                            <li>
                                <NavLink to="#">
                                    <i className="fa fa-angle-double-right"></i> Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li>
                                <NavLink to="#">
                                    <i className="fa fa-angle-double-right"></i>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="#">
                                    <i className="fa fa-angle-double-right"></i>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="#">
                                    <i className="fa fa-angle-double-right"></i>FAQ</NavLink>
                            </li>
                            <li>
                                <NavLink to="#">
                                    <i className="fNavLinkfa-angle-double-right"></i>Get Started</NavLink>
                            </li>
                            <li>
                                <NavLink to="https://wwwe.sunlimetech.com" title="Design and developed by">
                                    <i className="fa fa-angle-double-right"></i>Imprint</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p className="h6">&copy; All right Reversed.
                            <NavLink className="text-green ml-2" to="#" target="_blank">JEACH and FREECODE.</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
    
    )
}

export default FooterL;