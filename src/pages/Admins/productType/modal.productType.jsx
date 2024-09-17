import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import "./productType.style.css";
import { postData, putData } from '../../../utils/fetchData';
import ProductTypeApi from '../../../api/productType';
import Loading from '../../common/loading';

const ModalProduct = ({ isOpen, onRequestClose, onInit, row, isInsert }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);

  const clearInputValues = () => {
    if (isInsert) {
      setName('');
      setCode('');
      setId(null);
    }
    else {
      setName(row?.Name);
      setCode(row?.Code);
      setId(row?._id);
    }
  };

  useEffect(() => {
      clearInputValues();
  }, [isInsert, isOpen]);

  const handleSubmit = async () => {
    const payLoad = {
      'Name' : name,
      'Code' : code,
      'Id' : id
    }

    try {
      setLoading(true);
      (isInsert ? await postData(ProductTypeApi.Create, payLoad) : await putData(ProductTypeApi.Update, payLoad));
    } catch (error) {
        console.error('There was an error creating the product!', error);
    }
    finally {
      setLoading(false);
      onRequestClose();
      onInit();
    }
  };

  if (loading) {
    return <>
        <div className="loading-container">
          <Loading loading={loading} />
        </div>
    </>
}
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Thêm sản phẩm"
      style={{
        content: {
          top: '40%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: 0,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
        },
      }}
    >
      <div className='div-title-modal'>
        <h2>{isInsert ? 'Thêm loại sản phẩm' : 'Cập nhật loại sản phẩm'}</h2>
      </div>     
      <form className='form-input-typeSP' onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className='div-input'>
          <label>
            Tên loại sản phẩm:
          </label>
          <input
              className='input-modal'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
             
            />
        </div>

        <div className='div-close'>
          <button className='btn-modal' type="submit">{isInsert ? 'Lưu' : 'Cập nhật'}</button>
          <button className='btn-modal' type="button" onClick={onRequestClose}>Đóng</button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalProduct;
