import React from 'react'
import { Header } from 'antd/lib/layout/layout'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
 <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
            >
              
                <Menu.Item key={1}><Link to='/PanelDashboard'>PanelDashboard</Link></Menu.Item>
                <Menu.Item key={1}><Link to='/Customers'>Customers</Link></Menu.Item>


            </Menu>
        </Header>
    </>
  )
}

export default Navbar