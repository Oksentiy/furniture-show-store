import {Company} from "components/pages/companyPage/types/companySchema";

export const ContactsComponent = (companyData:Company) => {

  return (

    <div className="contacts-layout">
      <div className="map-container">
        <img src={companyData.photo_company_url} alt="" className="map"/>
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
            <p>{companyData.schedule}</p>
          </div>
          <div>
            <p>ТЕЛЕФОН ОФІСУ</p>
            <p>{companyData.telephone}</p>
          </div>
          <div>
            <p>ЕЛЕКТРОННА ПОШТА</p>
            <p>{companyData.email_publice}</p>
          </div>
          <div>
            <p>АДРЕСА</p>
            <p>{companyData.address}</p>
          </div>
        </div>
      </div>
    </div>

  )
}