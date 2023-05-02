import { RouterProvider } from 'components/routerProvider/RouterProvider'

import './style.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { userEmail, userToken } from 'storeToolkit/userSlice';

export function App() {
  const dispatch = useDispatch();

  const userFromRedux = useSelector((state: RootState) => state.userMe.user);
  const activeModal = useSelector((state: RootState) => state.logReg.modalAction);
  const isLog = useSelector((state: RootState) => state.logReg.isLog);

  useEffect(() => {
    if (isLog && JSON.stringify(userFromRedux) === `{"token":"","email":""}`) {
        dispatch(userEmail(localStorage.getItem('loginUser')!));
        dispatch(userToken(localStorage.getItem('token')!));
    }
  }, [activeModal, isLog]);

  return (
    <div className="app">
      <RouterProvider/>
    </div>
  );
}
