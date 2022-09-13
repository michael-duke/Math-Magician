import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/app-logo.jpg';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/Math-Magician/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Math-Magician/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Math-Magician/quote',
      text: 'Quotes',
    },
  ];

  const activeClassName = 'activeLink';
  return (
    <nav className="flex flex-wrap gap-8 justify-between items-center mx-7 mt-3 sm:mx-0 sm:flex-col font-stange">
      <div className="flex items-center gap-4">
        <img
          className="w-24 h-24 object-cover object-bottom rounded-lg"
          src={logo}
          alt="Math-logo"
        />
        <h2 className="text-6xl font-semibold text-blue-500/80">
          Math Magician
        </h2>
      </div>
      <ul className="flex sl:flex-col sm:gap-8">
        {links.map((link) => (
          <li
            className="px-8 text-2xl hover:text-magic-blue/90 border-white border-r-2 last:border-0"
            key={link.id}
          >
            <NavLink
              exact="true"
              to={link.path}
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
