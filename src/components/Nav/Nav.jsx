import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import classes from './Nav.module.scss';

const Nav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <nav className={classes.navbar}>
      <ul className={`${classes.navbar__list} ${isMenuActive ? classes.active : ''}`}>
        <li className={classes.navbar__item}>
          <Link className={classes.navbar__link} to="/" onClick={toggleMenuHandler}>
            Главная
          </Link>
        </li>
        <li className={classes.navbar__item}>
          <Link className={classes.navbar__link} to="/about" onClick={toggleMenuHandler}>
            О форме
          </Link>
        </li>
        <li className={classes.navbar__item}>
          <Link className={classes.navbar__link} to="/contact" onClick={toggleMenuHandler}>
            Контакты
          </Link>
        </li>
        <li className={classes.navbar__item}>
          <Link className={classes.login} to="/login" onClick={toggleMenuHandler}>
            Войти
          </Link>
        </li>
      </ul>
      <button className={classes.navbar__menu} onClick={toggleMenuHandler}>
        <MenuIcon className={classes.navbar__icon} />
      </button>
    </nav>
  );
};

export default Nav;
