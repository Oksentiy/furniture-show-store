import {Navbar} from "components/reusableComponents/navbar";
import {BackToTop} from "components/reusableComponents/backToTop";
import {Footer} from "components/reusableComponents/footer";
import youtube from 'components/reusableComponents/img/youTube.png'
import instagram from 'components/reusableComponents/img/instagram.png'

import './CompanyLayout.scss'
import {NavLink, useLocation} from "react-router-dom";
import {getCompany} from "components/pages/companyPage/getCompanyData";
import {useEffect, useState} from "react";
import {Company, CompanyData} from "components/pages/companyPage/types/companySchema";
import {SingleProductCard} from "components/reusableComponents/singleProductCatd";
import {ContactsComponent} from "components/pages/contactsPage/ContactsComponent";

export const CompanyLayout = () => {
  const [companyData, setCompanyData] = useState<CompanyData>()

  const location = useLocation();
  const currentUrl = location.pathname;
  const id = currentUrl.charAt(currentUrl.length - 1)

  useEffect(() => {
    getCompany(id)
    .then((data) => setCompanyData(data) )
  }, [id])

  const contactInfo:Company = companyData?.company

  return (
    <>
      <Navbar/>
      {companyData?.company &&
        <div className='company-layout'>
          <h2>{companyData.company.full_name}</h2>
          <div className="main-info-section">
            <div className='info-group'>
              <h5>КРАЇНА-ВИРОБНИК</h5>
              <p>{companyData.company.manufacturer_company}</p>
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
                <p>{companyData.company.telephone}</p>
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
              <img src={companyData.company.photo_company_url} alt="example company products"/>
            </div>
            <div className="history-wrapper">
              <h3>ІСТОРІЯ БРЕНДУ</h3>
              <div className="history-text">
                <p>
                  {companyData?.company.brand_history}
                </p>
              </div>
            </div>
          </div>
          <div className="company-products-section">
            <div className="title-wrapper">
              <h3>Вироби компанії</h3>
            </div>
            <div className='recommended-products'>
              {
                companyData.product_comapny.slice(0,4).map((data:any, index: number) => (
                  <SingleProductCard key={index} {...data} />
                ))
              }
            </div>
            <div className="open-catalog">
              <NavLink to='/products?page=1'>Переглянути всі</NavLink>
            </div>
          </div>
          <ContactsComponent {...contactInfo}/>
        </div>
      }
      <BackToTop/>
      <Footer/>
    </>
  )
}