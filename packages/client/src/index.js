import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './views/App';
import reportWebVitals from './reportWebVitals';
import configureStore from './state/store';

const Container = () => {
  const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

  return (
    <Router>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </Router>
  );
};

ReactDOM.render(<Container />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
