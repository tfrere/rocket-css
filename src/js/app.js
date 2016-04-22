import '../index.html';
import '../css/main.scss';

import React    	from 'react';
import ReactDOM 	from 'react-dom';
import Vitrine  	from 'core/Vitrine';
import Contact  	from 'core/Contact';
import Realisations  	from 'core/Realisations';
import Services  	from 'core/Services';
import NavBar    	from 'core/NavBar';

import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
  	<Route component={NavBar} isTop={true} fixed={true}>
		<Route path="/" component={Vitrine}/>
		<Route path="/contact" component={Contact}/>
		<Route path="/realisations" component={Realisations}/>
		<Route path="/services" component={Services}/>
	</Route>
  </Router>
), document.getElementById( 'app-container' ))