import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './_stores';
import Routes from './routes';

import './less/variables.less';
import './less/public.less';


ReactDOM.render(
    <Provider {...stores}>
        {Routes}
    </Provider>,
    document.getElementById('root'));

