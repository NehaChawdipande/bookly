import React from "react";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from '@mui/icons-material/Person';

import "./Navbar.scss";

const BottomNav = () => {
  return (
    <div className="bottomNav">
      <ul className="navbar-list">
        <li>
          <IconButton aria-label="menu" size="large">
            <HomeIcon fontSize="inherit" />
          </IconButton>
        </li>
        <li>
          <IconButton aria-label="menu" size="large">
            <BookIcon fontSize="inherit" />
          </IconButton>
        </li>
        <li>
          <IconButton aria-label="menu" size="large">
            <PersonIcon fontSize="inherit" />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};
export default BottomNav;
