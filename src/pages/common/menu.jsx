import React, { useState } from "react";
import { Menus } from "../../utils/const";
import { Link } from 'react-router-dom';

const Menu = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleMenuClick = (index) => {
        setActiveIndex(index);
    };

    return (
       <div className="menu-main">
            <ul className="ul-menu-main">
                {Menus.map((menu, key)=> (
                    <li className={`li-menu-main ${activeIndex === key ? 'active' : ''}`} key={key} onClick={() => handleMenuClick(key)}>
                        <Link className="link-menu-main" to={menu.path}>{menu.icon} {menu.name}</Link>          
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
    );
};

export default Menu;