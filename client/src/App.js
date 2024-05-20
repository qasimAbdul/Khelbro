// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
// import Header from './components/Header';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Content from './components/Content';
// import Otp from './components/Otp';
import Termscondition from './components/Termscondition';
// import Dashboard from './components/Dashboard';
// import Error from './components/Error';
import Wallet from './components/Wallet';
import Profile from './pages/Profile/Profile';
import Completekyc from './pages/complete-kyc/Completekyc';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout><Content /></Layout>} />
        <Route path='/wallet' element={<Layout><Wallet/></Layout>} />
        <Route path='/profile' element={<Layout><Profile/></Layout>} />
        <Route path='/complete-kyc' element={<Layout><Completekyc/></Layout>} />

        
        
        <Route path='/login' element={<Login />} />
        {/* <Route path='/dash' element={<Dashboard />} /> */}
        {/* <Route path='/otp' element={<Otp />} /> */}
        <Route path='/term-condition' element={<Termscondition />} />
        
      </Routes>

    </>
  );
}

export default App;
