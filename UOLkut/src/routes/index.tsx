import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Fragment } from 'react';
import Header from '../components/Header/header';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ProfilePage from '../pages/Profile';
import RecoverPWDPage from '../pages/RecoverPWD';
import NewPWDPage from '../pages/NewPWD';
import Footer from '../components/Footer/footer';

const RoutesApp : React.FC = () => {
  return (
  <Router>
    <Fragment>
      <Header/>    
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/Recover" element={<RecoverPWDPage/>} />
        <Route path="/NewPWD" element={<NewPWDPage/>} />
        <Route path="/Register" element={<RegisterPage/>} />
        <Route path="/Profile" element={<ProfilePage/>} />
        <Route path="/*" element={<LoginPage />} />     
     </Routes> 
     <Footer/>
     </Fragment>
    </Router>
  );
};

export default RoutesApp;