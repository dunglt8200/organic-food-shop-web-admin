import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import "./new.style.css";
import { postData, putData } from '../../../utils/fetchData';
import NewApi from '../../../api/new';
import Loading from '../../common/loading';
import Switch from "react-switch";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ModalNew = ({ isOpen, onRequestClose, onInit, row, isInsert }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const [id, setId] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageSave, setImageSave] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageSave(file);
    }
  };

  const handleChangeSwitch = () => {
    setIsShow(!isShow)
  }

  const clearInputValues = () => {
    if (isInsert) {
      setTitle('');
      setImage(null);
      setId(null);
      setContent('');
      setIsShow(false)
    }
    else {
      setId(row?._id);
      setTitle(row?.Title);
      setImage(row?.Img);
      setContent(row?.Content);
      setIsShow(row?.IsShow)
    }
  };

  useEffect(() => {
      clearInputValues();
  }, [isInsert, isOpen]);

  const handleSubmit = async () => {
    const formData = new FormData();
        formData.append('Title', title);
        formData.append('Content', content);
        formData.append('Img', imageSave);
        formData.append('Id', id);
        formData.append('IsShow', isShow);

    try {
      setLoading(true);
      const apiUrl = isInsert ? NewApi.Create : NewApi.Update;
      (isInsert ? await postData(apiUrl, formData, { headers: {'Content-Type': 'multipart/form-data'}}) 
                : await putData(apiUrl, formData, { headers: {'Content-Type': 'multipart/form-data'}}));
    } catch (error) {
        console.error('There was an error creating the new!', error);
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
      contentLabel="Thêm tin tức"
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
        <h2>{isInsert ? 'Thêm tin tức' : 'Cập nhật tin tức'}</h2>
      </div>     
      <form className='form-input-new' onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className='div-input'>
          <label>
            Tiêu đề:
          </label>
          <input
              className='input-modal'
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required         
            />
        </div>
        <div className='div-input-ck'>
          <label>
            Nội dung:
          </label>
          <CKEditor
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setContent(data)
                    } }
                    config={ {                                         
                      initialData: row?.Content,      
                    } }
                />
        </div>
        <div className='div-input'>
          <span>Hiển thị: </span>
          <Switch onChange={handleChangeSwitch} checked={isShow !== undefined ? isShow : false} />    
        </div>
        <div className='div-input-img'>
          <label>
            Chọn ảnh đại diện:            
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
    </Modal>
  );
};

export default ModalNew;
