import React, { useEffect, useState } from 'react';
import "./productType.style.css";
import DataTable from 'react-data-table-component';
import { CustomStyles } from '../../../utils/const';
import { fetchData, postData } from '../../../utils/fetchData';
import ProductTypeApi from '../../../api/productType';
import MyModal from './modal.productType';
import { HashLoader } from 'react-spinners';
import EmptyDataIco from '../../../static/img/folderEmpty.png';

function ProductType() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [rowEditing, setRowEditing] = useState();
    const [IsInsert, setIsInsert] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    const openModal = () => {
        setIsOpen(true);
        setIsInsert(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const onInit = async () => {
        await fetchData(ProductTypeApi.GetList)
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
                <HashLoader color="#339933" loading={loading} size={50} />;
            </div>
        </>
    }

    const columns = [
        {
            name: 'Mã loại',
            selector: row => row.Code,
        },
        {
            name: 'Tên loại sản phẩm',
            selector: row => row.Name,
        }
    ];

    const handleRowClicked = (row) => {   
        console.log("row", row);    
        setRowEditing(row);
        openModal(true);   
        setIsInsert(false);  
      };

    const handleSelectedRowsChange = (state) => {
        setSelectedRows(state.selectedRows);
    };
    
    const handleDelete = async () => {
        const payloadDel = {
            ids: selectedRows.map(row => row._id)
        }
        await postData(ProductTypeApi.DeleteIds, payloadDel)
        onInit()
      };

    return (
        <div className="main-product">
            <div className="div-main-item">
                <button onClick={openModal} className='btn-add'>Thêm mới</button>
                {selectedRows.length > 0 && (<button className='btn-add' onClick={handleDelete}>Xóa</button>)}
                <MyModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    onInit = {onInit}
                    row = {rowEditing}
                    isInsert={IsInsert}
                />
            </div>
            <div className="div-main-item-table">
                <DataTable
                    customStyles={CustomStyles}
                    columns={columns}
                    data={data}
                    onRowClicked={handleRowClicked}
                    selectableRows
                    onSelectedRowsChange={handleSelectedRowsChange}
                    noDataComponent={
                        <div className='div-empty-data'>
                        <img src={EmptyDataIco} alt="Không có dữ liệu" />
                        <span>Không có dữ liệu</span>
                    </div>
                    }
                    pagination
                    paginationPerPage={10}
                    paginationComponentOptions={{
                        rowsPerPageText: '',
                        rangeSeparatorText: '/',
                        noRowsPerPage: true
                      }}
                />               
            </div>
        </div>
    )
}

export default ProductType;