import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = () => {
  return (
    <>
      <header className="App-header">
        <div className="nav-container">
          <div>
            <Link exact to="/" className="acceuil">
              Acceuil
            </Link>
          </div>
          <Search />
        </div>
      </header>
    </>
  );
};

export default NavBar;
