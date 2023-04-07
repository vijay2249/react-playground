import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/auth-slice';

const Header = () => {
  const dispath = useDispatch()
  const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)
  const logout = () =>{ dispath(authActions.logout())}
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          {isAuthenticated ?<li> <button onClick={logout}>Logout</button></li> : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;