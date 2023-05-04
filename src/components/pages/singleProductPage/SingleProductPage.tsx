import {ProductCard} from "components/pages";
import {RecommendedProducts} from "components/pages";

import {Navbar} from 'components/reusableComponents/navbar';
import {BackToTop} from "components/reusableComponents/backToTop";
import {Footer} from "components/reusableComponents/footer";
import './styles/productPageLayout.scss'

export const SingleProductPage = () => {

  return(
    <>
      <Navbar/>
      <div className='product-page-layout'>
        <ProductCard/>
        <div className="title-recommended">
          <h2>Рекомендовані товари</h2>
        </div>
        <div className="recommended-products">
          <RecommendedProducts/>
        </div>
        <BackToTop/>
      </div>
      <Footer/>
    </>
  )
}