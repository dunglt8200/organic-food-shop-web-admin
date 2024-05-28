import React, { useState } from 'react';
import Modal from 'react-modal';
import "./product.style.css";
import { postData } from '../../../utils/fetchData';
import ProductApi from '../../../api/product';
import { ClipLoader } from 'react-spinners';

const ModalProduct = ({ isOpen, onRequestClose, onInit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    const payload = {
      Name: name,
      Img: image,
      Price: price,
    };

    try {
      setLoading(true)
      postData(ProductApi.Create, payload)
      .then(data => console.log("data", data));     
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
            <ClipLoader color="#0000ff" loading={loading} size={50} />;
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
        },
      }}
    >
      <h2>Thêm sản phẩm</h2>
      <form className='form-input' onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className='div-input'>
          <label>
            Name:
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
            Price:            
          </label>
          <input
              className='input-modal'
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
            <img src={image} alt="Selected" width="100" />
          </div>
        )}
        <div className='div-close'>
          <button className='btn-modal' type="submit">Lưu</button>
          <button className='btn-modal' type="button" onClick={onRequestClose}>Đóng</button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalProduct;
