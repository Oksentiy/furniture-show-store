import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { validPassword, validationEmail } from '../../../validationFields/validation';
import { FormField } from '../FormField';

import './ModalLogin.scss';
import { loginValue } from '../../../formValues/formValues';
import { RootState } from '../../../storeToolkit';
import { modalIsAction, userIsLoggin } from '../../../storeToolkit/isLogModalSlice';
import { userEmail, userToken } from '../../../storeToolkit/userSlice';
import { getLoginResource } from 'utils/helpfulFunction';

interface ModalLoginProps {
    setPopup: (value:string) => void;
  }

interface LoginValuetypes {
    email: string;
    password: string;
}

export const ModalLogin: React.FC<ModalLoginProps> = ({ setPopup }) => {
    const dispatch = useDispatch();
    const activeModal = useSelector((state: RootState) =>state.logReg.modalAction);

    const [disabled, setDisabled] = useState(true);
    const [loginForm, setLoginForm] = useState<LoginValuetypes>(loginValue);
    const [rememberMe,setRememberMe] = useState(false)
    const [someErrorEmailPassword,setSomeErrorEmailPassword] = useState<boolean>(false);
    
    useEffect(()=>{
        if(localStorage.getItem('saveMe')) setLoginForm({...loginForm,'email':localStorage.getItem('saveMe')!})
    },[]);

    const getResource = async (url:string) => {
        const res = await getLoginResource(url,loginForm.email,loginForm.password);
        console.log('new new new ',res);
        if (res) {
            if(res.token)dispatch(userIsLoggin(true));
            dispatch(userToken(res.token));
            localStorage.setItem('token', res.token);
            /////////////////////////////////////////////
            fetch(`https://shyfonyer.shop/api/v1/user/me`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${res.token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    dispatch(userEmail(data.email));
                    localStorage.setItem('loginUser', data.email);
                    dispatch(modalIsAction(false));
                });   
        } else {
            setSomeErrorEmailPassword(true);
            console.log('something going wrong');
        }

    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('login is submit');
        if(rememberMe) localStorage.setItem('saveMe', loginForm.email);
        
        getResource('https://shyfonyer.shop/api/v1/auth/login_user');          
    }

    const rememberMeHandler = () =>{
        setRememberMe(prev=>!prev);
    }

    const setLoginValue = (key:string, value:string) => {
        setLoginForm({ ...loginForm, [key]: value });
    }

    const emailLoginError = useMemo(() => validationEmail(loginForm.email), [loginForm.email]);
    const passwordLoginError = useMemo(() => validPassword(loginForm.password), [loginForm.password]);

    useEffect(() => {
        if (emailLoginError === 'nomistake' && passwordLoginError === 'nomistake') {
            setDisabled(false);
        } else setDisabled(true);
    }, [emailLoginError, passwordLoginError]);

    return (
        <div className={activeModal ? "modal active" : "modal"} onClick={() => dispatch(modalIsAction(false))}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div onClick={() => dispatch(modalIsAction(false))} className='close__modal__x'>X</div>

                <form onSubmit={handleSubmit} action="">
                    <div>
                        <h1>Login</h1>
                        <FormField
                            placeholder='Enter your email...'
                            label='Email:'
                            type='email'
                            name='email'
                            id='email'
                            value={loginForm.email}
                            setChange={(value) => setLoginValue('email', value)}
                        />
                        <p className="red__mistake">
                            {emailLoginError === 'nomistake' ? '' : emailLoginError}
                        </p>
                        <FormField
                            placeholder='Enter your password...'
                            label='Enter the password:'
                            type='password'
                            name='password'
                            id='password'
                            value={loginForm.password}
                            setChange={(value) => setLoginValue('password', value)}
                        />
                        <p className="red__mistake">
                            {passwordLoginError === 'nomistake' ? '' : passwordLoginError}
                        </p>
                    </div>
                    <button className='modal__button-submit' type="submit" disabled={disabled}>УВІЙТИ</button>
                </form>
                <div className='login__footer'>
                    <div className='login__footer__checkbox'>
                        <label>
                            <input onChange={rememberMeHandler} type="checkbox" name="" id="" />Remember Me
                        </label>
                    </div>
                    <div className='login__footer__forgot'>
                        <span onClick={()=>setPopup('forgot')} className='login__registration'>Forgot Password?</span>
                    </div>
                </div>
                <p>No accaunt?<span onClick={()=>setPopup('registration')} className='login__registration'>Registration!</span></p>
            </div>
        </div>
    );
}
