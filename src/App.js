import './App.css';
import 'antd/dist/antd.css';
import PanelLayout from './Layout/PanelLayout';
import PanelLogin from './Layout/Content/Login/PanelLogin';
import { Route, Routes } from 'react-router-dom';
import Customers from './Layout/Pages/Customers';
import PanelDashboard from './Layout/Content/Dashboard/PanelDashboard';

function App() {



  return (
    <div className="App">
      {/* <PanelLayout  /> */}
      <Routes>
        <Route >
          <Route path="/login" element={<PanelLogin />} />
          <Route path="/" element={<PanelLogin />} />
        </Route>

        <Route path="/PanelDashboard" element={<PanelDashboard />} />
        <Route path="/PanelLayout" element={<PanelLayout />} />
        <Route path="/Customers" element={<Customers />} />
      </Routes>
    </div>
  );
}

export default App;
