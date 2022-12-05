import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/login/LoginInput';
import { asyncSetAuthUser } from '../states/auth/action';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };
  return (
    <section className="login-page">
      <h2>Login</h2>
      <LoginInput login={onLogin} />
      <p className="register-info">
        Belum punya akun?&nbsp;
        <Link to="/register">Daftar di sini.</Link>
      </p>
    </section>
  );
};

export default LoginPage;
