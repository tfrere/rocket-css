import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
import { Router, Route, Link }  from 'react-router'
import ReactDOM                 from 'react-dom';
import classNames               from 'classnames';
import ReactTooltip             from 'react-tooltip';

import Typographies             from 'config/typography';
import Colors                   from 'config/color';
import Placeholders             from 'config/placeholder';

import Config                   from 'config/config';
import Projects                 from 'config/projects';

import TweenMax from 'gsap/src/minified/TweenMax.min.js';
import TweenLite from 'gsap/src/minified/TweenLite.min.js';

export default class Article extends Component {

    static defaultProps = {
        onClick : () => true,
        url: 0
    };

    constructor( props ) {
        super( props );
        this.state = {};
        this.onClick = this.onClick.bind(this);
        this.onBack = this.onBack.bind(this);
        setTimeout( () => {
            this.setState( { open : true } );
        }, 1500 );
        this.tl = new TimelineLite();
    }

    onBack() {
        this.setState( { open: false } );
        this.tl.reverse();
        setTimeout( () => {
            this.props.history.pushState(null, '/');
        }, 1500 );
    }

    onClick() {
         this.props.onClick();
         this.setState( { active: !this.state.active } );
    }

    componentDidMount(){

        var content = this.refs.contentWrapper;
        var year = this.refs.year;
        var mockup = this.refs.mockup;

        
        this.tl
        .from(content, 0.6, { opacity:0, x:-500, ease: Circ.easeInOut }, "+0.5")
        .from(year, 0.6, { opacity:0, x:-50, ease: Circ.easeInOut }, "+0.5")
        .fromTo(mockup, 0.6, { opacity:0, scale:0, ease: Circ.easeInOut }, { opacity:1, scale:1, ease: Cubic.linear });

        if (this.props.url)
        {
            console.log("scrollTopProblem", document.body.scrollTop)
            document.body.scrollTop = 0;
            setTimeout( () => {
                this.setState( { open : true } );
            }, 1500 );
        }
    }

    render() {

            var url = this.props.url;

            return (
                <div className={classNames("screen-box project", {open:this.state.open}) }>
                    <div className={classNames("back", {clicked: !this.state.open})}>
                        <a onClick={::this.onBack}><i className="icon icon-arrow_back icon-3x"/></a>
                    </div>
                    <div ref="contentWrapper" className={classNames( 'content-wrapper', { active : this.state.active } ) }>
                        <h5 className="italic">{Projects[url].month}</h5>
                        <header>
                            <h2 dangerouslySetInnerHTML={{__html: Projects[url].title}}></h2>
                        </header>
                        <p
                            dangerouslySetInnerHTML={{__html: Projects[url].content}}
                            className={ "content", classNames({active:this.state.active}) }
                        >
                        </p>
                    </div>
                    <div ref="mockup" className="mockup">
                        <a href={Projects[url].website} target="_blank" className="button rounded">
                            <i className="icon icon-heart"/>
                            <span>Le site</span>
                        </a>
                    </div>
                    <div ref="year" className="project-year">{Projects[url].year}</div>
                </div>
            );


    }
}

// <header>
//     <div ref="contactCircle" className="circle"/>
//     <h1 ref="title">Bonjour,</h1>
//     <p ref="content">
//         Un project cool en tête et vous pensez que je pourrais y contribuer ?
//         <br/>
//         Envoyez moi un email à <a href="mailto:ecrire@tfrere.fr">ecrire@tfrere.fr</a>
//         <br/>
//         <span className="tag">@Paris</span>
//         <span className="tag">@Metz</span>
//     </p>
// </header>
