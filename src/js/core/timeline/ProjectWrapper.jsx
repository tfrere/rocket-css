import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import ReactDOM                 from 'react-dom';
import classNames               from 'classnames';
import ReactTooltip             from 'react-tooltip';

import Project         			from 'core/timeline/Project';
import Config                   from 'config/config';
import Articles                 from 'config/articles';


export default class ProjectWrapper extends Component {
	constructor( props ) {
        super( props );
        this.state = {};
    }

    render() {
    	return (
	    	<div className="projectWrapper">
	        	<Project history={this.props.history} url={this.props.params.projectId}/> 
	    	</div>
    	);
    }
}
