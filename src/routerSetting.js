import React from "react";
import { ROUTERS } from "./utils/router";
import {Routes, Route} from "react-router-dom";
import MasterLayout from "./pages/common/masterLayout";
import Product from "./pages/Admins/product/product";
import ProductType from "./pages/Admins/productType/productType";

const renderCompoent = () => {
    const routerPages = [
       {
        path: ROUTERS.ADMIN.SANPHAM,
        compoent: <Product></Product>,
       },
       {
        path: ROUTERS.ADMIN.LOAISANPHAM,
        compoent:<ProductType></ProductType>,
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