import React from "react";
import { Link } from "react-router-dom";
import Error404Image from "../../assets/png/error-404.jpg";

import "./Error404.scss";

export default function Error404() {
    return (
        <div className="error404">
            
            <img src={Error404Image} alt="Error404" />
            <Link to="/"><img className="volver" src="https://res.cloudinary.com/dainl1ric/image/upload/v1664856851/iconotwitter_efxgl5.png" alt="Twittor" /></Link>
        </div>
    );
}