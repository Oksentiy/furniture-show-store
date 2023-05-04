import {Navbar} from "components/reusableComponents/navbar";
import {Footer} from "components/reusableComponents/footer";

import './questionPage.scss'

export const QuestionPage = () => {

  return(
    <>
      <Navbar/>
      <div className="privacy-policy-layout">
        <div className="title">ЧАСТІ ЗАПИТАННЯ</div>
        <div className="policy-information">
          <div className="policy-wrapper">
            <h4>Які матеріали використовуються для виготовлення меблевих фасадів?</h4>
            <p>
              Меблеві фасади можуть бути виготовлені з різних матеріалів, таких як дерево, ДСП, МДФ, скло,
              пластик та інші. Кожен матеріал має свої переваги та недоліки, і ви можете вибрати той,
              який найбільше підходить вашим потребам та бюджету.
            </p>
          </div>
          <div className="policy-wrapper">
            <h4>Які розміри меблевих фасадів доступні в вашому магазині?</h4>
            <p>
              Наш магазин пропонує широкий вибір розмірів меблевих фасадів, які можуть відповідати різним потребам
              клієнтів. Проте, ви можете замовити меблеві фасади нестандартних розмірів на замовлення.
            </p>
          </div>
          <div className="policy-wrapper">
            <h4>Які кольори доступні для меблевих фасадів?</h4>
            <p>
              У нашому магазині є багато кольорів, з яких ви можете вибрати. Ми пропонуємо яскраві та насичені
              кольори, а також більш традиційні варіанти, такі як білий, чорний та коричневий.
            </p>
          </div>
          <div className="policy-wrapper">
            <h4>Які види меблевих фасадів ви маєте в наявності? </h4>
            <p>
              У нашому магазині є великий вибір меблевих фасадів, включаючи прості фасади без ручок,
              фасади з ручками, висувні фасади, а також фасади з склом або дзеркалом.
            </p>
          </div>
          <div className="policy-wrapper">
            <h4>Чи можу я замовити на замовлення меблеві фасади зі своїм дизайном?</h4>
            <p>
              Так, ми можемо виготовити меблеві фасади зі своїм дизайном на замовлення.
              Просто надішліть нам свій дизайн або зустріньтесь з нашим дизайнером,
              щоб обговорити деталі та виготовити замовлення.
            </p>
          </div>
          <div className="policy-wrapper">
            <h4>Як доглядати за меблевими фасадами?</h4>
            <p>
              Догляд за меблевими фасадами залежить від їх матеріалу. Для натурального дерева можна
              використовувати спеціальні засоби для дерева, тоді як скляні фасади можна просто протирати вологою
              ганчіркою. Рекомендується докладати зусиль для збереження меблевих фасадів в чистоті та відповідному стані.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}