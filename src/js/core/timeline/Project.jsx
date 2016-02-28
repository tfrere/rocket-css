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
        setTimeout( () => {
            this.setState( { open : true } );
        }, 1500 );
        this.tl = new TimelineLite();
    }

    onClick() {
         this.props.onClick();
         this.setState( { active: !this.state.active } );
    }

    componentDidMount(){

        var content = this.refs.contentWrapper;
        var img1 = this.refs.img1;
        var year = this.refs.year;

        
        this.tl
        .from(content, 0.6, { opacity:0, x:-500, ease: Circ.easeInOut }, "+0.5")
        .to(img1, 0.6, { opacity:1, ease: Circ.easeInOut })
        .from(year, 0.6, { opacity:0, x:-50, ease: Circ.easeInOut }, "+0.5");

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
                        <a href={Projects[url].website} target="_blank" className="button rounded">
                            <i className="icon icon-heart"/>
                            <span>Le site</span>
                        </a>
                    </div>
                    <div className="img-wrapper">
                        <img src={Projects[url].img[0]} ref="img1" className="img-article img-article-0"/>
                    </div>
                    <div ref="year" className="project-year">{Projects[url].year}</div>
                </div>
            );


    }
}
