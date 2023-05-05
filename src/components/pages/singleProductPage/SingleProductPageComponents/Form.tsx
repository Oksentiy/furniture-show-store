import {ChangeEvent, useEffect, useRef, useState} from "react";
import {useForm, SubmitHandler} from 'react-hook-form';
import {useSelector, useDispatch} from "react-redux";

import {FormData, ProductData, ProductRootState, fetchProduct} from "components/pages";
import {calculatePrice} from "components/pages/singleProductPage/SingleProductPageComponents/methods/calcPrice";

import '../styles/form.scss'
import {useParams} from "react-router-dom";
import {sendOrderData} from "components/pages/singleProductPage/SingleProductPageComponents/methods/postFormData";
import { setCounterBasketElems } from "storeToolkit/counterBasketSlice";
import {PopUpForRegistry} from "components/reusableComponents/PopUpifNotRegistr/PopUpForRegistry";

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

  const USER_TOKEN = localStorage.getItem('token');

  const [openAlertPopup, setOpenAlertPopup] = useState<boolean>(false)
  const [finalPrice, setFinalPrice] = useState<number>()
  const [currentColor, setCurrentColor] = useState<string>()
  const [dataForPrice, setDataForPrice] = useState({
    quantity: 1,
    product_length: 0,
    product_width: 0,
  })

  useEffect(() => {
    if (localStorage.getItem('token')) {

        fetch(`https://shyfonyer.shop/api/v1/cart_items`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setCounterBasketElems(data.length));
                console.log('basket length', data.length);
            });
    }
}, []);


  const {register, handleSubmit, reset, formState: {errors}, setValue} = useForm<FormData>({
    defaultValues: {
      product_color_id: 0,
      product_thickness_id: 0,
      // product_width: '',
      // product_length: '',
      quantity: 0,
    },
  });

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProduct(id))
  }, [])

  useEffect(() => {
    setValue("quantity", dataForPrice.quantity)
  }, [dataForPrice.quantity])

  useEffect(() => {
    const price = calculatePrice(
      priceForThickness !== undefined && !Number.isNaN(priceForThickness) ?
        priceForThickness :
        +productData?.prices[1].price, dataForPrice.product_length, dataForPrice.product_width, dataForPrice.quantity)
    setFinalPrice(price)
  }, [dataForPrice, priceForThickness])

  const handleIncrement = () => {
    setDataForPrice((prevState) => ({
      ...prevState,
      quantity: prevState.quantity + 1
    }));
  };

  const handleDecrement = () => {
    setDataForPrice((prevState) => ({
      ...prevState,
      quantity: prevState.quantity > 1 ? prevState.quantity - 1 : prevState.quantity
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
    /////////////////////////////////////////////////
    if (localStorage.getItem('token')) {

      fetch(`https://shyfonyer.shop/api/v1/cart_items`, {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
      })
          .then((response) => response.json())
          .then((data) => {
              dispatch(setCounterBasketElems(data.length+1))
              console.log('basket length', data.length);
          })
          .catch(error=>console.log(error));
        }
    /////////////////////////////////////////////////
    reset();
    setDataForPrice((prevProducts) => ({
      ...prevProducts,
      quantity: 1,
      product_length: 0,
      product_width: 0
    }));

    const convertedData = {
      card_item:  {
        ...data,
        product_id: Number(id),
        product_length: Number(data.product_length),
        product_width: Number(data.product_width),
        product_color_id: Number(data.product_color_id),
        product_thickness_id: Number(data.product_thickness_id),
      }
    }
    sendOrderData(convertedData, USER_TOKEN)
    // мій код тралі валі
    showAlertPopup()
  };
  // відкривання / закривання попапа, що просить увійти

  function showAlertPopup () {
    if (USER_TOKEN !== null && 'undefined'){
      setOpenAlertPopup(false)
    }else{
      setOpenAlertPopup(true)
    }
  }
  //

  return (
    <>
      <PopUpForRegistry openAlert={openAlertPopup} setOpenAlertPopup={setOpenAlertPopup}/>
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
                      value={Number(index)}
                      onClick={() => setCurrentColor(color.name)}
                      {...register("product_color_id", {required: true,})}/>
                    <span/>
                  </label>
                </div>
              )}
              <span className="selection"/>
            </div>
            {errors.product_color_id && <small style={{color: "red", fontSize: "12px"}}>Оберіть колір плівки</small>}
            <legend className='legend'>Товщина фасаду:</legend>
            <div className="radio-input">
              {productData.prices.map((value, index) =>
                <label key={index} className="radio-thickness">
                  <input
                    type="radio"
                    name="thickness"
                    value={Number(index)}
                    defaultChecked
                    onClick={() => setPrice(+value.price)}
                    {...register("product_thickness_id", {required: true})}
                  />{value.thickness} мм
                </label>
              )}
            </div>
            {errors.product_thickness_id && <small style={{color: "red", fontSize: "12px"}}>Оберіть товщину фасаду</small>}
            <div className="input-wrapper">
              <div className="input-group">
                <div className='input-info'>
                  <legend className='legend-size'>Висота фасаду (мм)</legend>
                  <label>
                    <input
                      type="text"
                      name="height"
                      onInput={handleSetDataForPriceCalc}
                      {...register(`product_length`, {required: true, pattern: /^\d+$/, min: 300, max: 3000})}
                    />
                  </label>
                  {errors.product_length && (
                    <small style={{color: "red", fontSize: "12px"}}>
                      Мінімальна висота 300, максимальна 3000
                    </small>
                  )}
                  {errors.product_width && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
                </div>
                <div className='input-info'>
                  <legend className='legend-size'>Ширина фасаду (мм)</legend>
                  <label>
                    <input
                      type="text"
                      name="width"
                      onInput={handleSetDataForPriceCalc}
                      {...register(`product_width`, {required: true, pattern: /^\d+$/, min: 200, max: 1500})}
                    />
                  </label>
                  {errors.product_width && (
                    <small style={{color: "red", fontSize: "12px"}}>
                      Мінімальна ширина 200, максимальна 1500
                    </small>
                  )}
                  {errors.product_length && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
                </div>
                <div className="counter-wrapper " style={{display: 'flex', flexDirection: 'column'}}>
                  <legend style={{fontSize: '18px', visibility: 'hidden'}}>hidden text</legend>
                  <div className='counter-container'>
                    <button type='button' className="counter-btn" onClick={handleDecrement}>-</button>
                    <p ref={countRef}>{dataForPrice.quantity}</p>
                    <input
                      type="hidden"
                      name="count"
                      {...register("quantity")}
                    />
                    <button type='button' className="counter-btn" onClick={handleIncrement}>+</button>
                  </div>
                    {errors.product_length && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
                    {errors.product_width && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
                    {errors.quantity && <small style={{color: "red", fontSize: "12px"}}>Мінімум 1</small>}
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
    </>
  )
}