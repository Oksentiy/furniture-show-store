import { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {sortData} from "components/pages/catalogPage/sidebar/filterAndSortMethods";
import {setSortedData} from "components/store/productDataSlice";

import {IRootState, AllProductsData} from "../types";

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
    <div className='filter-container-grid'>
      <h4>Сортування</h4>
      <button className="sort_btn" onClick={() => handleSelectChange('rate')}>За рейтингом</button>
      <button className="sort_btn" onClick={() => handleSelectChange('price ascending')}>За зростанням ціни</button>
      <button className="sort_btn" onClick={() => handleSelectChange('price descending')}>За спаданням ціни</button>
      <button className="sort_btn" onClick={() => handleSelectChange('A-Z')}>А - Я</button>
      <button className="sort_btn" onClick={() => handleSelectChange('Z-A')}>Я - А</button>
    </div>
  )
}