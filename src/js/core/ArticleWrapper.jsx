import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import ReactDOM                 from 'react-dom';
import classNames               from 'classnames';
import ReactTooltip             from 'react-tooltip';

import Article         			from 'core/Article';
import Config                   from 'config/config';
import KeyPress                 from 'component/KeyPress';
import Articles                 from 'config/articles';


export default class ArticleWrapper extends Component {
	constructor( props ) {
        super( props );
        this.state = {};
    }

    render() {
    	return (
	    	<div>
	        	<Article  history={this.props.history} url={this.props.params.articleId}/> 
	    	</div>
    	);
    }
}
