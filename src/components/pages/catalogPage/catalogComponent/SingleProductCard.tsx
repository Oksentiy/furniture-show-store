import {FC} from "react";
import {Link} from "react-router-dom";

import {IProductData} from "../types";

import '../styles/singleProductCard.scss'

export const SingleProductCard: FC<IProductData> = ({...data}) => {

  return (
    <div className='card-container-flex'>
      <div className='product-image'>
        <img src={data.photo_url} alt="picture of furniture"/>
      </div>
      <div className='product-description'>
        <p> {data.name} </p>
        <p> {data.description} </p>
        <p> від {data.price} грн</p>
        <button>
          <Link to={`/products/${data.id}`} className='link'> Детальніше &#128394; </Link>
        </button>
      </div>
    </div>
  )
}