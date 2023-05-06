import {Link, NavLink} from "react-router-dom";
import axios from "axios";
import {SingleProductCard} from "components/reusableComponents/singleProductCatd";
import {Footer} from "components/reusableComponents/footer";
import {AllPopup} from "components/LogRegModal/AllPopup";
import {BasketContainer} from "components/Basket/BasketContainer/BasketContainer";
import {useEffect, useRef, useState} from "react";

import './homePage.scss'

import heroImage from "./hero-image-background.png"
import navPhoto from "components/reusableComponents/img/nav_photo.png";
import whiteBasket from "components/reusableComponents/img/home-shopping-bascket.png";
import blackBasket from "components/reusableComponents/img/shopping-basket-icon.png"
import homeImg1 from "components/reusableComponents/img/home-1.png"
import homeImg2 from "components/reusableComponents/img/home-2.png"
import homeImg3 from "components/reusableComponents/img/home-3.png"
import homeImg4 from "components/reusableComponents/img/home-4.png"
import homeImg5 from "components/reusableComponents/img/home-5.png"
import homeImg6 from "components/reusableComponents/img/home-6.png"
import ikeaBg from "components/reusableComponents/img/ikea-bg.png"
import jyskBg from "components/reusableComponents/img/jysk-bg.png"
import blumBg from "components/reusableComponents/img/blum-bg.png"
import jyskLogo from "components/reusableComponents/img/jysk-logo.png"
import ikeaLogo from "components/reusableComponents/img/ikea-logo.png"
import blumLogo from "components/reusableComponents/img/blum-logo.png"
import {BackToTop} from "components/reusableComponents/backToTop";

