import React from "react";
import { ROUTERS } from "./utils/router";
import {Routes, Route} from "react-router-dom";
import MasterLayout from "./pages/common/masterLayout";

const renderCompoent = () => {
    const routerPages = [
       {
        path: ROUTERS.ADMIN.SANPHAM,
        compoent: <div></div>,
       },
       {
        path: ROUTERS.ADMIN.BAIVIET,
        compoent:<div></div>,
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