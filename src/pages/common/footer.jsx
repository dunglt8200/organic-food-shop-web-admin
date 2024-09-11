import React from "react";

function Footer() {
   return(
    <div className="footer">
      <div className="div-footer">
         <ul className="ul-footer">
            <li className="li-footer-item size-text-30 style-text">
               <span>TD ORGANIC FOOD</span>
            </li>
            <li className="li-footer-item">
               <span>Địa chỉ: 298 Dương Quảng Hàm, phường 5, Gò Vấp, Hồ Chí Minh</span>
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
         <div className="div-map">
            <p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!
                                    1d3918.746311985123!2d106.68519917590623!3d10.83071595818821!2m3!1f0!2f0!3f0!3m2!
                                    1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f82c8b5185%3A0xd831de75ccfe2560!2zMjk4IMS
                                    QLiBRdeG6o25nIEjDoG0sIFBoxrDhu51uZyA1LCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!
                                    5e0!3m2!1svi!2s!4v1713757526626!5m2!1svi!2s"
                                    style={{width:"100%", height: "100%", border: "none"}}
                                    id="" title="map">
                                 </iframe>                                
            </p>
         </div>                  
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