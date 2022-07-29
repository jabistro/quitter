import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import { ProfilePicModalProvider } from './components/ProfilePage/ProfileHeader/ProfileImages/ProfilePicModal'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <ProfilePicModalProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ProfilePicModalProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
