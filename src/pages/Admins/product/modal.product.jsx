import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import "./product.style.css";
import { fetchData, postData, putData } from '../../../utils/fetchData';
import ProductApi from '../../../api/product';
import ProductTypeApi from '../../../api/productType';
import Loading from '../../common/loading';
import Select from 'react-select';

const ModalProduct = ({ isOpen, onRequestClose, onInit, row, isInsert }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [code, setCode] = useState('');
  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageSave, setImageSave] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageSave(file);
    }
  };

  const clearInputValues = () => {
    if (isInsert) {
      setName('');
      setPrice('');
      setImage(null);
      setCode('');
      setId(null);
      setSelectedOption(null);
      setQuantity('');
    }
    else {
      setName(row?.Name || '');
      setPrice(row?.Price || '');
      setImage(row?.Img || null);
      setCode(row?.Code || '');
      setId(row?._id || '');
      setQuantity(row?.Quantity || '');
      setSelectedOption({
        value: row?.ProductType || '',
        label: row?.ProductTypeName || ''
      });
    }
  }

const handleLoadListLoaiSP = async () => {
  const response = await fetchData(ProductTypeApi.GetList);
  if(response && response.length > 0) {
    const fetchedOptions = response.map(option => ({
      value: option.Code,
      label: option.Name
    }));
    setOptions(fetchedOptions);
  }
  else {setOptions([]);}
}

  useEffect(() => {
      clearInputValues();
      if(isOpen)
        handleLoadListLoaiSP();
  }, [isInsert, isOpen]);

  const handleSubmit = async () => {
    const formData = new FormData();
        formData.append('Name', name);
        formData.append('Price', price);
        formData.append('Code', code);
        formData.append('Img', imageSave);
        formData.append('Id', id);
        formData.append('ProductType', selectedOption?.value);
        formData.append('Quantity', quantity);

    try {
      setLoading(true);
      const apiUrl = isInsert ? ProductApi.Create : ProductApi.Update;
      (isInsert ? await postData(apiUrl, formData, { headers: {'Content-Type': 'multipart/form-data'}}) 
                : await putData(apiUrl, formData, { headers: {'Content-Type': 'multipart/form-data'}}));
    } catch (error) {
        console.error('There was an error creating the product!', error);
    }
    finally {
      setLoading(false);
      onRequestClose();
      onInit();
    }
  };

const handleChangeSelect = (option) => {
  setSelectedOption(option);
};

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
        <h2>{isInsert ? 'Thêm sản phẩm' : 'Cập nhật sản phẩm'}</h2>
      </div>  
      <form className='form-input' onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className='div-input'>
          <label>
              Loại sản phẩm:
          </label>
          <Select
              value={selectedOption}
              onChange={handleChangeSelect}
              options={options}
              placeholder="Chọn loại sản phẩm"
              required
              className='select-type-sp'
            />
        </div>
        <div className='div-input'>
          <label>
            Tên sản phẩm:
          </label>
          <input
              className='input-modal'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
             
            />
        </div>
        <div className='div-input'>
          <label>
            Giá:            
          </label>
          <input
              className='input-modal'
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required              
            />
        </div>
        <div className='div-input'>
          <label>
            Số lượng:            
          </label>
          <input
              className='input-modal'
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required              
            />
        </div>
        <div className='div-input-img'>
          <label>
            Chọn ảnh sản phẩm:            
          </label>
          <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
        </div>
        {image && (
          <div>
            <img src={image} alt="" width="100" />
          </div>
        )}
        <div className='div-close'>
          <button className='btn-modal' type="submit">{isInsert ? 'Lưu' : 'Cập nhật'}</button>
          <button className='btn-modal' type="button" onClick={onRequestClose}>Đóng</button>
        </div>
      </form>
      {loading && <div className="div-loading">
                    <Loading loading={loading}/>
                </div>} 
    </Modal>
  );
};

export default ModalProduct;
