import {ChangeEvent, FC, FormEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {setProductData} from 'components/pages/singleProductPage/model/slice/singleProductDataSlice'

import {ProductData, ProductRootState, IRootIsLoading} from "./types/singleProductSchema";
import {fetchProduct} from "components/pages/singleProductPage/model/services/getSingleProduct";
import {useParams} from "react-router-dom";
import './styles/productCard.scss'

const colors:Color[] = [
  {name: "Коричневий матовий", hex: "#252121"},
  {name: "Димний беж", hex: "#252121"},
  {name: "Ментоловий", hex: "#B6C2AE"},
  {name: "Глибокий синій", hex: "#2B313F"},
  {name: "Світлий персик", hex: "#ECD6C6"},
  {name: "Бургунді", hex: "#800020"},
  {name: "Місячно зелений", hex: "#3D493F"},
  {name: "Сіро-коричневи1", hex: "#6D6D6B"},
  {name: "Пудровий", hex: "#D4CCC0"},
  {name: "Какао", hex: "#736154"}
]
const companies:string[] = ['IKEA', 'JYSK', 'BLUM', 'KOLSS']
const thickness:string[] = ["16", "18"]
type Color = {
  name:string,
  hex:string
}
type FormData = {
  store: string[];
  color: string[];
  thickness: string;
  height: string;
  width: string;
};

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

  const [formData, setFormData] = useState<FormData>({
    store: [],
    color: [],
    thickness: '',
    height: '',
    width: '',
  });
  console.log(productData)

  return (
    <>
      {productData &&
        <div className='card-container-grid'>
          <div className="img-container">
            <img src={productData.photo} alt="some pic" className='product-img'/>
          </div>
          <div className="info-container">
            <h4>{productData.name}</h4>
            <p>Артикул: {productData.article_number}</p>
            <p>{productData.description}. Підйомник можна використовувати як дверцята або фронтальну панель ящика.
              Дверцята можна встановити справа або зліва. Дверцята спростовують зміст і захищають її від пилу.
              З'єднайте зі скляними дверцятами SINDVIK, щоб створити повне рішення для зберігання і експонування.
            </p>
            <p>Від {productData.price}</p>
            <form className="form-container">
              <>
                <legend>Виробник</legend>
                <div className="companies"></div>
                {companies.map((company, index) => (
                  <label key={index}>
                    <input type="checkbox" name={company} value={company}/>
                    {company}
                  </label>
                  ))}
                <legend>Колір плівки </legend>
                <div className="radio-input">
                  {colors.map((color, index) =>
                    <div className="label-wrapper">
                      <label style={{backgroundColor: `${color.hex}`}} key={index}>
                        <input type="radio" id={color.name} name="value-radio" value={color.hex}/>
                        <span/>
                      </label>
                    </div>
                  )}
                  <span className="selection"/>
                </div>
                <legend>Товщина фасаду:</legend>
                <div className="radio-input">
                  {thickness.map((value, index) =>
                    <label key={index} className="radio-color">
                      <input type="radio" name="thickness" value={value} />{value} мм
                    </label>
                  )}
                </div>
                <div className="input-wrapper">
                  <div>
                    <legend>Висота фасаду (мм)</legend>
                    <label>
                      <input type="text" name="height" />
                    </label>
                  </div>
                  <div>
                    <legend>Ширина фасаду (мм)</legend>
                    <label>
                      <input type="text" name="width" />
                    </label>
                  </div>
                  <span className="delete-field-btn">&mdash;</span>
                </div>
                <span className="add-field-btn">&#43; додати розміри</span>
                <button type="submit">Розрахувати вартість</button>
              </>
            </form>
          </div>
        </div>
      }
    </>
  )
}