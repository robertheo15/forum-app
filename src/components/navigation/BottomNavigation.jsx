import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BiChat } from 'react-icons/bi';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { GrLogout, GrLogin } from 'react-icons/gr';
import { userDTO } from '../../utils/dto';

const BottomNavigation = ({ user, signOut }) => {
  const navigate = useNavigate();

  const onHome = () => {
    navigate('/');
  };

  const onLogin = () => {
    navigate('/login');
  };

  const onLeaderboards = () => {
    navigate('/leaderboards');
  };
  const navigations = [
    {
      id: 1,
      icon: <BiChat />,
      name: 'Threads',
      method: onHome,
    },
    {
      id: 2,
      icon: <MdOutlineLeaderboard />,
      name: 'Leaderboards',
      method: onLeaderboards,
    },
  ];

  return (
    <footer>
      <div className="navigation-bottom">
        <nav>
          {
            navigations.map((navigation) => (
              <button type="button" className="navigation-item" key={navigation.id} onClick={navigation.method}>
                <div className="navigation-item__icon">{navigation.icon}</div>
                <p className="navigation-item__label">{navigation.name}</p>
              </button>
            ))
          }
          {
            user === null || user === undefined ? (
              <button type="button" className="navigation-item" onClick={onLogin}>
                <div className="navigation-item__icon"><GrLogin /></div>
                <p className="navigation-item__label">Login</p>
              </button>
            ) : (
              <button type="button" className="navigation-item" onClick={signOut}>
                <div className="navigation-item__icon"><GrLogout /></div>
                <p className="navigation-item__label">Logout</p>
              </button>
            )
          }
        </nav>
      </div>
    </footer>
  );
};

BottomNavigation.propTypes = {
  user: PropTypes.shape(userDTO),
  signOut: PropTypes.func,
};
export default BottomNavigation;
