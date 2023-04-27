import {ProductCard} from "components/pages";
import {RecommendedProducts} from "components/pages";

import {Navbar} from 'components/reusableComponents/navbar';
import {BackToTop} from "components/reusableComponents/backToTop";
import {Footer} from "components/reusableComponents/footer";
import './styles/productPageLayout.scss'

export const SingleProductPage = () => {

  return(
    <div className='product-page-layout'>
      <Navbar/>
      <ProductCard/>
      <div className="title-recommended">
        <h2>Рекомендовані товари</h2>
      </div>
      <RecommendedProducts/>
      <BackToTop/>
      <Footer/>
    </div>
  )
}