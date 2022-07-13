import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../navLinks";
import './styles.css';

function FooterL() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <div className="grid-footer container">
            <div>
                <ul className="list-unstyled quick-links">
                    {
                        navLinks.map((element, index) => (
                            <li key={index}>
                                <NavLink to={element.path.replace('/', '')}>{element.title}</NavLink>
                            </li>
                        ))
                    }
                </ul>

            </div>
            <div>Blog App with React</div>
        </div>
    )
}

export default FooterL;