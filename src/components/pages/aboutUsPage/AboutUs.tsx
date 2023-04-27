import {Navbar} from "components/reusableComponents/navbar";
import {Footer} from "components/reusableComponents/footer";
import {NavLink} from "react-router-dom";
import missionImg from 'components/reusableComponents/img/about_us_kitchen.png'
import mainImg from 'components/reusableComponents/img/about_us_main.png'
import owner from 'components/reusableComponents/img/about_us_owner.png'
import sign from 'components/reusableComponents/img/signe.png'


import './aboutUs.scss'
import {BackToTop} from "components/reusableComponents/backToTop";

export const AboutUs = () => {
  return (
    <>
      <Navbar/>
      <div className="about-us-layout">
        <div className="top-section" style={{background: `url('${mainImg}')`}}>
          <h1>Ми допомагаємо </h1>
          <h1>створювати ідеальні меблі</h1>
        </div>
        <div className="mission-section">
          <div className="mission-description">
            <h3 className="mission-title">
              НАША МІСІЯ
            </h3>
            <div className="mission-text">
              <p>
                У нашому магазині ви знайдете широкий асортимент фасадів для кухонних, вітальних,
                спальних та інших видів меблів. Наша місія полягає в тому, аби використовувати тільки
                найкращі матеріали та технології виробництва, щоб забезпечити якість та довговічність наших продуктів.
              </p>
              <p>
                Ми розуміємо, що ви можете мати різні потреби та вимоги до дизайну та функціональності меблів,
                тому ми пропонуємо індивідуальний підхід до кожного клієнта.
                Ми завжди раді допомогти вам вибрати фасади, які відповідають вашим потребам та бюджету,
                та забезпечити професійну консультацію щодо виробництва та установки.
              </p>
              <p>
                Ми прагнемо забезпечити нашим клієнтам найкращий сервіс та якість продуктів,
                тому ми працюємо лише з перевіреними постачальниками та використовуємо тільки високоякісні матеріали.
              </p>
            </div>
            <NavLink to='/products?page=1'>Переглянути каталог</NavLink>
          </div>
          <div className="mission-img">
            <img src={missionImg} alt="white kitchen example"/>
          </div>
        </div>
      </div>
      <div className="grow-section">
        <h3>ЯК РОЗВИВАВСЯ <br/> SHYFON’YER</h3>
        <div className="timelapse-container">
          <div className="timelapse-item">
            <h3>2014</h3>
            <p>
              У 2014 році стартувала історія SHYFON’YER. Магазин відразу став популярним серед жителів міста
              завдяки якісному обслуговуванню та широкому асортименту меблевих фасадів.
              Ми пропонували фасади для різних видів меблів: вітальні, спальні, офісні та кухонні меблі.
            </p>
          </div>
          <div className="timelapse-item">
            <h3>2018</h3>
            <p>
              У 2018  компанія запустила свій онлайн-магазин, що дозволило зробити її послуги доступними
              для більшої аудиторії. Крім того, магазин почав розширювати
              свій ринок та експортувати свої продукти в інші країни.
            </p>
          </div>
          <div className="timelapse-item">
            <h3>2022</h3>
            <p>
              Компанія SHYFON’YER звернула увагу на персоналізацію послуг та розширення асортименту фасадів
              за індивідуальними замовленнями. Клієнти можуть обирати розмір, колір та інші параметри,
              що дозволяє зробити меблі більш індивідуальними та відповідними їх потребам.
            </p>
          </div>
        </div>
      </div>
      <div className="owner-section">
        {/*<div className="img-wrapper">*/}
          <img src={owner} alt="photo of Oleksandr Kiritchenko"/>
        {/*</div>*/}
        <div className="description-owner">
          <h3 className="owner-title">
            ВІД МАЛЕНЬНОЇ МРІЇ ДО <br/>УСПІШНОЇ РЕАЛІЗАЦІЇ
          </h3>
          <div className="owner-about">
            <div>
              <p className='owner-idea'>
                Ця ідея народилася в мені багато років тому, коли я зрозумів, що на ринку не вистачає якісних та
                доступних фасадів для меблів. нині ж я маю велику, а головне КОНКУРЕНТОСПРОМОЖНу КОМПАНІю,
                про ЯКУ ЗНАЮТЬ У КОЖНОМУ МІСТІ НАШОЇ КРАЇНИ.
              </p>
            </div>
            <div>
              <p>
                Я пишаюся тим, що моя ідея перетворилася в успішний бізнес, що продовжує розвиватися.
                Я дякую всім нашим клієнтам за довіру та підтримку, та всьому персоналу
                за його наполегливу роботу та професіоналізм.
              </p>
              <p>З повагою засновник  SHYFON’YER Олександр Кириченко</p>
              <img src={sign} alt="owner sign"/>
            </div>
          </div>
        </div>
      </div>
      <BackToTop/>
      <Footer/>
    </>
  )
}