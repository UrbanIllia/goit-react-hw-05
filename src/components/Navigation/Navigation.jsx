import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.navBar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? css.navLinkActive : css.navLink
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? css.navLinkActive : css.navLink
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
