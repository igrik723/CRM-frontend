import React from "react";
import {Navigate, Route, Routes} from 'react-router-dom'
import { adminRoutes, salesManRoutes, storeKeeperRoutes, publicRoutes } from "../routes";
import { useSelector } from "react-redux";

const AppRouter = () => {
    const user = useSelector(state => state.user)
    let adminAuth = null
    let salesmanAuth = null
    let storekeeperAuth = null

    if (user.auth && user.role === 'admin') {
        adminAuth = true
    } else if (user.auth && user.role === 'salesman') {
        salesmanAuth = true
    } else if (user.auth && user.role === 'storekeeper') {
        storekeeperAuth = true
    }
    
    return ( 
        <Routes>
            {adminAuth && adminRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {salesmanAuth && salesManRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {storekeeperAuth && storeKeeperRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path='*' element={<Navigate to='login'/>}/>
        </Routes>
     );
}
 
export default AppRouter