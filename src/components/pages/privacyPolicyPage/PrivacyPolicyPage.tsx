import {Navbar} from "components/reusableComponents/navbar";
import {Footer} from "components/reusableComponents/footer";

import './privacyPolicy.scss'
import {BackToTop} from "components/reusableComponents/backToTop";

export const PrivacyPolicyPage = () => {

  return(
    <>
      <Navbar/>
      <div className="privacy-policy-layout">
        <div className="title">ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</div>
        <div className="policy-information">
          <div className="policy-wrapper">
            <p>
              Шановний відвідувачу, цей розділ політики конфіденційності нашого сайту описує,
              як ми збираємо, використовуємо та захищаємо вашу особисту інформацію. Ми розуміємо,
              що ваша приватність є важливою, тому зобов'язуємось дотримуватися вимог Закону про захист
              персональних даних та інших відповідних нормативно-правових актів.
            </p>
          </div>
          <div className="policy-wrapper">
            <h4>КОНТАКТНА ІНФОРМАЦІЯ</h4>
            <p>
              Якщо у вас виникли питання або пропозиції з приводу цього розділу політики конфіденційності,
              будь ласка, зв'яжіться з нами за допомогою контактної інформації на нашому сайті.
            </p>
          </div>
          <div className="policy-wrapper">
            <h4>ЗБІР ІНФОРМАЦІЇ</h4>
            <p>
              Ми збираємо різні типи інформації від відвідувачів нашого сайту, включаючи інформацію,
              яку ви надаєте нам при заповненні форм зворотного зв'язку та замовлень. Ми також можемо
              автоматично отримувати деяку інформацію, таку як ваш IP-адрес, тип браузера, мову та час доступу до сайту.
            </p>
          </div>
          <div className="policy-wrapper">
            <h4>ВИКОРИСТАННЯ ІНФОРМАЦІЇ</h4>
            <p>
              Ми використовуємо зібрану інформацію, щоб забезпечити якісне обслуговув ання наших клієнтів та
              покращувати функціональність нашого сайту. Ми можемо   використовувати вашу інформацію для надсилання
              вам актуальних новин та пропозицій, якщо ви надали нам згоду на це.
            </p>
          </div>
          <div className="policy-wrapper">
            <h4>РОЗКРИТТЯ ІНФОРМАЦІЇ ТРЕТІМ ОСОБАМ </h4>
            <p>
              Ми не передаємо вашу особисту інформацію третім особам, крім випадків, коли це необхідно для надання
              послуг та виконання зобов'язань перед вами. Ми можемо розкривати вашу інформацію,
              якщо це вимагається законом, регулюючими органами або захистом наших прав.
            </p>
          </div>
          <div className="policy-wrapper">
            <h4>КОНФІДЕНЦІЙНІСТЬ ДАНИХ</h4>
            <p>
              Ми застосовуємо відповідні технічні та організаційні заходи для захисту вашої особистої інформації
              від несанкціонованого доступу, втрати або зловживання. Ми зберігаємо вашу інформацію на
              захищених серверах та застосовуємо шифрування даних для забезпечення її безпеки.
            </p>
          </div>
          <div className="policy-wrapper">
            <h4>КОРИСТУВАННЯ ФАЙЛАМИ “COOKIE”</h4>
            <p>
              Ми можемо використовувати файли cookie для поліпшення функціональності нашого сайту та забезпечення
              більш зручного користування. Файли cookie дозволяють зберігати ваші налаштування
              та входити на сайт без повторного введення даних.
            </p>
          </div>
          <div className="policy-wrapper">
            <h4>ЗМІНА ПОЛІТИКИ КОНФІДЕНЦІЙНОСТІ</h4>
            <p>
              Ми можемо періодично змінювати цей розділ політики конфіденційності. У разі внесення змін ми оновимо
              дату знизу цього тексту. Ми рекомендуємо вам регулярно переглядати цей розділ, щоб бути в курсі змін.
            </p>
          </div>
          <div>
            <p>Дата оновлення: 3 квітня 2023 року</p>
          </div>
        </div>
      </div>
      <BackToTop/>
      <Footer/>
    </>
  )
}