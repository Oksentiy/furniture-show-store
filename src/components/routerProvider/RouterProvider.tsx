import {useRoutes, Navigate} from 'react-router-dom'

import { CatalogLayout, ProductCard } from "components/pages";

export const RouterProvider = () => {
  const element = useRoutes([
    { path: '/', element: <h1>Home Page</h1>},
    {path: '/products/', element: <CatalogLayout/> },
    {path: '/products/:id/', element: <ProductCard/>},
    {path: 'notfound', element: <h1> Not Found </h1>},
    {path: '*', element: <Navigate to="/notfound" replace/>}
  ])

  return (
    <>
      {element}
    </>
  );
}


