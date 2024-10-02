import React from "react";
import { ROUTERS } from "./utils/router";
import {Routes, Route} from "react-router-dom";
import MasterLayout from "./pages/common/masterLayout";
import Product from "./pages/Admins/product/product";
import ProductType from "./pages/Admins/productType/productType";
import Home from "./pages/Admins/home/home";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./pages/Admins/login/login";
import New from "./pages/Admins/new/new";

const renderCompoent = () => {
    const routerPages = [
       {
        path: ROUTERS.ADMIN.HOME,
        compoent: <Home></Home>,
       },
       {
        path: ROUTERS.ADMIN.LOAISANPHAM,
        compoent:<ProductType></ProductType>,
       },
       {
        path: ROUTERS.ADMIN.SANPHAM,
        compoent: <Product></Product>,
       },
       {
        path: ROUTERS.ADMIN.TINTUC,
        compoent: <New></New>,
       },
    ];

   return(
    <MasterLayout>
        <Routes>
        <Route path="/login" element={<Login />} />
        { 
            routerPages.map((x, key) => (
                (                         
                    <Route key={key} path={x.path} element={
                        <PrivateRoute>
                        {x.compoent}
                        </PrivateRoute>
                    }></Route>
                )
            
        ))}   
        <Route path="*" element={<Login />} />    
        </Routes>     
    </MasterLayout>
   );
};

function RouterSetting(){
    return renderCompoent();
}

export default RouterSetting;