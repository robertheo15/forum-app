import React from 'react';
import { BiChat } from 'react-icons/bi';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { GrLogout, GrLogin } from 'react-icons/gr';

// eslint-disable-next-line react/prop-types
const BottomNavigation = ({ user, signOut }) => {
  const navigations = [
    {
      id: 1,
      icon: <BiChat />,
      name: 'Threads',
    },
    {
      id: 2,
      icon: <MdOutlineLeaderboard />,
      name: 'Leaderboards',
    },
  ];

  return (
    <footer>
      <div className="navigation-bottom">
        <nav>
          {
            navigations.map((navigation) => (
              <button type="button" className="navigation-item" key={navigation.id}>
                <div className="navigation-item__icon">{navigation.icon}</div>
                <p className="navigation-item__label">{navigation.name}</p>
              </button>
            ))
          }
          {
            user === null || user === undefined ? (
              <button type="button" className="navigation-item">
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

export default BottomNavigation;
