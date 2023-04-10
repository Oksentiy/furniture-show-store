import {useRoutes, Navigate} from 'react-router-dom'

import { CatalogPage } from "components/pages";
import {SingleProductPage} from "components/pages/singleProductPage/SingleProductPage";

export const RouterProvider = () => {
  const element = useRoutes([
    { path: '/', element: <h1>Home Page</h1>},
    {path: '/products/', element: <CatalogPage/> },
    {path: '/products/:id/', element: <SingleProductPage/>},
    {path: 'notfound', element: <h1> Not Found </h1>},
    {path: '*', element: <Navigate to="/notfound" replace/>}
  ])

  return (
    <>
      {element}
    </>
  );
}


