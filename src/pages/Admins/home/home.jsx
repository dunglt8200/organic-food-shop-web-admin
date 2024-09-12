import React, { useEffect, useState } from "react";
import "./home.style.css";
import ChartStatistics from "../../common/chart";
import { Bar, Line } from 'react-chartjs-2';
import StatisticsApi from '../../../api/statistics';
import { postData } from "../../../utils/fetchData";

function Home() {
    const [thongKeSP_ByTypeData, setthongKeSP_ByTypeData] = useState([]);

    useEffect(() => {
        handleThongKeSP_ByType()
    }, [])
    
    const handleThongKeSP_ByType = async () => {
        const thongKeSP_ByType = await postData(StatisticsApi.ThongKeSPByLoai);
        setthongKeSP_ByTypeData(thongKeSP_ByType)
        console.log("thongKeSP_ByTypeData",  thongKeSP_ByTypeData)
    }

    return (
        <div className="div-home">
            <div className="div-chart">
                <ChartStatistics type_chart={Bar} data={thongKeSP_ByTypeData}/>
                <p>Thống kê số lượng sản phẩm theo loại</p>
            </div> 
                 
            <div className="div-chart">
                <ChartStatistics type_chart={Line}/>
                <p>Thống kê sản phẩm</p>
            </div>                          
        </div>
    ) 
}

export default Home;