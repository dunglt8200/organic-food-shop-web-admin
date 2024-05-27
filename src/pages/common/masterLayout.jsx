import React from "react";
import Header from "./header";
import Footer from "./footer";

function MasterLayout({children, ...props}) {
    return(
        <div className="div-master-layout" { ...props}>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>   
    )
}

export default MasterLayout;