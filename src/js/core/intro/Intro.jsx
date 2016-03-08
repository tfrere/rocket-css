import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory }  from 'react-router'
import ReactDOM                 from 'react-dom';
import classNames               from 'classnames';
import ReactTooltip             from 'react-tooltip';
import TypeWriter               from 'react-typewriter';

import TweenMax from 'gsap/src/minified/TweenMax.min.js';
import TweenLite from 'gsap/src/minified/TweenLite.min.js';

export default class Intro extends Component {


    constructor( props ) {
        super( props );
        this.state = {};
        this.onClick = this.onClick.bind(this);
        this.tl = new TimelineLite();
    }
    
    onClick() {

        this.setState( { active: true } );
        this.tl.reverse();
        setTimeout( () => {
            console.log(this.props.history);
            this.props.history.pushState(null, '/portfolio');
            this.setState( { active : false } );
        }, 600 );
    }


    componentDidMount() {

        var typer = this.refs.typer;
        var cta = this.refs.cta;
        var ctaSpan = this.refs.ctaSpan;

        this.tl.stop();
        this.tl
        .from(typer, 0.2, { opacity:0, ease: Circ.easeInOut }, "+=0.3")
        .set(ctaSpan, {className: '-=collapse'}, "+=0.1")
        .from(cta, 0.6, { y:500, ease: Circ.easeInOut }, "+=0.5");

        this.tl.play();
    }

    render() {
            
            var delays = [{
              // At index 4, increase the delay period by 100ms. 
              at: 13,
              delay: 500
            }];
            
            return (
                <div className="intro">
                    <div>
                        <div ref="typer" className="typer oldPortfolioEffect">
                            <div>Thibaud FRERE<br/> <span>designer</span></div>
                        </div>
                        <button ref="cta" onClick={ ::this.onClick } >
                            <span ref="ctaSpan">PORTFOLIO</span>
                        </button>
                    </div>
                </div>
            );

    }
}
