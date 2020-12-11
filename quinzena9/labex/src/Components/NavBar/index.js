import React from 'react';
import {useHistory} from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/")
  }

  return (
    <div>
    </div>
  );
}

export default NavBar;