const apiUrl = process.env.REACT_APP_API_URL;

const ThongKeSPByLoai = `${apiUrl}/statistics/thongke-producttype`;
const ThongKeSPLowQuantity = `${apiUrl}/statistics/thongke-sp-low-quantity`;

const StatisticsApi = {
    ThongKeSPByLoai,
    ThongKeSPLowQuantity
  };

export default StatisticsApi;