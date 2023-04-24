import {ChangeEvent, useEffect, useRef, useState} from "react";
import {useForm, SubmitHandler} from 'react-hook-form';
import {useSelector, useDispatch} from "react-redux";

import {Price} from "../types";
import {FormData, ProductData, ProductRootState, fetchProduct} from "components/pages";
import {calculatePrice} from "components/pages/singleProductPage/SingleProductPageComponents/methods/calcPrice";

import '../styles/form.scss'
import {useParams} from "react-router-dom";

type Props = {
  setPrice: (data: number) => void,
  priceForThickness: number
}

export const Form = ({setPrice, priceForThickness}: Props) => {
  const productData: ProductData = useSelector((data: ProductRootState) => data.singleProduct.item);
  const countRef = useRef<HTMLParagraphElement>(null);
  const dispatch = useDispatch()
  const params = useParams()
  const {id} = params

  const [finalPrice, setFinalPrice] = useState<number>()
  const [currentColor, setCurrentColor] = useState<string>()
  const [dataForPrice, setDataForPrice] = useState({
    count: 1,
    height: 0,
    width: 0,
  })

  const {register, handleSubmit, reset, formState: {errors}, setValue} = useForm<FormData>({
    defaultValues: {
      color: '',
      thickness: '',
      width: '',
      height: '',
      count: '',
    },
  });

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProduct(id))
  }, [])

  useEffect(() => {
    setValue("count", String(dataForPrice.count))
  }, [dataForPrice.count])

  useEffect(() => {
    const price = calculatePrice(
      priceForThickness !== undefined && !Number.isNaN(priceForThickness) ?
        priceForThickness :
        +productData?.prices[1].price, dataForPrice.height, dataForPrice.width, dataForPrice.count)
    setFinalPrice(price)
  }, [dataForPrice, priceForThickness])

  const handleIncrement = () => {
    setDataForPrice((prevState) => ({
      ...prevState,
      count: prevState.count + 1
    }));
  };

  const handleDecrement = () => {
    setDataForPrice((prevState) => ({
      ...prevState,
      count: prevState.count > 1 ? prevState.count - 1 : prevState.count
    }));
  };

  const handleSetDataForPriceCalc = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setDataForPrice((prevState) => ({
      ...prevState,
      [name]: Number(value)
    }));
  };


  const onSubmit: SubmitHandler<FormData> = (data) => {
    reset();
    setDataForPrice((prevProducts) => ({
      ...prevProducts,
      count: 1,
      height: 0,
      width: 0
    }));
    console.log(data)
  };

  return (
    <form className="form-container" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      {productData !== undefined &&
        <>
          <legend className='legend'>Колір плівки: <strong style={{fontWeight: 600}}>{currentColor}</strong></legend>
          <div className="radio-input">
            {productData.colors.map((color, index) =>
              <div className="label-wrapper" key={index}>
                <label style={{backgroundColor: `${color.hex}`}}>
                  <input
                    type="radio"
                    id={color.name}
                    name="value-radio"
                    value={color.hex}
                    onClick={() => setCurrentColor(color.name)}
                    {...register("color", {required: true,})}/>
                  <span/>
                </label>
              </div>
            )}
            <span className="selection"/>
          </div>
          {errors.color && <small style={{color: "red", fontSize: "12px"}}>Оберіть колір плівки</small>}
          <legend className='legend'>Товщина фасаду:</legend>
          <div className="radio-input">
            {productData.prices.map((value, index) =>
              <label key={index} className="radio-thickness">
                <input
                  type="radio"
                  name="thickness"
                  value={value.thickness}
                  defaultChecked
                  onClick={() => setPrice(+value.price)}
                  {...register("thickness", {required: true})}
                />{value.thickness} мм
              </label>
            )}
          </div>
          {errors.thickness && <small style={{color: "red", fontSize: "12px"}}>Оберіть товщину фасаду</small>}
          <div className="input-wrapper">
            <div className="input-group">
              <div className='input-info'>
                <legend className='legend-size'>Висота фасаду (мм)</legend>
                <label>
                  <input
                    type="text"
                    name="height"
                    onInput={handleSetDataForPriceCalc}
                    {...register(`height`, {required: true, pattern: /^\d+$/, min: 300, max: 3000})}
                  />
                </label>
                {errors.height && (
                  <small style={{color: "red", fontSize: "12px"}}>
                    Мінімальна висота 300, максимальна 3000
                  </small>
                )}
                {errors.width && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
              </div>
              <div className='input-info'>
                <legend className='legend-size'>Ширина фасаду (мм)</legend>
                <label>
                  <input
                    type="text"
                    name="width"
                    onInput={handleSetDataForPriceCalc}
                    {...register(`width`, {required: true, pattern: /^\d+$/, min: 200, max: 1500})}
                  />
                </label>
                {errors.width && (
                  <small style={{color: "red", fontSize: "12px"}}>
                    Мінімальна ширина 200, максимальна 1500
                  </small>
                )}
                {errors.height && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
              </div>
              <div className="counter-wrapper " style={{display: 'flex', flexDirection: 'column'}}>
                <legend style={{fontSize: '18px', visibility: 'hidden'}}>hidden text</legend>
                <div className='counter-container'>
                  <button type='button' className="counter-btn" onClick={handleDecrement}>-</button>
                  <p ref={countRef}>{dataForPrice.count}</p>
                  <input
                    type="hidden"
                    name="count"
                    {...register("count")}
                  />
                  <button type='button' className="counter-btn" onClick={handleIncrement}>+</button>
                </div>
                  {errors.height && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
                  {errors.width && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
                  {errors.count && <small style={{color: "red", fontSize: "12px"}}>Мінімум 1</small>}
              </div>
            </div>
          </div>
          <div className='submit-wrapper'>
            <button type="submit">Додати в кошик</button>
            <p className="final-price">{finalPrice ? finalPrice : "0"} грн</p>
          </div>
        </>
      }
    </form>
  )
}