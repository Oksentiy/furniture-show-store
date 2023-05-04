import {NavLink} from "react-router-dom";
import {Footer} from "components/reusableComponents/footer";
import {Navbar} from "components/reusableComponents/navbar";
import Blum from 'components/reusableComponents/img/blum.png'
import Ikea from 'components/reusableComponents/img/ikea.png'
import Kolss from 'components/reusableComponents/img/kolss.png'
import Jysk from 'components/reusableComponents/img/jysk.png'
import './outPartners.scss'
import {BackToTop} from "components/reusableComponents/backToTop";


export const OurPartnersLayout = () => {
  return (
    <>
      <Navbar/>
      <div className='partners-layout'>
        <h1>Наші партнери</h1>
        <div className="partners-container">
          <div className="partners-card">
            <div className="img-wrapper">
              <img src={Ikea} alt=""/>
            </div>
            <div className="about-company-wrapper">
              {/*<div className="partners-card">*/}
                <h2>IKEA</h2>
                <div className="text-wrapper">
                  <p>ІКЕА - шведський меблевий гігант, створений в 1943 році, з понад 400 магазинами у світі,
                    що пропонує меблі та предмети декору, для будинку та офісу з доступними цінами.
                  </p>
                  <p>ІКЕА прагне бути екологічно чистою компанією, і зосереджується на сталому виробництві
                    та відновленні ресурсів та випускає журнал і додаток з ідеями для дому,
                    щоб допомогти клієнтам знайти найкращі рішення для їх простору.
                  </p>
                </div>
                <NavLink to='/ikea/2'> ДО ВИРОБНИКА</NavLink>
              {/*</div>*/}
            </div>
          </div>
          <div className="partners-card reverse">
            <div className="img-wrapper">
              <img src={Jysk} alt=""/>
            </div>
            <div className="about-company-wrapper">
              {/*<div className="partners-card ">*/}
                <h2>JYSK</h2>
                <div className="text-wrapper">
                  <p>
                    Jysk - данський меблевий ритейлер, заснований в 1979 році, що має більше
                    3000 магазинів у 51 країні світу. Jysk пропонує широкий вибір меблів, матраців
                    та предметів декору, з доступними цінами та пропозиціями щоденних знижок.
                  </p>
                  <p>
                    Компанія також активно вивчає та використовує інноваційні технології у своєму виробництві,
                    щоб зменшити вплив на навколишнє середовище. Jysk пропонує безкоштовну
                    консультацію від своїх професійних дизайнерів.
                  </p>
                {/*</div>*/}

                <NavLink to='/jysk/3'> ДО ВИРОБНИКА</NavLink>
              </div>
            </div>
          </div>
          <div className="partners-card">
            <div className="img-wrapper">
              <img src={Blum} alt=""/>
            </div>
            <div className="about-company-wrapper">
                <h2>BLUM</h2>
                <div className="text-wrapper">
                  <p>
                    Blum - австрійський виробник меблевої фурнітури, заснований у 1952 році,
                    що спеціалізується на виробництві систем відкривання та закривання меблів.
                    Компанія має представництва в більш ніж 120 країнах світу.
                  </p>
                  <p>
                    Blum використовує інноваційні технології та матеріали у своєму виробництві,
                    щоб забезпечити максимальний комфорт та функціональність меблів і
                    повною мірою задовольнити запити своїх клієнтів.
                  </p>
                <NavLink to='/blum/4'> ДО ВИРОБНИКА</NavLink>
              </div>
            </div>
          </div>
          <div className="partners-card reverse">
            <div className="img-wrapper">
              <img src={Kolss} alt=""/>
            </div>
            <div className="about-company-wrapper">
                <h2>KOLSS</h2>
                <div className="text-wrapper">
                  <p>
                    KOLSS - це меблева компанія, яка базується в Україні. Компанія спеціалізується на виробництві
                    різноманітних меблів для будинку та офісу, таких як дивани, ліжка, столи, шафи та інші.
                  </p>
                  <p>
                    KOLSS активно вивчає нові тенденції в меблевій галузі, і використовує інноваційні
                    технології у своєму виробництві. Компанія також пропонує доставку та збірку
                    меблів для зручності клієнтів, і надає гарантію на свою продукцію.
                  </p>
                <NavLink to='/kolss/5'> ДО ВИРОБНИКА</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToTop/>
      <Footer/>
    </>
  )
}