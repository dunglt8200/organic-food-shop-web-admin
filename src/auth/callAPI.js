import axios from 'axios';

// Tạo instance axios
const callAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 100000,
});

// Thêm interceptor cho request
callAPI.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("interceptor cho request")
    return config;
  },
  error => Promise.reject(error)
);

// Thêm interceptor cho response
callAPI.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // Kiểm tra nếu lỗi là 401 và yêu cầu chưa được thử lại
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Gửi yêu cầu làm mới token
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/user/refresh-token`, {
          refreshtoken: localStorage.getItem('refreshtoken')
        });
        
        // Lưu token mới vào localStorage
        localStorage.setItem('token', data.accessToken);
        console.log("interceptor cho response")
        // Cập nhật header Authorization với token mới
        callAPI.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
        
        // Thực hiện lại yêu cầu gốc
        return callAPI(originalRequest);
      } catch (err) {
        console.error('Refresh token failed', err);
        // Xử lý khi refresh token thất bại (ví dụ: đăng xuất người dùng)
      }
    }
    
    return Promise.reject(error);
  }
);

export default callAPI;
