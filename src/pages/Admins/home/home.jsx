import React, { useEffect, useState } from "react";
import "./home.style.css";
import ChartStatistics from "../../common/chart";
import { Bar, Line } from 'react-chartjs-2';
import StatisticsApi from '../../../api/statistics';
import { postData } from "../../../utils/fetchData";

function Home() {
    const [thongKeSP_ByTypeData, setthongKeSP_ByTypeData] = useState([]);
    const [thongKeSP_LowQuantity, setthongKeSP_LowQuantity] = useState([]);

    useEffect(() => {
        handleThongKeSP_ByType()
        handleThongKeSP_LowQuantity()
    }, [])
    
    const handleThongKeSP_ByType = async () => {
        const thongKeSP_ByType = await postData(StatisticsApi.ThongKeSPByLoai);
        setthongKeSP_ByTypeData(thongKeSP_ByType)
    }

    const handleThongKeSP_LowQuantity = async () => {
        const thongKeSP_LowQuantity = await postData(StatisticsApi.ThongKeSPLowQuantity);
        setthongKeSP_LowQuantity(thongKeSP_LowQuantity)
    }

    return (
        <div className="div-home">
            <div className="div-chart">
                <ChartStatistics type_chart={Bar} data={thongKeSP_ByTypeData}/>
                <p>Thống kê số lượng sản phẩm theo loại</p>
            </div> 
                 
            <div className="div-chart">
                <ChartStatistics type_chart={Line} data={thongKeSP_LowQuantity}/>
                <p>Thống kê sản phẩm sắp hết</p>
            </div>                          
        </div>
    ) 
}

export default Home;