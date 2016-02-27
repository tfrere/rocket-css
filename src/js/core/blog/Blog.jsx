import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import ReactDOM                 from 'react-dom';
import classNames               from 'classnames';
import ReactTooltip             from 'react-tooltip';

import FixedBackground           from 'component/FixedBackground';
import NavBar                    from 'component/NavBar';
import SideMenu                  from 'component/SideMenu';
import ShareMenu                 from 'component/ShareMenu';
import ScrollProgress            from 'component/ScrollProgress';

import Typographies             from 'config/typography';
import Colors                   from 'config/color';
import Placeholders             from 'config/placeholder';
import Card                     from 'core/blog/Card';

import Config                   from 'config/config';
import Articles                 from 'config/articles';

import TweenMax from 'gsap/src/minified/TweenMax.min.js';
import TweenLite from 'gsap/src/minified/TweenLite.min.js';


export default class Blog extends Component {

    static defaultProps = {
        onClick : () => true
    };

    constructor( props ) {
        super( props );
        this.state = {clicked:false};
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log("onclickblog");
         this.props.onClick();
         this.setState( { clicked: true } );
        setTimeout( () => {
            this.setState( { clicked : false } );
        }, 1000 );
    }

    componentWillMount() {
    }

    componentDidMount(){
        var blog = this.refs.blog;
        var card = this.refs.card;
        var tl3 = new TimelineLite();
        tl3
        .from(blog, 1, { opacity:0, y:-50, ease: Cubic.linear }, "+0.5");
        //.staggerFrom(cards, 1, { y:-50 }, 0.5);

    }


    componentWillUnmount() {
    }
    render() {

        var heart = "<3";

        return (
            <div className="screen-box blog">
                <div className="container">
                    <div ref="blog" className={classNames("row row-gutter card-list", {clicked: this.state.clicked}) }>
                         {Articles.map((object, i) => <Card ref={`card${i}`} onClick={ ::this.onClick } history={this.props.history} data={object} id={i}/> )}
                    </div>
                </div>
                <footer>
                    <h6>{heart}</h6>
                </footer>
            
            </div>
        );
    }
}

