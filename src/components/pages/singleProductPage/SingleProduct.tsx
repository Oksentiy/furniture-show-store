import {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setProductData} from 'components/store/singleProductDataSlice'
import {ProductRootState, IProductData, IRootIsLoading, ProductData} from "components/pages/catalogPage/types";

export const SingleProduct:FC = () => {

  // const productData:IProductData = useSelector((data:ProductRootState) => data.singleProduct.item);
  // const isLoading: boolean = useSelector((data:IRootIsLoading) => data.singleProduct.isLoading)
  // const dispatch = useDispatch()
  const axios = require('axios');
  const [data, setData] = useState<ProductData>()
  // useEffect(()=>{
  //   dispatch(setProductData(productData))
  // },[])
  // console.log(productData)
  useEffect(() => {
    axios.get('http://164.90.237.173/api/v1/products/17')
      .then(function (response: any) {
        setData(response.data)
        // console.log(response.data);
      })
  }, [])
  // console.log(data)
  // @ts-ignore
  // const error:string = useSelector((data) => data.singleProduct.error)
  return (
    <>
      {data &&
        <div className='card-container-grid'>
          something
          <img src={data.photo.url} alt="some pic" style={{width: '180px', height: '230px'}}/>
          <p>{data.name}</p>
        </div>
      }
    </>
  )
}