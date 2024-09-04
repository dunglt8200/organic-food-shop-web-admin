import React from "react";
import { ROUTERS } from "./utils/router";
import {Routes, Route} from "react-router-dom";
import MasterLayout from "./pages/common/masterLayout";
import Product from "./pages/Admins/product/product";
import ProductType from "./pages/Admins/productType/productType";
import Home from "./pages/Admins/home/home";

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
    ];

   return(
    <MasterLayout>
        <Routes>
        { routerPages.map((x, key) => (
            (<Route key={key} path={x.path} element={x.compoent}></Route>)
        ))}
        </Routes>
    </MasterLayout>
   );
};

function RouterSetting(){
    return renderCompoent();
}

export default RouterSetting;