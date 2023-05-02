import {NavLink} from "react-router-dom";
import logo from '../img/SHYFON’YER.png'

import './footer.scss'

export const Footer = () => {

  return (
    <>
      <div className="footer-container">
        <div className="footer-nav">
          <ul className="nav-container">
            <li className="nav-title"><h3>Меню</h3></li>
            <li className="nav-links">
              <NavLink to='/'>Головна</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to='/products'>Каталог</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to='/contacts'>Контакти</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to='/my_profile'>Особистий кабінет</NavLink>
            </li>
          </ul>
          <ul className="nav-container">
            <li className="nav-title"><h3>Партнери</h3></li>
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
          <ul className="nav-container">
            <li className="nav-title"><h3>Клієнтам</h3></li>
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
          <ul className="nav-container">
            <li className="nav-title">
              <h3>Контактні дані</h3>
            </li>
            <li className="nav-links">
              +380 (94) 448 84 56
            </li>
            <li className="nav-links">
              shyfonyersales@info.com
            </li>
            <li className="nav-links">
              місто Черкаси, вул. П. Сагайдачного 150/2, 18005
            </li>
          </ul>
        </div>
        <div className="logo-section">
          <img src={logo} alt="logo"/>
        </div>
        <div className="privacy-info">
          <p>shifonyer | 2023</p>
          <p>design & dev: geekhub interns</p>
        </div>
      </div>
    </>
  )
}