import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.style.css";
import UserApi from '../../../api/user';
import { postData } from "../../../utils/fetchData";
import ImgLogin from "../../../static/img/img-login.jpg";
import Loading from '../../common/loading';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginErrorMess, setLoginErrorMess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    let messError = "";
    setLoading(true);
    // Kiểm tra nếu trường username trống
    if (username.trim() === "") {
      messError = "Vui lòng nhập đầy đủ thông tin ";
    }
    // Kiểm tra nếu trường password trống
    if (password.trim() === "") {
      messError = "Vui lòng nhập đầy đủ thông tin";
    }
    // Nếu không có lỗi, tiếp tục xử lý đăng nhập
    if (messError.length === 0) {
      const payLoad = {
        UserName: username,
        Password: password
      }
      const data = await postData(UserApi.Login, payLoad);
      if (data && data.isCheckLogin == true) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshtoken', data.refreshtoken);
        navigate("/");
      }
      else {
        setLoading(false);
        setLoginErrorMess("Tài khoản hoặc mật khẩu không chính xác");
      }
    }
    else
    {
      setLoading(false);
      setLoginErrorMess(messError)
    }
  };

  return (
    <div className="login-main">
      <div className="div-img-login">
          <img width={'100%'} height={'100%'} src={ImgLogin} alt="" />
      </div>
      <div className="login-page">
        <div className="form">
          <span>Đăng Nhập</span>
          <form className="login-form">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {loginErrorMess && <span className="error-message">{loginErrorMess}</span>}
            <button onClick={handleLogin}>Đăng Nhập</button>          
          </form>
          {loading && <div className="div-loading-login">
              <Loading loading={loading}/>
            </div>} 
        </div>
      </div>
    </div>
  );
};

export default Login;
