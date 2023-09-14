import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./style.css";

export default function NavBar() {
  return (
    <div>
      {/* menú de navegación responsive */}
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            WorldShoes
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./">
                    Nike
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./">
                    Adidas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./">
                    Puma
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./">
                    Nosotros
                  </a>
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
