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
    }

    onBack() {
         this.setState( { open: false } );
        setTimeout( () => {
            this.props.history.pushState(null, '/blog/');
        }, 1500 );
    }

    onClick() {
         this.props.onClick();
         this.setState( { active: !this.state.active } );
    }

    componentDidMount(){
        if (this.props.url)
        {
            console.log("scrollTopProblem", document.body.scrollTop)
            document.body.scrollTop = 0;
            setTimeout( () => {
                this.setState( { open : true } );
            }, 1500 );
        }
    }
    componentDidMount(){
        if (this.props.url)
        {
            console.log("scrollTopProblem", document.body.scrollTop)
            document.body.scrollTop = 0;
            setTimeout( () => {
                this.setState( { open : true } );
            }, 3000 );
        }
    }
    
    render() {

            var url = this.props.url;

            return (
                <div className={classNames("screen-box article", {open:this.state.open}) }>
                    <ScrollProgress/>
                    <KeyPress/>
                    <div className={classNames("back", {clicked: !this.state.open})}>
                    <a onClick={::this.onBack}><i className="icon icon-arrow_back icon-3x"/></a>
                    </div>
                    <ShareMenu>
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
                    <SideMenu onClick={ ::this.onClick }>
                        <h3>Other stories</h3>
                        <ul>
                            <li className="delay-1">
                                <a className="item" href="">
                                    <img src="images/background/impress-letters.jpg"/>
                                    <div className="box">
                                        <h4>La typographie au 21e siècle</h4>
                                        <h6>23 APRIL 2016</h6>
                                    </div>
                                </a>
                            </li>
                            <li className="delay-2">
                                <a className="item" href="">
                                    <img src="images/background/photography.jpg"/>
                                    <div className="box">
                                        <h4>Composition is not a mess</h4>
                                        <h6>23 APRIL 2016</h6>
                                    </div>
                                </a>
                            </li>
                            <li className="delay-3">
                                <a className="item" href="">
                                    <img src="images/reader/flower-color.jpg"/>
                                    <div className="box">
                                        <h4>Meaning of colors</h4>
                                        <h6>23 APRIL 2016</h6>
                                    </div>
                                </a>
                            </li>
                            <li className="delay-4">
                                <a className="item" href="">
                                    <img src="images/background/animated/production.gif"/>
                                    <div className="box">
                                        <h4>React components</h4>
                                        <h6>23 APRIL 2016</h6>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </SideMenu>
                    <div className={classNames("fixed-background-reader-wrapper", {active: this.state.active})}>
                        <FixedBackground
                                        position="fixed-background-reader" 
                                        fullscreen={true} 
                                        filter="brightness" 
                                        image={Articles[url].imgUrl}
                                        >

                            <h1>{ Articles[url].title }</h1>
                            <h4 className="b">{ Articles[url].creationDate }</h4>
                        
                        </FixedBackground>
                    </div>
                    <div className={classNames( 'page', { active : this.state.active } ) }>
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
                        <h6>A reading <a href="http://tfrere.fr">experiment</a></h6>
                    </footer>
                </div>
            );


    }
}

