import {ChangeEvent, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {Dispatch} from 'redux';
import {setQueryParams} from "components/store/queryParamsSlice";
import {fetchProducts} from "components/store";
import {store} from "components/store/store";

export const Filters = () => {
  const dispatch:Dispatch = useDispatch()
  const currentState = store.getState();
  const params = currentState.queryParams.queryParams;
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
    <div className="filter_container">
      <h4>Фільтри</h4>
      <h4>Виробник</h4>
      <div>
        <label>
          <input
            type="checkbox"
            value="ikea"
            checked={selectedCompany.includes('ikea')}
            onChange={(event => handleCheckboxChange(event, 'company'))} />
          Ikea
        </label>
        <label>
          <input
            type="checkbox"
            value="jysk"
            checked={selectedCompany.includes('jysk')}
            onChange={(event => handleCheckboxChange(event, 'company'))} />
          Jysk
        </label>
        <label>
          <input
            type="checkbox"
            value="blum"
            checked={selectedCompany.includes('blum')}
            onChange={(event => handleCheckboxChange(event, 'company'))} />
          Blum
        </label>
        <label>
          <input
            type="checkbox"
            value="kolls"
            checked={selectedCompany.includes('kolls')}
            onChange={(event => handleCheckboxChange(event, 'company'))} />
          Kolls
        </label>
      </div>
      <h4>Ціна</h4>
      <div>
        <label>
          <input
            type="checkbox"
            value="0,1000"
            checked={minPrice.includes('0')}
            onChange={(event => handleCheckboxChange(event, 'price'))} />
          &#8804; 1000
        </label>
        <label>
          <input
            type="checkbox"
            value="1000,2000"
            checked={minPrice.includes('1000')}
            onChange={(event => handleCheckboxChange(event, 'price'))} />
          1000-2000
        </label>
        <label>
          <input
            type="checkbox"
            value="2000,3000"
            checked={minPrice.includes('2000')}
            onChange={(event => handleCheckboxChange(event, 'price'))} />
          2001-3000
        </label>
        <label>
          <input
            type="checkbox"
            value={["3000,4000"]}
            checked={minPrice.includes('3000')}
            onChange={(event => handleCheckboxChange(event, 'price'))} />
          3001-4000
        </label>
        <label>
          <input
            type="checkbox"
            value="4000,100000"
            checked={minPrice.includes('4000')}
            onChange={(event => handleCheckboxChange(event, 'price'))} />
          4000 &#8805;
        </label>
      </div>
    </div>
  )
}