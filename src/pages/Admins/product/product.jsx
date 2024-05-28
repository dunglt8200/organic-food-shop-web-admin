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

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        fetchData(ProductApi.GetList)
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error))
            .finally(() => {
                setLoading(false)
            })
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

    return (
        <div className="main-product">
            <div className="div-main-item">
                <button onClick={openModal} className='btn-add'>Thêm mới</button>
                <MyModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                />
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