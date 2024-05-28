import React, { useState } from 'react';
import Modal from 'react-modal';
import "./product.style.css";

const ModalProduct = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Price:', price);
    console.log('Image:', image);
    onRequestClose();
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
          <button className='btn-modal' type="submit">Thêm</button>
          <button className='btn-modal' type="button" onClick={onRequestClose}>Đóng</button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalProduct;
