import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuItems } from '../assets';

const Sidebar = () => {
  const menuItemsJSX = React.useMemo(() => {
    return menuItems.map((item) => (
      <li
        key={item.id}
        className='grid grid-cols-[40px auto] items-center my-2.5 relative'
      >
        <NavLink
          to={`${item.link}`}
          style={({ isActive }) => {
            return {
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              color: isActive ? 'white' : '#19a7ce',
              fontSize: '16px',
            };
          }}
        >
          {item.icon}
          <span>{item.title}</span>
        </NavLink>
      </li>
    ));
  }, []);
  return (
    <div className='p-8 w-80 h-full rounded-3xl flex flex-col justify-between gap-8 backdrop-blur-[3.2px] shadow-3xl bg-newBlack max-[890px]:w-[200px] max-[480px]:hidden'>
      <div className='h-24 text-regalblue'>
        <h2 className='text-2xl font-semibold'>Taiyo</h2>
        <p className='font-semibold'>Objective Project</p>
      </div>
      <ul className='flex flex-1 flex-col'>{menuItemsJSX}</ul>
    </div>
  );
};

export default Sidebar;
