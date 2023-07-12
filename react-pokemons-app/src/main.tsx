import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './app/i18n'

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <StrictMode>
  <App />
  // </StrictMode>
);

/*
setInterval(() => {
  // Version DOM
  // const rootEl = document.getElementById('root') as HTMLElement;
  // rootEl.innerHTML = '';
  //
  // const containerEl = document.createElement('div');
  // const inputEl = document.createElement('input');
  // inputEl.type = 'text';
  //
  // const divEl = document.createElement('div');
  // divEl.innerText = (new Date()).toLocaleTimeString();
  //
  // containerEl.append(inputEl, divEl);
  //
  // rootEl.append(containerEl);

  // Version React
  root.render(
    <div>
      <input type="text" />
      <div>
        {(new Date()).toLocaleTimeString()}
      </div>
    </div>
  );
}, 1000);

 */
