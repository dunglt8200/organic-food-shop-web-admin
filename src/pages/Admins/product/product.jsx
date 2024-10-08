import React, { useEffect, useState } from 'react';
import "./product.style.css";
import DataTable from 'react-data-table-component';
import { CustomStyles } from '../../../utils/const';
import { fetchData, postData } from '../../../utils/fetchData';
import ProductApi from '../../../api/product';
import MyModal from './modal.product';
import EmptyDataIco from '../../../static/img/folderEmpty.png';
import Loading from '../../common/loading';

function Product() {
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

    const columns = [
        {
            name: 'Mã sản phẩm',
            selector: row => row.Code,
            maxWidth: '500px'
        },
        {
            name: 'Ảnh đại diện',
            cell: row => (
                <img 
                    src={row?.Img || ''} 
                    alt={row.name || ''} 
                    style={{ width: '50px', borderRadius: '50%' }} 
                />
            ),
            selector: row => row.Img,
            maxWidth: '500px'
        },
        {
            name: 'Tên sản phẩm',
            selector: row => row.Name,
            maxWidth: '500px'
        },
        {
            name: 'Giá',
            selector: row => row.Price,
            maxWidth: '500px'
        },
        {
            name: 'Loại sản phẩm',
            selector: row => row.ProductTypeName,
            maxWidth: '500px'
        },
        {
            name: 'Số lượng',
            selector: row => row.Quantity,
            maxWidth: '500px'
        },
    ];

    const handleRowClicked = (row) => {    
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
        await postData(ProductApi.DeleteIds, payloadDel)
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
                    paginationPerPage={7}
                    paginationComponentOptions={{
                        rowsPerPageText: '',
                        rangeSeparatorText: '/',
                        noRowsPerPage: true
                      }}
                />  
                 {loading && <div className="div-loading">
                    <Loading loading={loading}/>
                </div>}              
            </div>
        </div>
    )
}

export default Product;