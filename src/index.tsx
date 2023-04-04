import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {store} from 'components/store/store'
import { App } from 'App';
import {Provider} from "react-redux";
// import '//components/utils/PPNeueWorldFont/ppneueworld-supercondensedlight.ttf'

const root = createRoot(document.querySelector('.root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);
