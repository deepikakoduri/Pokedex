import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import store from "./store"
import injectTapEventPlugin from 'react-tap-event-plugin';

import Layout from './components/Layout.js';

injectTapEventPlugin();

ReactDOM.render(<Provider store={store}>
  <div class="container-fluid">
  <Layout/>
  </div>
  </Provider>, document.getElementById('app'));
