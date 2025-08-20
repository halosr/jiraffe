import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import App from '@/App.tsx';
import createStore from '@/store/store.ts';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore({});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
