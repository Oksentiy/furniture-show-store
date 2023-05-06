import {useEffect, useRef, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import { AllPopup } from "components/LogRegModal/AllPopup";
import { BasketContainer } from "components/Basket/BasketContainer/BasketContainer";
import { LogInAndBasket } from "components/Basket/LogInAndBasket";

import icon from '../img/shopping-basket-icon.png'
import navPhoto from '../img/nav_photo.png'
import './navbar.scss'

export const Navbar = () => {
  // const [showBasket,setShowBasket] = useState(false);
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

  const navigate = useNavigate();

  function handleClick() {
    window.location.reload();
    window.location.assign('/products');
  }

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar__burger-menu" onClick={toggleBurgerMenu} >
        <div className="navbar__burger-menu__line"/>
        <div className="navbar__burger-menu__line"/>
        <div className="navbar__burger-menu__line"/>
      </div>
      <div className={`navbar__menu ${isBurgerMenuOpen ? 'open' : ''}`} >
        <div className="navbar-wrapper">
          <ul className="navbar__menu__links">
            <li className="navbar__menu__title">
              <h3>Меню</h3>
            </li>
            <li><NavLink to="/">головна</NavLink></li>
            <li><NavLink to="/contacts">контакти</NavLink></li>
            <li><NavLink to='/personal-accaunt'>Особистий кабінет</NavLink></li>
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
          <NavLink to ='/products?page=1' onClick={handleClick}>Каталог</NavLink>
        </div>
        <div className="logo">
          <NavLink to='/'>
            <h3> SHYFON'YER </h3>
          </NavLink>

        </div>
        {/* <div className='auth-and-basket-wrapper'>
          
            <AllPopup />
          
          <div className="shopping-basket">
            
              <img  onClick={()=>setShowBasket(true)} src={icon} alt="shopping basket "/>
            
          </div>
          <BasketContainer active={showBasket} setActive={setShowBasket} />
        </div> */}
        <LogInAndBasket />
      </div>
    </nav>
  );
}