import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import './index.scss';
import App from './App';
import reducers from './redux/reducers';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import Localization from './components/Layout/Localization';
import Router from './router'


const history = createHashHistory()
const middlewares = [thunk]
if (process.env.NODE_ENV === 'development' && true) {
  middlewares.push(logger)
}
const store = createStore(reducers(history), compose(applyMiddleware(...middlewares)))

ReactDOM.render(
    <Provider store={store}>
        <Localization>
            <Router history={history} /> {/* <App /> */}
        </Localization>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export { store, history }
