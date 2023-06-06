import React from "react";
import {AiOutlineHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {FiShare} from "react-icons/fi";
import "./menu.css";

function Foodmenu(props){
    const {fname,image,review} = props;

    return(
        <div>
            <div className="menu">
                <img src={image} alt="error" />
                <h3>{fname}</h3>
                <p>{review}</p>
                <div className="menu-icons">
                    <AiOutlineHeart />
                    <FaRegComment />
                    <FiShare />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Foodmenu;