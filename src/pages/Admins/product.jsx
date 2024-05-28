import React, { useEffect, useState } from 'react';
import "./product.style.css";
import DataTable from 'react-data-table-component';
import { CustomStyles } from '../../utils/const';
import { fetchData } from '../../utils/fetchData';
import ProductApi from '../../api/product';

function Product() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(ProductApi.GetList)
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    const columns = [
        {
            name: 'Mã sản phẩm',
            selector: row => row._id,
        },
        {
            name: 'Ảnh đại diện',
             selector: row => row.Img,
        },
        {
            name: 'Tên sản phẩm',
            selector: row => row.Name,
        },
        {
            name: 'Giá',
            selector: row => row.Price,
        },
    ];

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