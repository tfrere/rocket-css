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
import PreLoader                from 'component/PreLoader';

import Typographies             from 'config/typography';
import Colors                   from 'config/color';
import Placeholders             from 'config/placeholder';
import Article                  from 'core/Article';
import Card                     from 'core/Card';

import Config                   from 'config/config';
import Articles                 from 'config/articles';
import KeyPress                 from 'component/KeyPress';


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
        }, 1500 );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }
    render() {

        return (
            <div className="screen-box blog">
                <PreLoader/>
                <div className="container">
                    <h1 className={classNames("header", {clicked: this.state.clicked}) }>Blog</h1>
                    <div className={classNames("row row-gutter card-list", {clicked: this.state.clicked}) }>
                         {Articles.map((object, i) => <Card onClick={ ::this.onClick } history={this.props.history} data={object} id={i}/> )}
                    </div>
                </div>
                <footer>
                    <h6>A reading <a href="http://tfrere.fr">experiment</a></h6>
                </footer>
            
            </div>
        );
    }
}

