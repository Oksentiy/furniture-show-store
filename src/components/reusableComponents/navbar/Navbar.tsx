import {useState} from "react";
import {Link} from "react-router-dom";
import './navar.scss'
import icon from '../img/shopping-basket-icon.png'

export const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__burger-menu" onClick={toggleBurgerMenu}>
        <div className="navbar__burger-menu__line"/>
        <div className="navbar__burger-menu__line"/>
        <div className="navbar__burger-menu__line"/>
      </div>
      <div className={`navbar__menu ${isBurgerMenuOpen ? 'open' : ''}`}>
        <div className="navbar__menu__title">Меню</div>
        <ul className="navbar__menu__links">
          <li><a href="#">головна</a></li>
          <li><a href="#">контакти</a></li>
          <li><a href="#">особистий кабінет</a></li>
        </ul>
      </div>
      <div className="nav-wrapper">
        <div className="catalog-link">
          <Link to ='/products?page=1'>Каталог</Link>
        </div>
        <div className="logo">
          <h3>SHIFON'YER</h3>
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