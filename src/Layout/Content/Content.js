import React from 'react'
import PanelDashboard from './Dashboard/PanelDashboard'
import PanelLogin from './Login/PanelLogin'
import Navbar from '../Navbar/Navbar'
function Content() {
  return (
    <>
      <Navbar />
      <PanelDashboard />
    </>
  )
}

export default Content