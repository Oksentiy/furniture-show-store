import {FC} from "react";
import {Link} from "react-router-dom";

import {IProductData} from "../../pages/catalogPage/types";

import './singleProductCard.scss'

export const SingleProductCard: FC<IProductData> = ({...data}) => {

  return (
    <div className='card-container-flex'>
      <Link to={`/products/${data.id}`} className='link'>
        <div className='product-image'>
          <img src={data.photo_url} alt="picture of furniture"/>
        </div>
        <div className='product-description'>
          <p className='name'> {data.name} </p>
          <p className='price'> від {data.price} грн</p>
        </div>
      </Link>
    </div>
  )
}