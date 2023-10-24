import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Style.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            WorldShoes
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <i className="bi bi-list"></i>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Inicio
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/productos">
                    Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productos/Nike">
                    Nike
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productos/Adidas">
                    Adidas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productos/Puma">
                    Puma
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">
                    Contacto
                  </Link>
                </li>
                <li>
                  <CartWidget />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
