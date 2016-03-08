import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
import { Router, Route, Link }  from 'react-router'
import ReactDOM                 from 'react-dom';
import classNames               from 'classnames';

import TweenMax from 'gsap/src/minified/TweenMax.min.js';
import TweenLite from 'gsap/src/minified/TweenLite.min.js';

export default class Contact extends Component {

    constructor( props ) {
        super( props );
        this.tl = new TimelineLite();
    }

    componentDidMount(){
        var circle = this.refs.contactCircle;
        
        var circle0 = this.refs.contactCircle0;
        var circle1 = this.refs.contactCircle1;
        var circle2 = this.refs.contactCircle2;
        var circle3 = this.refs.contactCircle3;

        var title = this.refs.title;
        var content = this.refs.content;

        this.tl
        .from(circle, 1, { y:-500, ease: Circ.easeInOut })
        .set(circle0, {className: '+=active'}, "+.6")
        .set(circle1, {className: '+=active'}, "+0.8")
        .set(circle2, {className: '+=active'}, "+1")
        .set(circle3, {className: '+=active'}, "+1.2")
        .from(title, 0.5, { opacity:0, y:-20, ease: Cubic.linear }, "+0.5")
        .from(content, 0.5, { opacity:0, y:-50, ease: Cubic.linear }, "+0.5");
    }

    componentWillUnMount() {
        this.tl.reverse();
    }

    render() {

        return (
            <div className="contact">
                <header>
                    <div ref="contactCircle" className="circle">
                        <div className="circle-form"/>
                        <a href="https://www.linkedin.com/in/thibaud-frere-3462b264">
                            <div ref="contactCircle0" className="delay-0 small-circle linkedin"/>
                        </a>    
                        <a href="https://twitter.com/thibaudfrere">
                            <div ref="contactCircle1" className="delay-1 small-circle twitter"/>
                        </a>    
                        <a href="http://github.com/tfrere">
                            <div ref="contactCircle2" className="delay-2 small-circle github"/>
                        </a>    
                        <a href="https://www.behance.net/frerethibaud9207">
                            <div ref="contactCircle3" className="delay-3 small-circle behance"/>
                        </a>    
                    </div>
                    <h1 ref="title">Bonjour,</h1>
                    <p ref="content">
                        Un project cool en tête et vous pensez que je pourrais y contribuer ?
                        <br/>
                        Envoyez moi un email à <a href="mailto:ecrire@tfrere.fr">ecrire@tfrere.fr</a>
                        <br/>
                        <a className="no-style" target="_blank" href="https://www.google.fr/maps/place/Paris/data=!4m2!3m1!1s0x47e66e1f06e2b70f:0x40b82c3688c9460?sa=X&ved=0ahUKEwjO1aWRvajLAhUCM5oKHblzAqAQ8gEIfjAQ">
                            <span className="tag"><i className="icon icon-location_on"/> Paris</span>
                        </a>
                        <a className="no-style" target="_blank" href="https://www.google.fr/maps/place/Metz/data=!4m2!3m1!1s0x4794dc1b6074b6a9:0x596be4b635bba669?sa=X&ved=0ahUKEwjawPfeuqjLAhVjYZoKHQTFDhoQ8gEIfzAQ">
                            <span className="tag"><i className="icon icon-location_on"/> Metz</span>
                        </a>
                    </p>
                </header>
            </div>
        );


    }
}

