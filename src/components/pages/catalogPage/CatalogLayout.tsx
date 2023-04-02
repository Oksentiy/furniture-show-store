import {useState} from "react";
import { ProductCards} from "components/pages";
import {Pagination} from "components/pagination/Pagitation";

import './styles/catalogLayout.scss'
import {Sidebar} from "components/pages/catalogPage/sidebar/Sidebar";

export const CatalogLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 5;

  return (
    <div className='catalog-grid-container'>
      <div className='grid-item-1'>
        <Sidebar/>
      </div>
      <div className='grid-item-2'>
        <ProductCards/>
      </div>
      <div className='grid-item-3'>
        <Pagination currentPage={currentPage} lastPage={lastPage} maxLength={10} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  )
}