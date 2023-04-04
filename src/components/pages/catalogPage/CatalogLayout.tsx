import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import { ProductCards} from "components/pages";
import {Pagination} from "components/pages/catalogPage/pagination/Pagitation";
import {Sidebar} from "components/pages/catalogPage/sidebar/Sidebar";

import {IPagination} from "components/pages/catalogPage/types/ProductDataSchema";
import {IRootIsLoading, IRootState} from "components/pages/catalogPage/types";
import './styles/catalogLayout.scss'
const defaultValue = {
  current_page: 1,
  per_page: 12,
  total_count: 15,
  total_pages: 2,
}
export const CatalogLayout = () => {
  const data: any = useSelector((data: IRootState) => data.products.items);
  const [paginationData, setPaginationData] = useState<IPagination>(defaultValue)
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = paginationData?.total_pages

  useEffect(() => {
    setPaginationData(data.pagination)
  }, [data])


  return (
    <div className='catalog-layout'>
      <h1 className="header">ВСІ ТОВАРИ</h1>
      <p className="product-counter">{paginationData?.total_count} товарів</p>
      <div className='catalog-grid-container'>
        <div className='grid-item-3'>
          <Sidebar/>
        </div>
        <div className='grid-item-4'>
          <ProductCards/>
        </div>
        <div className='grid-item-5'>
          <Pagination currentPage={currentPage} lastPage={lastPage} maxLength={10} setCurrentPage={setCurrentPage}/>
        </div>
      </div>
    </div>
  )
}