import { NavLink } from 'react-router-dom';
import './Aside.scss';

export const Aside = () => {
    return (
        <aside className='aside-accaunt'>
            
                <NavLink className={({isActive})=> isActive ?'aside-accaunt__link-active':'aside-accaunt__link'} to={'/personal-accaunt/personal-data'}>
                    ОСОБИСТІ ДАНІ
                </NavLink>
            
            
                <NavLink className={({isActive})=> isActive ?'aside-accaunt__link-active':'aside-accaunt__link'} to={'/personal-accaunt/my-orders'}>
                    МОЇ ЗАМОВЛЕННЯ
                </NavLink>
            
                <NavLink className={({isActive})=> isActive ?'aside-accaunt__link-active':'aside-accaunt__link'} to={'/personal-accaunt/change-password'}>
                    ЗМІНА ПАРОЛЯ
                </NavLink>
            
        </aside>

    );
}