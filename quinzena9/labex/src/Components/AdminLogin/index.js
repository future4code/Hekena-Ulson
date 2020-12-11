import React from 'react';
import {useHistory} from 'react-router-dom';
const AdminLogin = () => {
  const history = useHistory();

  const goToManagementPage = () => {
    history.push("/login/management")
  }

  return (
    <div className="App">
      <p>Login</p>
      <button onClick={goToManagementPage}>Entrar</button>

    </div>
  );
}

export default AdminLogin;