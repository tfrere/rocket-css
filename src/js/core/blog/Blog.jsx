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
        this.tl = new TimelineLite();
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

        var articleLength = Articles.length;
        var article0 = this.refs.article0;
        var article1 = this.refs.article1;
        var article2 = this.refs.article2;
        var article3 = this.refs.article3;
        var article4 = this.refs.article4;
        var article5 = this.refs.article5;

        this.tl
        .fromTo(article0, 0.6, { opacity:0, y:50, ease: Circ.easeInOut }, { opacity:1, y:0, ease: Circ.easeInOut })
        .fromTo(article1, 0.4, { opacity:0, y:50, ease: Circ.easeInOut }, { opacity:1, y:0, ease: Circ.easeInOut })
        .fromTo(article2, 0.4, { opacity:0, y:50, ease: Circ.easeInOut }, { opacity:1, y:0, ease: Circ.easeInOut })
        .fromTo(article3, 0.4, { opacity:0, y:50, ease: Circ.easeInOut }, { opacity:1, y:0, ease: Circ.easeInOut })
        .fromTo(article4, 0.4, { opacity:0, y:50, ease: Circ.easeInOut }, { opacity:1, y:0, ease: Circ.easeInOut })
        .fromTo(article5, 0.4, { opacity:0, y:50, ease: Circ.easeInOut }, { opacity:1, y:0, ease: Circ.easeInOut });


    }


    componentWillUnmount() {
    }
    render() {

        var heart = "<3";

        return (
            <div className="screen-box blog">
                <div className="container">
                    <div ref="blog" className={classNames("row row-gutter card-list", {clicked: this.state.clicked}) }>
                         {Articles.map((object, i) => <div ref={`article${i}`} className={ classNames(
                                                            "cell",
                                                            { "force-1" : i == 0 },
                                                            { "force-2" : i != 0 } 
                                                        ) }>
                                                            <Card 
                                                                    onClick={ ::this.onClick } 
                                                                    history={this.props.history} 
                                                                    data={object} 
                                                                    id={i}
                                                                    key={i}/>
                                                      </div>
                                                )}
                    </div>
                </div>
                <footer>
                    <h6>{heart}</h6>
                </footer>
            
            </div>
        );
    }
}

