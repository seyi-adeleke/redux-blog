import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Blog from './Blog.jsx';
import BlogPost from './BlogPost.jsx';


const BlogWrapper = () => (
  <div>
    <Switch>
      <Route exact path="/blog" component={Blog}/>
      <Route path="/blog/:slug" component={BlogPost}/>
    </Switch>
  </div>
);

export default BlogWrapper;
