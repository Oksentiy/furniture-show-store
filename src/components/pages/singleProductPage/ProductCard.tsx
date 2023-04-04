import {ChangeEvent, FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {setProductData} from 'components/pages/singleProductPage/model/slice/singleProductDataSlice'

import {ProductData, ProductRootState, IRootIsLoading} from "./types/singleProductSchema";
import {fetchProduct} from "components/pages/singleProductPage/model/services/getSingleProduct";
import {useParams} from "react-router-dom";

export const ProductCard: FC = () => {

  const productData: ProductData = useSelector((data: ProductRootState) => data.singleProduct.item);
  const isLoading: boolean = useSelector((data: IRootIsLoading) => data.singleProduct.isLoading)
  const dispatch = useDispatch()
  const params = useParams()
  const {id} = params

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProduct(id))
  }, [])

  return (
    <>

      {productData &&
        <div className='card-container-grid'>
          <div className="img-container">
            <img src={productData.photo} alt="some pic" style={{width: '180px', height: '230px'}}/>
          </div>
          <div className="info-container">
            <h4>{productData.name}</h4>
            <p>{productData.article_number}</p>
            <p>{productData.description}</p>
            <p>{productData.price}</p>
            <p>Колір плівки: </p>
          </div>
        </div>
      }
    </>
  )
}