import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {store} from 'store/store'
import { App } from 'App';
import {Provider} from "react-redux";

const root = createRoot(document.querySelector('.root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);
