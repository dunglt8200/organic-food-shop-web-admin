import { ROUTERS } from "./router";
import { FcHome, FcList, FcAcceptDatabase, FcAdvertising } from "react-icons/fc";

export const Menus = [
    {
    name: "TRANG CHỦ",
    path: ROUTERS.ADMIN.HOME,
    icon: <FcHome />
    },
    {
        name: "LOẠI SẢN PHẨM",
        path: ROUTERS.ADMIN.LOAISANPHAM,
        icon: <FcList />
    },
    {
      name: "SẢN PHẨM",
      path: ROUTERS.ADMIN.SANPHAM,
      icon: <FcAcceptDatabase />
    },
    {
      name: "TIN TỨC",
      path: ROUTERS.ADMIN.TINTUC,
      icon: <FcAdvertising />
    },
];

export const CustomStyles = {
  table: {
    style: {
      width: '100%',
      height: '400px'
    },
  },
  header: {
    style: {
      backgroundColor: '#f4f4f4',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
    },
  },
  rows: {
    style: {
      fontSize: '16px',
      color: '#555',
      '&:nth-of-type(even)': {
        backgroundColor: '#f9f9f9',
      },
      '&:hover': {
        backgroundColor: '#e2e2e2',
        cursor: 'pointer',
      },
    },
  },
  cells: {
    style: {
      padding: '10px',
    },
  },
  headCells: {
    style: {
      fontSize: '18px !important',
      fontWeight: 'bold !important',
      color: '#333 !important',
      backgroundColor: '#f4f4f4 !important',
    },
  },
};