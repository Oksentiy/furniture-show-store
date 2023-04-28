import { FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {ProductData, ProductRootState} from "../types";
import {fetchProduct} from "components/pages";
import {Form} from "components/pages";

import '../styles/productCard.scss'

export const ProductCard: FC = () => {
  const productData: ProductData = useSelector((data: ProductRootState) => data.singleProduct.item);

  const dispatch = useDispatch()
  const params = useParams()
  const {id} = params
  const startPrice = Number(productData?.prices[1].price)
  const [priceForThickness, setPriceForThickness] = useState<number>( 0)

  function setPrice (data:number) {
    setPriceForThickness(data);
  }

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProduct(id))
    setPriceForThickness(startPrice)
  }, [])

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProduct(id))
  }, [id])

  return (
    <>
      {productData &&
        <div className='card-container-grid'>
          <div className="img-container">
            <img src={productData.photo} alt="image of chosen furniture" className='product-img'/>
          </div>
          <div className="info-container">
            <h4>{productData.name}</h4>
            <div className="add-info-container">
              <p className='additional-info'>Артикул: {productData.article_number}</p>
              <p className="additional-info">Під замовлення</p>
            </div>
            <p className='company-name'>Виробник: {productData.company} </p>
            <div className="description">
              <p>{productData.description}</p>
            </div>
            <div className="price">
              <p>{priceForThickness ? priceForThickness : startPrice } грн м&sup2;</p>
            </div>
            <Form setPrice={setPrice} priceForThickness={priceForThickness}/>
          </div>
        </div>
      }
    </>
  )
}