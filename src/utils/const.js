import { ROUTERS } from "./router";

export const Menus = [
    {
        name: "SẢN PHẨM",
        path: ROUTERS.ADMIN.SANPHAM
    },
    {
        name: "BÀI VIẾT",
        path: ROUTERS.ADMIN.BAIVIET
    },
];

export const CustomStyles = {
  table: {
    style: {
      width: '100%',
      height: 'auto'
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