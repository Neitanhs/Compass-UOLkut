import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ProfilePage from '../pages/Profile';

const RoutesApp : React.FC = () => {
  return (
    <Router>
     <Routes>     
        <Route path="/" element={<LoginPage/>} />
        <Route path="/Register" element={<RegisterPage/>} />
        <Route path="/Profile" element={<ProfilePage/>} />
        <Route path="/*" element={<LoginPage />} />     
     </Routes> 
    </Router>
  );
};

export default RoutesApp;