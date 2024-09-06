import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin, CiUser } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { convertIntToVND } from "../../utils/util";
import { RiMailSendLine } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "../../utils/const";
import { Menus } from "../../utils/const";
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
                    <a href="/" className="logo-link">
                        <span className="logo">TD ORGANIC FOOD ADMIN</span>
                    </a>
                </div>
                <div className="header-bottom-item-center">
                    <ul className="ul-header-item-menu">
                       {Menus.map((menu, key)=> (
                        <li className="li-header-item" key={key}>
                             <Link className="link-menu" to={menu.path}>{menu.name}</Link>
                             {menu?.child?.length && (
                                <ul className="ul-dropdown-list">
                                    {menu.child.map((child, keyChild) => (
                                        <li className="li-header-item li-dropdown" key={keyChild}>
                                            <Link className="link-menu" to={child.path}>{child.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                             )}
                        </li>
                       ))}
                    </ul>
                </div>
                {/* cart */}
                {/* <div className="header-bottom-item justify-content-right">
                    <ul className="ul-header-item">
                        <li className="li-header-item">
                            <span>{convertIntToVND(1001000)}</span>
                        </li>
                        <li className="li-header-item">
                        <BsCart />
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default Header;