import React from "react";

function Footer() {
   return(
    <div className="footer">
      <div className="div-footer">
         <ul className="ul-footer">
            <li className="li-footer-item size-text-30 style-text">
               <span>TD Organic Food</span>
            </li>
            <li className="li-footer-item">
               <span>Địa chỉ: 298 Dương Quảng Hàm, p.15, Gò Vấp, HCM</span>
            </li>
            <li className="li-footer-item">
               <span>Phone: 0393903939</span>
            </li>
            <li className="li-footer-item">
            <span>Email: organic-food@gmail.com</span>
            </li>
         </ul>
      </div>
      <div className="div-footer">
            <ul className="ul-footer">
               <li className="li-footer-item style-text">
                  <span>Cửa Hàng</span>
               </li>
               <li className="li-footer-item">
                  <span>Liên hệ</span>
               </li>
               <li className="li-footer-item">
                  <span>Thông tin về chúng tôi</span>
               </li>
               <li className="li-footer-item">
               <span>Sản phẩm kinh doanh</span>
               </li>
            </ul>
      </div>
      <div className="div-footer">
            <ul className="ul-footer">
               <li className="li-footer-item">
                  <span>Thông tin tài khoản</span>
               </li>
               <li className="li-footer-item">
                  <span>Giỏ hàng</span>
               </li>
               <li className="li-footer-item">
                  <span>Thông tin ưa thích</span>
               </li>
            </ul>
      </div>
      <div className="div-footer">
            <ul className="ul-footer">
               <li className="li-footer-item style-text">
                  <span>Khuyến mãi & ưu đãi</span>
               </li>
               <li className="li-footer-item">
                  <span>Đăng ký nhận thông tin tại đây.</span>
               </li>
               <li className="li-footer-item">
                  <input type="text" className="input" placeholder="Nhập email"/>
                  <button className="button">ĐĂNG KÝ</button>
               </li>
            </ul>
      </div>
    </div>
   )
}

export default Footer;