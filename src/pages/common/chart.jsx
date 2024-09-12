import React from 'react';
import { generateColors } from "../../utils/util";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

const ChartStatistics = ({ type_chart: ChartComponent, data: dataset }) => {
  const data = {
    labels: dataset && dataset.map(item => item.name),
    datasets: [
      {
        data: dataset && dataset.map(item => item.total),
        backgroundColor: generateColors(dataset ? dataset.length : 0),
        borderColor: generateColors(dataset ? dataset.length : 0).map(color => color.replace('0.2', '1')),
        borderWidth: 1,
      },
    ],   
  };
  
  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return <ChartComponent data={data} options={options} />;
};

export default ChartStatistics;
