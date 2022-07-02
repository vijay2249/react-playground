import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './state/auth-context';

function App() {

  const state = useContext(AuthContext)

  return (
    <React.Fragment >
      <MainHeader />
      <main>
        {!state.isLoggedIn && <Login />}
        {state.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
