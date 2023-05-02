import {ChangeEvent, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {Dispatch} from 'redux';

import {setQueryParams} from "components/pages/catalogPage/model/slice/queryParamsSlice";
import {fetchProducts} from "../model/services/getProductDataFromApi";
// import {store} from "store/store";

import '../styles/sidebar.scss'

const COMPANIES = ['ikea', 'jysk', 'kolss', 'blum']
const PRICES = [
  {priceInclude: '0', value: '0, 1000', outputPrice: 'до 1000'},
  {priceInclude: '1000', value: '1000, 2000', outputPrice: 'від 1001 до 2000'},
  {priceInclude: '2000', value: '2000, 3000', outputPrice: 'від 2001 до 3000'},
  {priceInclude: '3000', value: '3000, 4000', outputPrice: 'від 3001 до 4000'},
  {priceInclude: '4000', value: '4000, 10000', outputPrice: 'від 4000 і більше'}
]

export const Filters = () => {
  const dispatch: Dispatch = useDispatch()
  const navigate = useNavigate()

  const [selectedCompany, setSelectedCompany] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<string[]>([]);


  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, group: string) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    let selectedCompanies: string[] = [...selectedCompany];
    let lessResult: string[] = [...minPrice];
    let moreResult: string[] = [...maxPrice];

    if (group === 'company') {
      if (isChecked) {
        selectedCompanies = [...selectedCompanies, value];
      } else {
        selectedCompanies = selectedCompanies.filter(item => item !== value);
      }
      setSelectedCompany(selectedCompanies);
    } else {
      const [minimalPrice, maximalPrice] = value.split(',');
      const less = maximalPrice;
      const more = minimalPrice;

      if (minPrice.includes(more)) {
        lessResult = minPrice.filter(item => item !== more);
      } else {
        lessResult = [...minPrice, more];
      }
      if (maxPrice.includes(less)) {
        moreResult = maxPrice.filter(item => item !== less);
      } else {
        moreResult = [...maxPrice, less];
      }
      setMinPrice(lessResult)
      setMaxPrice(moreResult)
    }

    const params = createQueryParam(selectedCompanies, lessResult, moreResult);
    // localStorage.setItem('filterParams', JSON.stringify(params));
    dispatch(setQueryParams(params));
    // @ts-ignore
    dispatch(fetchProducts(params));
  }

  function createQueryParam(selectedCompany: string[], minPrice: string[], maxPrice: string[]): string {
    const companies = selectedCompany?.length > 0 ? `company_name=${selectedCompany.join(',')}` : '';
    const less = minPrice?.length > 0 ? `price_less_r=${minPrice.join(',')}` : '';
    const more = maxPrice?.length > 0 ? `price_more_r=${maxPrice.join(',')}` : '';

    const params = [companies, less, more].filter(Boolean).join('&');
    navigate(`?${params}`)

    return params
  }

  return (
    <div className="filter-sort-container">
      <div className="sm-header-wrapper filter">
        <h4 className='sort-filter-header '>Фільтри</h4>
      </div>
      <h4 className='company-filter-title'>Виробник</h4>
      <div className='sort-filter-btns'>
        {COMPANIES.map((company, index) => (
          <label className="container" key={index}>
            <input
              type="checkbox"
              name={company}
              value={company}
              checked={selectedCompany.includes(`${company}`)}
              onChange={(event => handleCheckboxChange(event, 'company'))}
            />
            {company}
            <span className="checkmark"/>
          </label>
        ))}
      </div>
      <h4>Ціна</h4>
      <div className='sort-filter-btns'>
        {PRICES.map((price, index) => (
          <label className="container" key={index}>
            <input
              type="checkbox"
              value={price.value}
              checked={minPrice.includes(`${price.priceInclude}`)}
              onChange={(event => handleCheckboxChange(event, 'price'))}
            />
            {price.outputPrice}
            <span className="checkmark"/>
          </label>
        ))}
      </div>
    </div>
  )
}