import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./style.css";

export default function NavBar() {
  return (
    <div>
      {/* menu de navegacion responsive  */}
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            WorldShoes
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <i class="bi bi-list"></i>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link" href="index.html">
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./">
                    Nike
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./">
                    Adidas
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./">
                    Puma
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./">
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
