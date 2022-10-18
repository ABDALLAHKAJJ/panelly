import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Nav } from '../../../Configrations/RouteConfig/RoutConfig';

function PanelDashboard() {
    return (
        <>
        <span>Dashboard</span>
            {/* <Routes>

                {
                    Nav && Nav.map((item, key) => {
                        return <Route key={key} path={item.path} element={item.element} />
                    })
                }

            </Routes> */}
        </>
    )
}

export default PanelDashboard