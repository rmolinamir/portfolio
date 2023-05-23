import 'polyfills';

import App from 'containers/App';
import { render } from 'react-dom';

import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

render(<App />, document.getElementById('root'));

// TODO: Enable after upgrading react-router-dom.
// const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
// root.render(<App />);
