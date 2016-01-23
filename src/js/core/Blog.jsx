import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
// import { Router, Route, Link } from 'react-router'
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
import Images                   from 'config/image';
import Placeholders             from 'config/placeholder';

import Config                   from 'config/config';
import KeyPress                 from 'component/KeyPress';

export default class Blog extends Component {


    constructor( props ) {
        super( props );
        this.state = {};
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
                <div className="page">
                    <div className="row row-gutter">
                      <div className="cell">
                        <div className="">
                            <figure>
                                <img src="images/background/medusa.jpg"/>
                            </figure>
                            <h5> Article </h5>
                        </div>
                      </div>
                    </div>
                    <div className="row row-gutter">
                      <div className="cell">
                        <div className="">
                            <figure>
                                <img src="images/background/medusa.jpg"/>
                            </figure>
                            <h5> Article </h5>
                        </div>
                      </div>
                      <div className="cell">
                        <div className="">
                            <figure>
                                <img src="images/background/medusa.jpg"/>
                            </figure>
                            <h5> Article </h5>
                        </div>
                      </div>
                    </div>
                    <div className="row row-gutter">
                      <div className="cell">
                        <div className="">
                            <figure>
                                <img src="images/background/medusa.jpg"/>
                            </figure>
                            <h5> Article </h5>
                        </div>
                      </div>
                      <div className="cell">
                        <div className="">
                            <figure>
                                <img src="images/background/medusa.jpg"/>
                            </figure>
                            <h5> Article </h5>
                        </div>
                      </div>
                      <div className="cell">
                        <div className="">
                            <figure>
                                <img src="images/background/medusa.jpg"/>
                            </figure>
                            <h5> Article </h5>
                        </div>
                      </div>
                      <div className="cell">
                        <div className="">
                            <figure>
                                <img src="images/background/medusa.jpg"/>
                            </figure>
                            <h5> Article </h5>
                        </div>
                      </div>
                    </div>
                    <footer>
                        <h6>A reading <a href="http://tfrere.fr">experiment</a></h6>
                    </footer>
                </div>
            </div>
        );
    }
}

