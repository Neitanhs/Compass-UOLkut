import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderLogin from './headerLogin';
import HeaderProfile from './headerProfile';

const Header: React.FC = () => {
  const location = useLocation();

  const isProfilePath = location.pathname === '/profile';
  const isEditProfilePath = location.pathname === '/EditProfile';

  return (
    <header>
      {isProfilePath || isEditProfilePath ? <HeaderProfile /> : <HeaderLogin />}
    </header>
  );
};

export default Header;