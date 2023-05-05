
import close from 'components/reusableComponents/img/close.png'
import './popupRegistry.scss'
import {NavLink} from "react-router-dom";
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import { useDispatch } from 'react-redux';
import { modalIsAction } from 'storeToolkit/isLogModalSlice';


type Props = {
  openAlert: boolean,
  setOpenAlertPopup: Dispatch<SetStateAction<boolean>>
}
export const PopUpForRegistry = ({openAlert, setOpenAlertPopup}: Props) => {
const dispatch = useDispatch();
  const closePopup = () => {
    setOpenAlertPopup(false)
  }
  const popupRef = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setOpenAlertPopup(false)
      console.log('close')
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const showModal = () => {
    setOpenAlertPopup(false);
    dispatch(modalIsAction(true));
}
  return(
    <>
      {
        openAlert &&
        <div className="popup-overlay" >
          <div className="popup-registry" ref={popupRef}>
            <img src={close} className="close-popup" alt='close button' onClick={closePopup}/>
            <div className="popup-text">
              <h3>Вітаємо на SHYFON’YER!</h3>
              <p>Щоб рухатись далі будь ласка, авторизуйтесь.</p>
                <button onClick={showModal}>Авторизація</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}