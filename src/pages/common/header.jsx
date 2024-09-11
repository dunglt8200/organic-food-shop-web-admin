import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin, CiUser } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { convertIntToVND } from "../../utils/util";
import { RiMailSendLine } from "react-icons/ri";
import "../../utils/const";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshtoken");
    navigate("/login");
  };

    return(
        <div>
            {/* header top */}
            <div className="header-top">
                <div className="header-item justify-content-left">
                    <ul className="ul-header-item">
                        <li className="li-header-item">
                            <RiMailSendLine />
                            <span>organic-food@gmail.com</span>
                        </li>
                        <li className="li-header-item">
                            <span>|</span>
                        </li>
                        <li className="li-header-item">
                            <span>Miễn ship đơn từ {convertIntToVND(200000)}</span>
                        </li>
                    </ul>
                </div>
                {/* icon social network */}
                <div className="header-item justify-content-right">
                    <ul className="ul-header-item">
                        <li className="li-header-item">
                            <AiOutlineFacebook />
                        </li>
                        <li className="li-header-item">
                            <FaInstagram />
                        </li>
                        <li className="li-header-item">
                            <CiLinkedin />
                        </li>
                        <li className="li-header-item">
                            <IoLogoTwitter />
                        </li>
                        <li className="li-header-item">
                            <CiUser />
                            <button className="btn-logout" onClick={handleLogout}>Đăng xuất</button>
                        </li>
                    </ul>
                </div>
            </div>
            {/* header bottom */}
            <div className="header-bottom">                
                <div className="header-bottom-item">  
                    <img src="" alt="" />                
                    <a href="/" className="logo-link">
                        <span className="logo">TD ORGANIC FOOD ADMIN</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;