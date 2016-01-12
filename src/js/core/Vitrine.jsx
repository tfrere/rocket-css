import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
// import { Router, Route, Link } from 'react-router'
import ReactDOM                 from 'react-dom';
import ReactTooltip             from 'react-tooltip';

import FixedBackground           from 'component/FixedBackground';
import NavBar                    from 'component/NavBar';
import SideMenu                  from 'component/SideMenu';
import ShareMenu                 from 'component/ShareMenu';
import ScrollProgress            from 'component/ScrollProgress';
import VideoHandler              from 'component/VideoHandler';

import Typographies             from 'config/typography';
import Colors                   from 'config/color';
import Images                   from 'config/image';
import Placeholders             from 'config/placeholder';

import Config                   from 'config/config';

export default class Vitrine extends Component {

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <div className="screen-box vitrine">
                <NavBar isTop={true} fixed={true}>
                    <ul>
                        <li><a href=""><i className="icon icon-heart icon-2x"/></a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Fonctionnalités</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </NavBar>
                <FixedBackground fixed={true} position="fixed-background-vitrine" filter="1977" image="images/background/thegrid-right-blocks.png">
                    <h1>Build UI speeder than ever</h1>
                    <h4>With this new toolkit</h4>
                    <button>Join the revolution</button>
                </FixedBackground>
                <article>
                    <p> It's a development kit that provides the most basic styles as a foundation, but it's ready to adopt whatever your design or style is. </p>
                    <VideoHandler/>
                    <p> It's a development kit that provides the most basic styles as a foundation, but it's ready to adopt whatever your design or style is. </p>
                </article>
                <div className="team">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <footer>
                    <div>
                        <h2>Coucou</h2>
                        <ul>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Fonctionnalités</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Coucou</h2>
                        <ul>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Fonctionnalités</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Coucou</h2>
                        <ul>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Fonctionnalités</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Coucou</h2>
                        <ul>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Fonctionnalités</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }
}

