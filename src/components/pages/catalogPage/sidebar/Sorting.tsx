import { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {sortData} from "components/pages/catalogPage/sidebar/filterAndSortMethods";
import {setSortedData} from "components/pages/catalogPage/model/slice/productDataSlice";

import {IRootState, AllProductsData} from "../types";

import '../styles/sidebar.scss'

export const Sorting = () => {
  // зараз сортування працює, але оскільки дані стора перезаписуються, то сортуваня за замовчуванням не коректне
  const dispatch = useDispatch()

  const data:any = useSelector((data: IRootState) => data.products.items);
  const [sortedProductData, setSortedProductData] = useState<AllProductsData[]>([]);
  const dataForSort: AllProductsData[] = data.products

  const dataFromSorting = {
    pagination: data.pagination,
    products: sortedProductData
  }

  useEffect(() => {
    dispatch(setSortedData(dataFromSorting))
  }, [sortedProductData])

  const handleSelectChange = (sortType: string) => {
    const sortedData = sortData(sortType, dataForSort);
    setSortedProductData(() => sortedData);
  };

  return (
    <div className='filter-sort-container'>
      <div className="sm-header-wrapper">
        <h4 className='sort-filter-header'>Сортування</h4>
      </div>

      <ul className='sort-filter-btns sort'>
        <li className="sort_btn" onClick={() => handleSelectChange('rate')}>Спочатку нові</li>
        <li className="sort_btn" onClick={() => handleSelectChange('price ascending')}>За зростанням ціни</li>
        <li className="sort_btn" onClick={() => handleSelectChange('price descending')}>За спаданням ціни</li>
        <li className="sort_btn" onClick={() => handleSelectChange('A-Z')}>А - Я</li>
        <li className="sort_btn" onClick={() => handleSelectChange('Z-A')}>Я - А</li>
      </ul>
    </div>
  )
}