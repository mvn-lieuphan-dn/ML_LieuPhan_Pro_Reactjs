import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { toggleLogin } from '../store/statusLogin';

const useAuth = () => {
  const history = useHistory();
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [isLogined, setIsLogined] = useState(!!user);
  const dispatch = useDispatch();

  const login = (email, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify(email));
        setUser({email});
        history.push('/account');
        res({email});
        dispatch(toggleLogin(true));
      }, 1000);
    });
  }

  const logout = () => {
    localStorage.removeItem('user');
    setIsLogined(false);
    dispatch(toggleLogin(false));
    history.push('/auth/login');
  }

  return { isLogined, login, logout };
}
export default useAuth;
