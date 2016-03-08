import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import ReactDOM                 from 'react-dom';
import classNames               from 'classnames';
import ReactTooltip             from 'react-tooltip';

import FixedBackground          from 'component/FixedBackground';

import Config                   from 'config/config';
import Articles                 from 'config/articles';

import TweenMax                 from 'gsap/src/minified/TweenMax.min.js';
import TweenLite                from 'gsap/src/minified/TweenLite.min.js';



export default class Blog extends Component {

    static defaultProps = {
        onClick : () => true
    };

    constructor( props ) {
        super( props );
        this.tl = new TimelineLite();
    }

    componentWillMount() {
    }

    componentDidMount(){
        var blog = this.refs.blog;
        this.tl
        .fromTo(blog, 1, {y:-50, opacity:0, ease: Cubic.linear}, {y:0, opacity:1, ease: Cubic.linear});
    }


    componentWillUnmount() {
    }
    render() {

        var heart = "<3";

        return (
            <div ref="blog" className="screen-box blog">
                <div className="container">
                 {Articles.map((object, i) =>
                    <div id={i} key={i} className="cell force-1" ref={`project${i}`} >
                        <div>
                            <h2>{object.title}</h2>
                            <h6 className="uppercase">{Articles[i].creationDate}</h6>
                            <p dangerouslySetInnerHTML={{__html: Articles[i].contentHtml}}/>
                            <br/><br/>
                            <hr className="half line"/>
                            <br/><br/><br/><br/>
                        </div>
                    </div>
                 )}
                </div>
                <footer>
                    <h6>{heart}</h6>
                </footer>
            
            </div>
        );
    }
}

