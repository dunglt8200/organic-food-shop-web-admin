import React from 'react';
import { Menus } from "../../utils/const";
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
       <div className="menu-main">
            <ul className="ul-menu-main">
                {Menus.map((menu, key)=> (
                    <li className="li-menu-main" key={key}>
                        <Link className="link-menu-main" to={menu.path}>{menu.name}</Link>
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