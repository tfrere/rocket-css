import '../index.html';
import '../css/main.scss';

import React    	from 'react';
import ReactDOM 	from 'react-dom';
import Guidelines   from 'core/guidelines/Guidelines';
import Blog         from 'core/blog/Blog';
import Intro        from 'core/intro/Intro';
import SmoothWheel  from 'component/SmoothWheel';

import Contact      from 'core/contact/Contact';

import Nav          from 'core/nav/Nav';

import Timeline     from 'core/timeline/Timeline';
import ProjectWrapper      from 'core/timeline/ProjectWrapper';

import KeyPress     from 'component/KeyPress';

import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
  	<Router component={KeyPress}/>
  	<Route component={Nav}>
		<Route path="/" component={Intro}/>
		<Route path="portfolio" component={Timeline}/>
		<Route path="project/:projectId" component={ProjectWrapper}/>
		<Route path="blog" component={Blog}/>
		<Route path="contact" component={Contact}/>
		<Route path="guidelines" component={Guidelines}/>
  	</Route>
  </Router>
), document.getElementById( 'app-container' ))