import { Navbar } from 'components/reusableComponents/navbar';
import './CheckoutSuccessfully.scss';
import { Footer } from 'components/reusableComponents/footer';
import { NavLink } from 'react-router-dom';

export const CheckoutSuccessfully =() =>{
    return (
        <div>
            <Navbar />
            <div className='checkout-successfully'>
                <div className='checkout-successfully__in'>
                    <h1>Замовлення оформлене успішно!</h1>
                    <NavLink to={'/products/'}>
                        <h3>ПОВЕРНУТИСЬ ДО КАТАЛОГУ</h3>
                    </NavLink>
                    <NavLink to={'/personal-accaunt/my-orders'}>
                        <h3>ПЕРЕГЛЯНУТИ СВОЇ ЗАМОВЛЕННЯ</h3>
                    </NavLink>
                </div>                
            </div>
            <Footer />
        </div>
    );
}