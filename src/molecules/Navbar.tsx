import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.scss";

const Navbar = (props: { pageName: string }) => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li>
          <IconButton aria-label="menu" size="large">
            <MenuIcon fontSize="inherit" />
          </IconButton>
        </li>
        <li>
          <h3 className="navbar-text--secondary">{props.pageName === "Home" ? "All Books" : props.pageName}</h3>
        </li>

        {props.pageName === "Home" ? (
          <li >
            <IconButton aria-label="search" size="large">
              <SearchIcon fontSize="inherit" />
            </IconButton>
          </li>
        ) : (
          <li></li>
        )}
      </ul>
    </div>
  );
};
export default Navbar;
