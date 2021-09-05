import logo from './../assets/images/logo_img.png';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"
import { FaUser, FaHeart, FaUserCircle } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';

export default function Header() {
  const auth = useAuth();
  const history = useHistory();
  const checkLogin = useSelector((state) => state.isLogined.value);
  const favs = useSelector(state => state.fav.value);
  function handelLogout() {
    auth.logout();
    history.push('/auth/login')
  }

  return (
    <header className="header-page">
      <div className="container header-wrapper flex align-items-center flex-between">
        <div className="header-left flex py-1">
          <img src={logo} className="header-logo" alt="logo"/>
          <nav className="navbar">
            <ul className="menu-list flex">
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/products" activeClassName="active">Products</NavLink></li>
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/new" activeClassName="active">News</NavLink></li>
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/..." activeClassName="active">...</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
            {checkLogin ?
            <ul className="menu-list flex">
              <li className="menu-item flex justify-content-center align-items-center">
                <NavLink to="/account" className="menu-item">
                  <span className="wrap-fav-coutner pr-4">
                    <FaHeart className="icon heart" />
                    {!!favs.length && <span className="count">{favs.length}</span>}
                  </span>
                  <span className="pl-2"><FaUserCircle className="icon user mr-2" />Hi!!!</span>
                </NavLink>
              </li>
              <li><span onClick={() => handelLogout()} className="btn btn-logout">SignOut</span></li>
            </ul>
            : <ul>
                <li className="menu-item flex justify-content-center align-items-center p-0"><NavLink to="/auth/login"><FaUser /></NavLink></li>
              </ul>
            }
        </div>
      </div>
    </header>
  )
}
