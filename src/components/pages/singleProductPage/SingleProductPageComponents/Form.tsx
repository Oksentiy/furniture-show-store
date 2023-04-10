import {useForm, SubmitHandler} from 'react-hook-form';

import {MyComponentProps, FormData} from "components/pages";
import '../styles/form.scss'

export const Form = ({colors, thickness}: MyComponentProps) => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm<FormData>({
    defaultValues: {
      color: '',
      thickness: '',
      width: '',
      height: '',
      count: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    reset()
    console.log(data);
  };

  return (
    <form className="form-container" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <>
        <legend>Колір плівки</legend>
        <div className="radio-input">
          {colors.map((color, index) =>
            <div className="label-wrapper" key={index}>
              <label style={{backgroundColor: `${color.hex}`}}>
                <input
                  type="radio"
                  id={color.name}
                  name="value-radio"
                  value={color.hex}
                  {...register("color", {required: true,})}/>
                <span/>
              </label>
            </div>
          )}
          <span className="selection"/>
        </div>
        {errors.color && <small style={{color: "red", fontSize: "12px"}}>Оберіть колір плівки</small>}
        <legend>Товщина фасаду:</legend>
        <div className="radio-input">
          {thickness.map((value, index) =>
            <label key={index} className="radio-color">
              <input
                type="radio"
                name="thickness"
                value={value}
                {...register("thickness", {required: true})}
              />{value} мм
            </label>
          )}
        </div>
        {errors.thickness && <small style={{color: "red", fontSize: "12px"}}>Оберіть товщину фасаду</small>}
        <div className="input-wrapper">
          <div className="input-group">
            <div>
              <legend>Висота фасаду (мм)</legend>
              <label>
                <input
                  type="text"
                  name="height"
                  // value={}
                  {...register(`height`, {required: true, pattern: /^\d+$/, min: 500})}
                />
              </label>
              {errors.height && (
                <small style={{color: "red", fontSize: "12px"}}>
                  Обов'язкове поле. Мінімальна висота 500
                </small>
              )}
              {errors.width && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
            </div>
            <div>
              <legend>Ширина фасаду (мм)</legend>
              <label>
                <input
                  type="text"
                  name="width"
                  // value={size.width}
                  {...register(`width`, {required: true, pattern: /^\d+$/, min: 500})}
                />
              </label>
              {errors.width && (
                <small style={{color: "red", fontSize: "12px"}}>
                  Обов'язкове поле. Мінімальна висота 500
                </small>
              )}
              {errors.height && <small style={{visibility: 'hidden'}}>Обов'язкове поле</small>}
            </div>
            <span className="delete-field-btn">&mdash;</span>
          </div>
        </div>
        <button type="submit">Розрахувати вартість</button>
      </>
    </form>
  )
}