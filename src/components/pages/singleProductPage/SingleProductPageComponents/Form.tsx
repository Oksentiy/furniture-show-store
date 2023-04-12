import {useForm, SubmitHandler} from 'react-hook-form';

import {MyComponentProps, FormData} from "components/pages";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {calculatePrice} from "components/pages/singleProductPage/SingleProductPageComponents/methods/calcPrice";
import '../styles/form.scss'

export const Form = ({colors, thickness, price}: MyComponentProps) => {
  const countRef = useRef<HTMLParagraphElement>(null);
  const [finalPrice, setFinalPrice] = useState<number>()
  const [dataForPrice, setDataForPrice] = useState({
    count: 1,
    height: 0,
    width: 0,
    price,
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
    setValue("count", String(dataForPrice.count) )
  }, [dataForPrice.count])

  useEffect(() => {
    setTimeout(() => {
      const price = calculatePrice(dataForPrice.price ,dataForPrice.height, dataForPrice.width, dataForPrice.count)
      setFinalPrice(price)
    },1500)
  }, [dataForPrice])

  console.log(finalPrice)

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
    const { name, value } = event.target;
    setTimeout(() => {
      setDataForPrice((prevState) => ({
        ...prevState,
        [name]: Number(value)
      }));
    }, 1500)
  };


  const onSubmit: SubmitHandler<FormData> = (data) => {
    reset();
    setDataForPrice((prevProducts) => ({
      ...prevProducts,
      count: 1,
      height: 0,
      width: 0
    }));
  };

  return (
    <form className="form-container" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <>
        <legend>Колір плівки</legend>
        <div className="radio-input">
          {colors.map((color, index) =>
            <div className="label-wrapper" key={index}>
              <label style={{backgroundColor: `${color.hex}`}}>
                <input
                  type="radio"
                  id={color.name}
                  name="value-radio"
                  value={color.hex}
                  {...register("color", {required: true,})}/>
                <span/>
              </label>
            </div>
          )}
          <span className="selection"/>
        </div>
        {errors.color && <small style={{color: "red", fontSize: "12px"}}>Оберіть колір плівки</small>}
        <legend>Товщина фасаду:</legend>
        <div className="radio-input">
          {thickness.map((value, index) =>
            <label key={index} className="radio-thickness">
              <input
                type="radio"
                name="thickness"
                value={value}
                {...register("thickness", {required: true})}
              />{value} мм
            </label>
          )}
        </div>
        {errors.thickness && <small style={{color: "red", fontSize: "12px"}}>Оберіть товщину фасаду</small>}
        <div className="input-wrapper">
          <div className="input-group">
            <div className='input-info'>
              <legend>Висота фасаду (мм)</legend>
              <label>
                <input
                  type="text"
                  name="height"
                  onInput={handleSetDataForPriceCalc}
                  {...register(`height`, {required: true, pattern: /^\d+$/, min: 500})}
                />
              </label>
              {errors.height && (
                <small style={{color: "red", fontSize: "12px"}}>
                  Мінімальна висота 500
                </small>
              )}
              {errors.width && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
            </div>
            <div className='input-info'>
              <legend>Ширина фасаду (мм)</legend>
              <label>
                <input
                  type="text"
                  name="width"
                  onInput={handleSetDataForPriceCalc}
                  {...register(`width`, {required: true, pattern: /^\d+$/, min: 500})}
                />
              </label>
              {errors.width && (
                <small style={{color: "red", fontSize: "12px"}}>
                  Мінімальна ширина 500
                </small>
              )}
              {errors.height && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
            </div>
            <div className='counter-container'>
              <button type='button' className="counter-btn" onClick={handleDecrement}>-</button>
              <p ref={countRef}>{dataForPrice.count}</p>
              <input
                type="hidden"
                name="count"
                {...register("count")}
              />
              <button type='button' className="counter-btn" onClick={handleIncrement}>+</button>
              {errors.height && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
              {errors.width && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
              {errors.count && <small style={{color: "red", fontSize: "12px"}}>Мінімум 1</small>}
            </div>
          </div>
        </div>
        <p className="final-price">{finalPrice ? finalPrice : "0"} грн</p>
        <button type="submit">Додати в кошик</button>
      </>
    </form>
  )
}