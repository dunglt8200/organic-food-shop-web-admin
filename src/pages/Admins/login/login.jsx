import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginErrorMess, setLoginErrorMess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginErrorMess("");
    // Kiểm tra nếu trường username trống
    if (username.trim() === "") {
      setLoginErrorMess("Vui lòng nhập đầy đủ thông tin");
    }
    // Kiểm tra nếu trường password trống
    if (password.trim() === "") {
      setLoginErrorMess("Vui lòng nhập đầy đủ thông tin");
    }

    // Nếu không có lỗi, tiếp tục xử lý đăng nhập
    if (username === "admin" && password === "password") {
      localStorage.setItem("auth", "true");
      navigate("/");
    }
    else {
      setLoginErrorMess("Tài khoản hoặc mật khẩu không chính xác");
    }
  };

  console.log("username", username)
  console.log("password", password)
  console.log("loginErrorMess", loginErrorMess)

  return (
    <div className="login-main">
      <div className="login-page">
        <div className="form">
          <span>Đăng Nhập</span> 
          <form className="login-form">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {loginErrorMess && <span className="error-message">{loginErrorMess}</span>}
            <button onClick={handleLogin}>Đăng Nhập</button>
          </form>
        </div>
     </div>
    </div> 
  );
};

export default Login;
