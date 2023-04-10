import {ProductCard} from "components/pages";
import {RecommendedProducts} from "components/pages";
import './styles/productPageLayout.scss'

export const SingleProductPage = () => {
  return(
    <div className='product-page-layout'>
      <ProductCard/>
      <h2>Рекомендовані товари</h2>
      <RecommendedProducts/>
    </div>
  )
}