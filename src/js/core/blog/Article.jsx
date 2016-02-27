import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
import { Router, Route, Link }  from 'react-router'
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

import Config                   from 'config/config';
import KeyPress                 from 'component/KeyPress';
import Articles                 from 'config/articles';

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
        this.tl = new TimelineLite();

    }

    onBack() {
        this.tl.reverse();
        setTimeout( () => {
            this.props.history.pushState(null, '/blog');
        }, 500 );
    }

    onClick() {
         this.props.onClick();
         this.setState( { active: !this.state.active } );
    }

    componentDidMount(){
        var head = this.refs.articleHeader;
        var article = this.refs.articleContent;

        this.tl
        .fromTo(head, 1, {y:-320, ease: Cubic.linear }, {y:0, ease: Cubic.linear }, "+0.5")
        .fromTo(article, 1, {y:520, ease: Cubic.linear }, {y:0, ease: Cubic.linear }, "+0.5");

        if (this.props.url)
        {
            console.log("scrollTopProblem", document.body.scrollTop)
            document.body.scrollTop = 0;
        }
    }
    
    render() {

            var url = this.props.url;
            var heart = "<3";

            return (
                <div className={classNames("screen-box article") }>
                    <div className={classNames("back", {clicked: !this.state.open})}>
                    <a onClick={::this.onBack}><i className="icon icon-arrow_back icon-3x"/></a>
                    </div>
                    <ShareMenu >
                        <div>
                            <h3>Share this story</h3>
                            <ul>
                                <li data-tip="facebook">
                                    <a href="">
                                        <i className="icon icon-3x icon-facebook"/>
                                    </a>
                                </li>
                                <li data-tip="twitter">
                                    <a href="">
                                        <i className="icon icon-3x icon-twitter"/>
                                    </a>
                                </li>
                                <li data-tip="google+">
                                    <a href="">
                                        <i className="icon icon-3x icon-google-plus"/>
                                    </a>
                                </li>
                            </ul>
                            <ReactTooltip place="bottom" type="light" effect="solid"/>
                        </div>
                    </ShareMenu>
                    <div ref="articleHeader" className={classNames("fixed-background-reader-wrapper", {active: this.state.active})}>
                        <FixedBackground
                            position="fixed-background-reader" 
                            fullscreen={true} 
                            filter="brightness" 
                            image={Articles[url].imgUrl}
                            >
                            <div className="content-wrapper">
                                <h1>{ Articles[url].title }</h1>
                                <h4 className="b">{ Articles[url].creationDate }</h4>
                            </div>
                        </FixedBackground>
                    </div>
                    <div ref="articleContent" className={classNames( 'page', { active : this.state.active } ) }>
                        <article
                            dangerouslySetInnerHTML={{__html: Articles[url].contentHtml}}
                            className={ "article", classNames({active:this.state.active}) }
                        >
                        </article>
                    </div>
                    <a href="">
                        <FixedBackground filter="nashville" fixed={false} image="images/reader/flower-color.jpg">
                            <div style={{padding:'50px'}}>
                                <h4 className="b">Prochain article</h4>
                                <h1>La couleur dans tous ses états</h1>
                            </div>
                        </FixedBackground>
                    </a>
                    <footer>
                        <h6>{heart}</h6>
                    </footer>
                </div>
            );


    }
}

