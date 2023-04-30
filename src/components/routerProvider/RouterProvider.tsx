import {useRoutes, Navigate} from 'react-router-dom'

import { CatalogPage } from "components/pages";
import {SingleProductPage} from "components/pages/singleProductPage/SingleProductPage";
import {AboutUs} from "components/pages/aboutUsPage/AboutUs";
import {Navbar} from "components/reusableComponents/navbar";
import {ContactsLayout} from "components/pages/contactsPage/ContactsLayout";
import {OurPartnersLayout} from "components/pages/partnersPage/OurPartnersLayout";
import {CompanyLayout} from "components/pages/companyPage/CompanyLayout";

export const RouterProvider = () => {
  const element = useRoutes([
    { path: '/', element: <Navbar/>},
    {path: '/products/', element: <CatalogPage/> },
    {path: '/products/:id/', element: <SingleProductPage/>},
    {path: '/contacts', element: <ContactsLayout/>},
    {path: '/my_profile', element: <h1> Особистий кабінет </h1>},
    {path: '/ikea/2', element: <CompanyLayout />},
    {path: '/jysk/3', element: <CompanyLayout />},
    {path: '/blum/4', element: <CompanyLayout />},
    {path: '/kolss/5', element: <CompanyLayout />},
    {path: '/about_us', element: <AboutUs/>},
    {path: '/questions', element: <h1> F.A.Q. </h1>},
    {path: '/privacy_policy', element: <h1> Політика конфіденційності </h1>},
    {path: '/our_partners', element: <OurPartnersLayout/>},
    {path: '*', element: <Navigate to="/notfound" replace/>}
  ])

  return (
    <>
      {element}
    </>
  );
}


