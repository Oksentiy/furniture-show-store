import {ProductCard} from "components/pages";
import {RecommendedProducts} from "components/pages";
import './styles/productPageLayout.scss'

export const SingleProductPage = () => {
  return(
    <div className='product-page-layout'>
      <ProductCard/>
      <div className="title-recommended">
        <h2>Рекомендовані товари</h2>
      </div>
      <RecommendedProducts/>
    </div>
  )
}