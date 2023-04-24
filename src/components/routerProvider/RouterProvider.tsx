import {useRoutes, Navigate} from 'react-router-dom'

import { CatalogPage } from "components/pages";
import {SingleProductPage} from "components/pages/singleProductPage/SingleProductPage";

export const RouterProvider = () => {
  const element = useRoutes([
    { path: '/', element: <h1>Home Page</h1>},
    {path: '/products/', element: <CatalogPage/> },
    {path: '/products/:id/', element: <SingleProductPage/>},
    {path: '/contacts', element: <h1> Контакти </h1>},
    {path: '/my_profile', element: <h1> Особистий кабінет </h1>},
    {path: '/ikea', element: <h1> IKEA </h1>},
    {path: '/jysk', element: <h1> JYSK </h1>},
    {path: '/blum', element: <h1> BLUM </h1>},
    {path: '/kolss', element: <h1> KOLSS  </h1>},
    {path: '/about_us', element: <h1> Про нас </h1>},
    {path: '/questions', element: <h1> F.A.Q. </h1>},
    {path: '/privacy_policy', element: <h1> Політика конфіденційності </h1>},
    {path: '*', element: <Navigate to="/notfound" replace/>}
  ])

  return (
    <>
      {element}
    </>
  );
}


