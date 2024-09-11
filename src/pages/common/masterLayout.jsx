import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import Menu from "./menu";

function MasterLayout({children, ...props}) {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return(
        <div className="div-master-layout" { ...props}>
            {!isLoginPage && <Header />}
            <div className="div-master-main">
                <Menu />
                {children}
            </div>    
            {!isLoginPage && <Footer />}
        </div>   
    )
}

export default MasterLayout;