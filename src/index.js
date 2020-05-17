import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import { Provider } from 'react-redux';
import store from "./state/store"
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import i18n from './utils/i18n'

ReactDOM.render(<Provider store={store}>
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
