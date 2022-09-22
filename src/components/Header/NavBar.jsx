import { NavLink } from "react-router-dom";

export function NavBar () {
    return(
            <nav className="nav-container">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to={'HOME'} className="nav-link">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="html/modelos.html">ALL</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="html/shop.html">ZAPATOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="html/sEspera.html">BOTAS</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'contacto'} className="nav-link">CONTACTO</NavLink>
                    </li>
                </ul>
            </nav>
    )
}

