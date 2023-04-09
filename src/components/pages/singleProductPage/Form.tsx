import {useState} from "react";
import {useForm, SubmitHandler} from 'react-hook-form';

import {MyComponentProps, FormData} from "components/pages/singleProductPage/types/FormSchemas";

import './styles/form.scss'

export const Form = ({companies, colors, thickness}: MyComponentProps) => {

  const {register, handleSubmit, watch, reset, formState: {errors}} = useForm<FormData>({
    defaultValues: {
      store: [],
      color: [],
      thickness: '',
      size: [
        {
          width: '',
          height: ''
        }
      ]
    },
  });

  const sizes = watch('size');
  const [inputErrors, setInputErrors] = useState<Array<boolean>>(sizes.map(() => false));
  const addFields = () => {
    setInputErrors([...inputErrors, false]);
    sizes.push({width: '', height: ''});
  };

  const removeFields = (index: number) => {
    setInputErrors([...inputErrors.slice(0, index), ...inputErrors.slice(index + 1)]);
    sizes.splice(index, 1);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    reset()
    console.log(data);
  };

  return (
    <form className="form-container" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <>
        <legend>Виробник</legend>
        <div className="checkbox-company-wrapper">
          {companies.map((company, index) => (
            <label className="container" key={index}>
              <input
                type="checkbox"
                name={company}
                value={company}
                {...register("store", {required: true})}/>
              {company}
              <span className="checkmark"/>
            </label>
          ))}
        </div>
        {errors.store && <small style={{color: "red", fontSize: "12px"}}>Оберіть виробника</small>}
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
          {sizes.map((size, index) => (
            <div className="input-group" key={index}>
              <div>
                <legend>Висота фасаду (мм)</legend>
                <label>
                  <input
                    type="text"
                    name="height"
                    value={size.height}
                    onChange={(event) => (size.height = event.target.value)}
                    {...register(`size.${index}.height`, {required: true, pattern: /^\d+$/, min: 500})}
                  />
                </label>
                {errors.size && errors.size[index] && errors.size[index].height && (
                  <small style={{color: "red", fontSize: "12px"}}>
                    Обов'язкове поле. Мінімальна висота 500
                  </small>
                )}
              </div>
              <div>
                <legend>Ширина фасаду (мм)</legend>
                <label>
                  <input
                    type="text"
                    name="width"
                    value={size.width}
                    onChange={(event) => (size.width = event.target.value)}
                    {...register(`size.${index}.width`, {required: true, pattern: /^\d+$/, min: 500})}
                  />
                </label>
                {errors.size && errors.size[index] && errors.size[index].width && (
                  <small style={{color: "red", fontSize: "12px"}}>
                    Обов'язкове поле. Мінімальна висота 500
                  </small>
                )}
              </div>
              {
                inputErrors.length !== 1 ?
                  <span className="delete-field-btn"
                        onClick={() => removeFields(index)}
                  >&mdash;</span> :
                  <span className="delete-field-btn">&mdash;</span>
              }
            </div>
          ))}
        </div>
        <span
          className="add-field-btn"
          onClick={addFields}
        >&#43; додати розміри</span>
        <button type="submit">Розрахувати вартість</button>
      </>
    </form>
  )
}