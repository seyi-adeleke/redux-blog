import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';


import './styles.scss';
import store from './store';

import Body from './components/Body.jsx';
import Blog from './components/Blog/Blog.jsx';
import BlogPost from './components/Blog/BlogPost.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';

import verifyToken from './utilities/verifyToken';
import Authenticate from './utilities/Authentication.jsx';
import { SET_ADMIN } from './actions/actionTypes';


const rootEl = document.getElementById('root');
const history = createBrowserHistory();

/**
 *
 */
const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};


if (verifyToken(localStorage.token)) {
  store.dispatch({
    type: SET_ADMIN,
    payload: localStorage.getItem('token'),
  });
} else {
   console.log('not oken');
}

ReactDOM.render(<Provider store={store}>
  <Router component={ScrollToTop} history={history}>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/admin" component={Authenticate(Admin)}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/blog/:slug" component={BlogPost}/>
      <Route exact path="/" component={Body}/>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>
</Provider>, rootEl);
