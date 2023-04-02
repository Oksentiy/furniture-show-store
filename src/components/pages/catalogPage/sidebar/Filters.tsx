import {ChangeEvent, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import { Dispatch } from 'redux';
import {store} from "components/store/store";
import {setQueryParams} from "components/store/queryParamsSlice";
import {fetchProducts} from "components/store";

export const Filters = () => {
  const [selectedCompany, setSelectedCompany] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);
  const navigate = useNavigate();
  const dispatch:Dispatch = useDispatch()

  // const currentState = store.getState();
  // const params = currentState.queryParams.queryParams;

  const handleSelectCompany = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    let result: string[];
    if (isChecked) {
      result = [...selectedCompany, value];
    } else {
      result = selectedCompany.filter(item => item !== value);
    }
    setSelectedCompany(result);
    createQueryParamString(result);
    const params = createQueryParamString(result);
    navigate(`?${params}`)
    dispatch(setQueryParams(params))
    // @ts-ignore
    dispatch(fetchProducts(params)); // передаємо ідентифікатор користувача як аргумент
  }

  const handleSelectPrice = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedPrice.includes(value)) {
      setSelectedPrice(selectedPrice.filter(item => item !== value));
    } else {
      setSelectedPrice([...selectedPrice, value]);
    }
  }
  console.log(selectedPrice)
  function createQueryParamString(selectedCompany: string[]): string {
    if (selectedCompany.length === 0) {
      return '';
    }
    const companies = selectedCompany.map(company => `${company}`).join(',');
    return `company_name=${companies}`;
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
            onChange={handleSelectCompany} />
          Ikea
        </label>
        <label>
          <input
            type="checkbox"
            value="jysk"
            checked={selectedCompany.includes('jysk')}
            onChange={handleSelectCompany} />
          Jysk
        </label>
        <label>
          <input
            type="checkbox"
            value="blum"
            checked={selectedCompany.includes('blum')}
            onChange={handleSelectCompany} />
          Blum
        </label>
        <label>
          <input
            type="checkbox"
            value="kolls"
            checked={selectedCompany.includes('kolls')}
            onChange={handleSelectCompany} />
          Kolls
        </label>
      </div>
      <h4>Ціна</h4>
      <div>
        <label>
          <input
            type="checkbox"
            value="price_more=1000&price_less=2000"
            checked={selectedPrice.includes('price_more=1000&price_less=2000')}
            onChange={handleSelectPrice} />
          1000-1500
        </label>
        <label>
          <input
            type="checkbox"
            value="price_more=2000&price_less=3000"
            checked={selectedPrice.includes('price_more=2000&price_less=3000')}
            onChange={handleSelectPrice} />
          1500-2000
        </label>
        <label>
          <input
            type="checkbox"
            value="price_more=3000&price_less=4000"
            checked={selectedPrice.includes('price_more=3000&price_less=4000')}
            onChange={handleSelectPrice} />
          2000-2500
        </label>
        <label>
          <input
            type="checkbox"
            value="price_more=5000"
            checked={selectedPrice.includes('price_more=5000')}
            onChange={handleSelectPrice} />
          2500-3000
        </label>
      </div>
    </div>
  )
}