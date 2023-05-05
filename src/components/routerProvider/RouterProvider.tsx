import {useRoutes, Navigate} from 'react-router-dom'

import { CatalogPage } from "components/pages";
import {SingleProductPage} from "components/pages/singleProductPage/SingleProductPage";
import {AboutUs} from "components/pages/aboutUsPage/AboutUs";
import {ContactsLayout} from "components/pages/contactsPage/ContactsLayout";
import {OurPartnersLayout} from "components/pages/partnersPage/OurPartnersLayout";
import {CompanyLayout} from "components/pages/companyPage/CompanyLayout";
import { AccauntMain } from 'components/PersonalAccaunt/AccauntMain';
import { Checkout } from 'components/Basket/Checkout';
import {HomePage} from "components/pages/homePage/HomePage";
import {PrivacyPolicyPage} from "components/pages/privacyPolicyPage/PrivacyPolicyPage";
import {QuestionPage} from "components/pages/questionPage/QuestionPage";
import ScrollToTop from "components/reusableComponents/scrollToTop/ScrollToTop";

export const RouterProvider = () => {
  const element = useRoutes([
    { path: '/', element: <HomePage/>},
    {path: '/products/', element: <CatalogPage/> },
    {path: '/products/:id/', element: <SingleProductPage/>},
    {path: '/contacts', element: <ContactsLayout/>},
    {path: '/my_profile', element: <h1> Особистий кабінет </h1>},
    {path: '/ikea/2', element: <CompanyLayout />},
    {path: '/jysk/3', element: <CompanyLayout />},
    {path: '/blum/4', element: <CompanyLayout />},
    {path: '/kolss/5', element: <CompanyLayout />},
    {path: '/about_us', element: <AboutUs/>},
    {path: '/questions', element: <QuestionPage/>},
    {path: '/privacy_policy', element: <PrivacyPolicyPage/>},
    {path: '/our_partners', element: <OurPartnersLayout/>},
    {path: '/personal-accaunt/*', element: <AccauntMain/>},
    {path: '/checkout/*', element: <Checkout/>},
    {path: '*', element: <Navigate to="/notfound" replace/>},
  ])

  return (
    <>
      <ScrollToTop/>
      {element}
    </>
  );
}