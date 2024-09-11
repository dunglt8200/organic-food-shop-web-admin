import React from "react";
import "./home.style.css";
import ChartStatistics from "../../common/chart";
import { Pie, Bar, Line } from 'react-chartjs-2';

function Home() {
    return (
        <div className="div-home">
            <div className="div-chart">
                <ChartStatistics type_chart={Bar}/>
                <p>Thống kê loại sản phẩm</p>
            </div> 
                 
            <div className="div-chart">
                <ChartStatistics type_chart={Line}/>
                <p>Thống kê sản phẩm</p>
            </div>                          
        </div>
    ) 
}

export default Home;