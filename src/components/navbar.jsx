import React from "react";
import "./navbar.css";

function Navbar(){

    const handleClick = () => {
        window.location.reload();
      };
    
    return(
        <div class="navbar">
        <div class="navbar-brand">Food Mantra</div>
        <h4 onClick={handleClick}>Home</h4>
        <h4>Menu</h4>
        <h4>Contact Us</h4>
        <h4>More Info</h4>
    </div>
    );
}

export default Navbar;