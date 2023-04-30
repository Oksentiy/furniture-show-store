import {useEffect, useRef, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import './navar.scss'
import icon from '../img/shopping-basket-icon.png'
import navPhoto from '../img/nav_photo.png'

export const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsBurgerMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__burger-menu" onClick={toggleBurgerMenu}>
        <div className="navbar__burger-menu__line"/>
        <div className="navbar__burger-menu__line"/>
        <div className="navbar__burger-menu__line"/>
      </div>
      <div className={`navbar__menu ${isBurgerMenuOpen ? 'open' : ''}`} ref={navRef}>
        <div className="navbar-wrapper">
          <ul className="navbar__menu__links">
            <li className="navbar__menu__title">
              <h3>Меню</h3>
            </li>
            <li><NavLink to="/">головна</NavLink></li>
            <li><NavLink to="/contacts">контакти</NavLink></li>
            <li><NavLink to='/my_profile'>Особистий кабінет</NavLink></li>
          </ul>
          <ul className="navbar__menu__links">
            <li className="navbar__menu__title">
              <h3>Партнери</h3>
            </li>
            <li className="nav-links">
              <NavLink to='/ikea/2'>IKEA</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to='/jysk/3'>JYSK</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to='/blum/4'>BLUM</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to='/kolss/5'>KOLSS </NavLink>
            </li>
          </ul>
          <ul className="navbar__menu__links">
            <li className="navbar__menu__title">
              <h3>Клієнтам</h3>
            </li>
            <li className="nav-links">
              <NavLink to='/about_us'>Про нас</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to='/questions'>F.A.Q.</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to='/privacy_policy'>Політика конфіденційності</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-img-container">
          <img src={navPhoto} alt="photo of recommender furniture"/>
          <div className="text-above-img">
            <p>Рекомендований товар</p>
            <h4>"Фрезерування "Бостон"</h4>
          </div>
        </div>
      </div>
      <div className="nav-wrapper">
        <div className="catalog-link">
          <Link to ='/products?page=1'>Каталог</Link>
        </div>
        <div className="logo">
          <h3> SHIFON'YER </h3>
        </div>
        <div className='auth-and-basket-wrapper'>
          <div className="authorize-btn">
            <button>Авторизиція</button>
          </div>
          <div className="shopping-basket">
            <Link to="*">
              <img src={icon} alt="shopping basket "/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}