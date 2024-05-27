import React from "react";
import "./product.style.css";
import DataTable from 'react-data-table-component';
import { CustomStyles } from '../../utils/const';

function Product() {
    const columns = [
        {
            name: 'Mã sản phẩm',
            selector: row => row.id,
        },
        {
            name: 'Ảnh đại diện',
            selector: row => row.img,
        },
        {
            name: 'Tên sản phẩm',
            selector: row => row.name,
        },
        {
            name: 'Giá',
            selector: row => row.price,
        },
    ];

    const data = [
        {
          id: 1,
          img: '',
          name: 'Cà chua',
          price: "100000đ"
      },
      {
          id: 2,
          img: '',
          name: 'Dưa hấu',
          price: "239000đ"
      },
  ]

    return(
        <div className="main-product">
            <div className="div-main-item">
                <button className="btn-add">Thêm mới</button>
            </div>
            <div className="div-main-item">
                <DataTable
                customStyles={CustomStyles}
			    columns={columns}
			    data={data}
		    />
            </div>     
        </div>
    )
}

export default Product;