import React, { useEffect, useState } from 'react';
import "./product.style.css";
import DataTable from 'react-data-table-component';
import { CustomStyles } from '../../../utils/const';
import { fetchData } from '../../../utils/fetchData';
import ProductApi from '../../../api/product';
import MyModal from './modal.product';
import { ClipLoader } from 'react-spinners';

function Product() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [rowEditing, setRowEditing] = useState();
    const [IsInsert, setIsInsert] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        setIsInsert(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const onInit = async () => {
        await fetchData(ProductApi.GetList)
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error))
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        onInit()
    }, []);

    if (loading) {
        return <>
            <div className="loading-container">
                <ClipLoader color="#0000ff" loading={loading} size={50} />;
            </div>
        </>
    }

    const columns = [
        {
            name: 'Mã sản phẩm',
            selector: row => row.Code,
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

    const handleRowClicked = (row) => {   
        console.log("row", row);    
        setRowEditing(row);
        openModal(true);   
        setIsInsert(false);  
      };

    return (
        <div className="main-product">
            <div className="div-main-item">
                <button onClick={openModal} className='btn-add'>Thêm mới</button>
                <MyModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    onInit = {onInit}
                    row = {rowEditing}
                    isInsert={IsInsert}
                />
            </div>
            <div className="div-main-item">
                <DataTable
                    customStyles={CustomStyles}
                    columns={columns}
                    data={data}
                    onRowClicked={handleRowClicked}
                />               
            </div>
        </div>
    )
}

export default Product;