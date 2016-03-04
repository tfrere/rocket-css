import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory }  from 'react-router'
import ReactDOM                 from 'react-dom';
import classNames               from 'classnames';
import ReactTooltip             from 'react-tooltip';

import TypeName                 from 'core/intro/TypeName';

import TweenMax from 'gsap/src/minified/TweenMax.min.js';
import TweenLite from 'gsap/src/minified/TweenLite.min.js';

export default class Intro extends Component {


    constructor( props ) {
        super( props );
        this.state = {};
    }

    componentDidMount(){
    }

    render() {

            return (
                <div className="intro">
                    <div>
                        <TypeName/>
                        <Link to={`/portfolio`} >
                            PORTFOLIO
                        </Link>
                        <Link to={`/contact`} >
                            CONTACT
                        </Link>
                    </div>
                </div>
            );


    }
}
