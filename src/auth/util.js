// auth.js
import { jwtDecode } from "jwt-decode";

export const checkRefreshTokenExpiration = () => {
  const refreshToken = localStorage.getItem('refreshtoken');
  if (!refreshToken) {
    return false;
  }

  try {
    const decoded = jwtDecode(refreshToken);
    const currentTime = Math.floor(Date.now() / 1000);

    // Kiểm tra nếu token đã hết hạn
    return decoded.exp > currentTime;
  } catch (err) {
    return false;
  }
};