export const HomePage = () => {
  const [showBasket,setShowBasket] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const navRef = useRef(null);
  const [recommendedProducts, setRecommendedProducts] = useState<any>()

  useEffect(() => {
    axios.get('https://shyfonyer.shop/api/v1/products')
      .then(function (response) {
        setRecommendedProducts(response.data.products)
      })
      .catch(function (error) {
        console.log(error);
      });
  },[])

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsBurgerMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.pageYOffset > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="home-page-layout">
        <div className="top-home-section" style={{background: `url('${heroImage}')`, backgroundSize: '100% 100%'}}>
          <nav className={scrolled || isBurgerMenuOpen ? 'navbar-scrolled navbar' : 'navbar-home-page navbar' } ref={navRef}>
            <div className="navbar__burger-menu" onClick={toggleBurgerMenu}>
              <div className={scrolled || isBurgerMenuOpen ? "navbar__burger-menu__line" : "navbar__burger-menu__line home-burger"}/>
              <div className={scrolled || isBurgerMenuOpen ? "navbar__burger-menu__line" : "navbar__burger-menu__line home-burger"}/>
              <div className={scrolled || isBurgerMenuOpen ? "navbar__burger-menu__line" : "navbar__burger-menu__line home-burger"}/>
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
            <div className={ scrolled || isBurgerMenuOpen ? "nav-wrapper" : "nav-wrapper navbar-menu-home-page"}>
              <div className="catalog-link">
                <Link to ='/products?page=1'>Каталог</Link>
              </div>
              <div className="logo">
                <NavLink to='/'>
                  <h3> SHYFON'YER </h3>
                </NavLink>

              </div>
              <div className='auth-and-basket-wrapper'>
                <AllPopup />
                <div className="shopping-basket">

                  <img  onClick={()=>setShowBasket(true)} src={ scrolled ? blackBasket : whiteBasket} alt="shopping basket "/>

                </div>
                <BasketContainer active={showBasket} setActive={setShowBasket} />
              </div>
            </div>
          </nav>
          <div className="header-text">
            <div className="header-wrapper">
              <h1>Створіть свої ідеальні </h1>
              <h1>меблі з нами</h1>
            </div>
            <NavLink to='/products?page=1'>
              <button className="redirect-to-catalog">до каталогу</button>
            </NavLink>
          </div>
        </div>
        <div className="about-us-section">
          <div className="text-wrapper">
            <img src={homeImg1} alt="kitchen in pastel colors" className="home-img-1"/>
            <img src={homeImg2} alt="kitchen in pastel colors" className="home-img-2"/>
            <img src={homeImg3} alt="kitchen in pastel colors" className="home-img-3"/>
            <img src={homeImg4} alt="kitchen in pastel colors" className="home-img-4"/>
            <img src={homeImg5} alt="kitchen in pastel colors" className="home-img-5"/>
            <img src={homeImg6} alt="kitchen in pastel colors" className="home-img-6"/>
            <h2>ІДЕАЛЬНІ ЛІНІЇ І ВИТОНЧЕНІ ФОРМИ НАШИХ ВИРОБІВ</h2>
            <p>
              SHYFON’YER пропонує клієнтам широкий асортимент виробників фасадів, аби кожен міг обрати
              для себе найкращі варіанти за найвигіднішими цінами. За потреби, ми створимо для вас найсучасніші
              меблі із обраних товарів, та підберемо найкращі рішення, що пасуватимуть вашій оселі.
            </p>
            <NavLink to='/about_us'>
              <button>
                більше про нас
              </button>
            </NavLink>
          </div>
        </div>
        <div className="company-products-section">
          <div className="title-wrapper">
            <h3>ЗАЗИРНІТЬ ДО НАШОГО КАТАЛОГУ</h3>
          </div>
          <div className='recommended-products'>
            {
              recommendedProducts &&
              recommendedProducts?.slice(0,4).map((data:any, index: number) => (
                <SingleProductCard key={index} {...data} />
              ))
            }
          </div>
          <div className="open-catalog">
            <NavLink to='/products?page=1'>Переглянути всі</NavLink>
          </div>
        </div>
        <div className="partners-section">
          <h2>Наші партнери</h2>
          <p className='partner-subtitle'>МИ СПІВПРАЦЮЄМО ЛИШЕ З НАЙКРАЩИМИ ВИРОБНИКАМИ І СПЕЦІАЛІСТАМИ</p>
          <div className="partners-container">
            <div className="partner-card">
              <div className="company-img" style={{background: `url('${ikeaBg}')`}}>
                <img src={ikeaLogo} alt="ikea logo"/>
              </div>
              <h3 className="partner-title">
                IKEA реалізує швидкозбірні меблі й аксесуари для дому
              </h3>
              <p className="partner-description">
                Із 2008 року вона є найбільшим у світі меблевим продавцем. Замість того, щоб продавати
                заздалегідь зібрані меблі, більша частина з них призначена для самозбірки. Компанія стверджує,
                що це допомагає знизити витрати на використання упаковки, не доставляючи повітря. IKEA застосовує
                комплексний підхід до виробництва та дизайну усіх меблів.
              </p>
              <NavLink to='/ikea/2'>До виробника</NavLink>
            </div>
            <div className="partner-card">
              <div className="company-img" style={{background: `url('${jyskBg}')`}}>
                <img src={jyskLogo} alt="ikea logo"/>
              </div>
              <h3 className="partner-title">
                JYSK – міжнародна мережа екологічно чистих  товарів для дому
              </h3>
              <p className="partner-description">
                Компанія JYSK - це міжнародна роздрібна мережа, що пропонує широкий асортимент
                товарів для дому, які відповідають вимогам якості та доступності. Один з головних принципів
                компанії - це привабливі ціни, тому JYSK завжди намагається забезпечити високу якість
                продукції за доступними цінами.
              </p>
              <NavLink to='/jysk/3'>До виробника</NavLink>
            </div>
            <div className="partner-card">
              <div className="company-img" style={{background: `url('${blumBg}')`}}>
                <img src={blumLogo} alt="ikea logo"/>
              </div>
              <h3 className="partner-title">
                BLUM має широкий асортимент якісної фурнітури для меблів              </h3>
              <p className="partner-description">
                Тут можна придбати системи підйому та опускування для дверей, петлі для дверей та вікон,
                системи висування й закривання ящиків та інші компоненти. Компанія відома своєю високою якістю
                продукції та інноваційними рішеннями, які дозволяють меблевим виробникам
                створювати зручні меблі для різних приміщень.
              </p>
              <NavLink to='/blum/4'>До виробника</NavLink>
            </div>
          </div>
          <div className="link-partners-page">
            <NavLink to='/our_partners'>Переглянути всі</NavLink>
          </div>
        </div>
      </div>
      <BackToTop/>
      <Footer/>
    </>
  )
}