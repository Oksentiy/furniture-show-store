import {Footer} from "components/reusableComponents/footer";
import {Navbar} from "components/reusableComponents/navbar";
import map from 'components/reusableComponents/img/shifonier_location.png'

import './contactsLayout.scss'

export const ContactsLayout = () => {
  return (
    <>
      <Navbar/>
      <div className="contacts-layout">
        <div className="map-container">
          <img src={map} alt="" className="map"/>
        </div>
        <div className="contact-info-container">
          <h2>Контакти</h2>
          <div className="slogan">
            <p>
              SHYFON’YER пропонує клієнтам широкий асортимент <br/>виробників фасадів, аби кожен міг обрати для себе
            </p>
          </div>
          <div className="company-details">
            <div>
              <p>Графік роботи</p>
              <p>Пн-Пт: 08:00 - 19:00,  Сб-Нд 09:00 - 19:00</p>
            </div>
            <div>
              <p>ТЕЛЕФОН ОФІСУ</p>
              <p>+ 380 (63) 888 65 45</p>
            </div>
            <div>
              <p>ЕЛЕКТРОННА ПОШТА</p>
              <p>infosupport@shyfoner.com</p>
            </div>
            <div>
              <p>АДРЕСА</p>
              <p>вул. Петра Сагайдачного, 25, Черкаси, 18000</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}