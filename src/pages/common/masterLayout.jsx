import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import Menu from "./menu";
import { ROUTERS }  from "../../utils/router";

function MasterLayout({children, ...props}) {
    const routerPaths = Object.values(ROUTERS.ADMIN).map(route => `/${route}`);
    const location = useLocation();
    const isLoginPage = location.pathname === "/login" || !routerPaths.includes(location.pathname);

    return(
        <div className="div-master-layout" { ...props}>           
            {!isLoginPage && <Header />}
            <div className={!isLoginPage ? "div-master-main": ""}>
                {!isLoginPage && <Menu />}
                {children}
            </div>    
            {!isLoginPage && <Footer />}
        </div>   
    )
}

export default MasterLayout;