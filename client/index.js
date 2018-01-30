import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'

import './styles.scss';

import Body from './components/Body.jsx';
import Blog from './components/Blog/Blog.jsx';

const rootEl = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Body}/>
        <Route path="/blog" component={Blog}/>
      </div>
    </BrowserRouter>, rootEl
);

