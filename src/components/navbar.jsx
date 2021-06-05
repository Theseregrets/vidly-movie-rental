import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Vidly
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <NavLink class="nav-item nav-link" aria-current="page" to="/movies">
              Home
            </NavLink>

            <NavLink class="nav-item nav-link" to="/customers">
              Customers
            </NavLink>

            <NavLink class="nav-item nav-link" to="/rental">
              Rental
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
