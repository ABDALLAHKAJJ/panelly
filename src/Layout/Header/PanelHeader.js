import React from 'react'
import {Header} from 'antd/lib/layout/layout'
import logo from '../../logo.jpg'

function PanelHeader() {
  return (
    <>
        <Header>
          <img src={logo} alt='LOGO' height="px" width="75px"/>
        </Header>
    </>
  )
}

export default PanelHeader