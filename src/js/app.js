import '../index.html';
import '../css/main.scss';

import React    	from 'react';
import ReactDOM 	from 'react-dom';
import Article   	from 'core/Article';
import ArticleWrapper   	from 'core/ArticleWrapper';
import Vitrine  	from 'core/Vitrine';
import Main     	from 'core/Main';
import Demo         from 'core/Demo';
import Blog         from 'core/Blog';
import KeyPress     from 'component/KeyPress';

import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
  	<Router component={KeyPress}/>
	<Route path="/" component={Main}/>
	<Route path="blog" component={Blog}/>
	<Route path="blog/article/:articleId" component={ArticleWrapper}/>
	<Route path="vitrine" component={Vitrine}/>
	<Route path="demo" component={Demo}/>
  </Router>
), document.getElementById( 'app-container' ))