import {Navbar} from "components/reusableComponents/navbar";
import {BackToTop} from "components/reusableComponents/backToTop";
import {Footer} from "components/reusableComponents/footer";
import youtube from 'components/reusableComponents/img/youTube.png'
import instagram from 'components/reusableComponents/img/instagram.png'

import './CompanyLayout.scss'
import {NavLink} from "react-router-dom";

export const CompanyLayout = () => {
  return (
    <>
      <Navbar/>
      <div className='company-layout'>
        <h2>IKEA</h2>
        <div className="main-info-section">
          <div className='info-group'>
            <h5>КРАЇНА-ВИРОБНИК</h5>
            <p>Швеція</p>
          </div>
          <div className='info-group'>
            <h5>ОФІС В УКРАЇНІ</h5>
            <p>місто Київ </p>
          </div>
          <div className='info-group'>
            <h5>АДРЕСА</h5>
            <p>вул. Бережанська, 11</p>
          </div>
          <div className='info-group last-contact-info'>
            <div className='socials'>
              <h5>ТЕЛЕФОН</h5>
              <p>+ 380 (63) 545 66 33</p>
            </div>
            <div>
              <a href="#">
                <img src={youtube} alt=""/>
              </a>
              <a href="">
                <img src={instagram} alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="history-section">
          <div className="img-wrapper">
            <img src="" alt=""/>
          </div>
          <div className="history-wrapper">
            <h3>ІСТОРІЯ БРЕНДУ</h3>
            <div className="history-text">
              <p>
                ІКЕА - шведський бренд меблів та товарів для дому, який був заснований в 1943 році під
                керівництвом Інгвара Кампрада. Починаючи з невеликого магазину в Швеції, ІКЕА зростала
                і розширювалася впродовж наступних десятиліть. У 1956 році був розроблений концепт "плоскої упаковки",
                що дозволяє зменшити витрати на транспортування меблів та
                збільшити доступність продукції для більшої аудиторії.
              </p>
              <p>
                У 1960-х роках компанія почала розширюватися за межі Швеції, відкриваючи нові магазини в Норвегії
                та Данії. В 1973 році ІКЕА відкрила перший магазин у США. У 1980-х та 1990-х роках ІКЕА
                продовжувала зростати, розширюючись в Азію, Австралію та різні країни Європи.
              </p>
              <p>
                Сьогодні ІКЕА - це один з найбільших світових продавців меблів та товарів для дому,
                з більш ніж 400 магазинами в більш ніж 50 країнах світу. Бренд відомий своїми сучасними
                та практичними дизайнами, доступною ціновою політикою та зосередженням на створенні
                продукції з урахуванням екологічних та соціальних викликів сьогодення.
              </p>
            </div>
          </div>
        </div>
        <div className="company-products-section">
          <h3>Вироби компанії</h3>
        </div>
      </div>
      <BackToTop/>
      <Footer/>
    </>
  )
}