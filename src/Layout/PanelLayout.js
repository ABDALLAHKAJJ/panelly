import React from 'react'
import {Layout} from 'antd'
import PanelFooter from './Footer/PanelFooter'
import PanelHeader from './Header/PanelHeader'
import Content from './Content/Content'
function PanelLayout() {
  return (
    <>
      <Layout>
        <Content/>
      </Layout>
    </>
  )
}

export default PanelLayout