import React from "react";
import HomeBanner from "../../../static/img/farm-banner.jpg";
import "./home.style.css";

function Home() {
    return (
        <div className="div-home">
            <img src={HomeBanner} alt="" />
        </div>
    ) 
}

export default Home;