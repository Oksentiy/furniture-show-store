
import close from 'components/reusableComponents/img/close.png'
import './popupRegistry.scss'
import {NavLink} from "react-router-dom";
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";


type Props = {
  openAlert: boolean,
  setOpenAlertPopup: Dispatch<SetStateAction<boolean>>
}
export const PopUpForRegistry = ({openAlert, setOpenAlertPopup}: Props) => {

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
                <button onClick={closePopup}>Авторизація</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}