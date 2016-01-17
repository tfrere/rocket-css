import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';

import ReactDOM                 from 'react-dom';
import ReactTooltip             from 'react-tooltip';
//import fs                       from 'fs';
//import ReactCanvas              from 'react-canvas';


import FixedBackground           from 'component/FixedBackground';
import NavBar                    from 'component/NavBar';
import SideMenu                  from 'component/SideMenu';
import ShareMenu                 from 'component/ShareMenu';
import ScrollProgress            from 'component/ScrollProgress';
import VideoHandler              from 'component/VideoHandler';
import CountDown                 from 'component/CountDown';

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
                <div className="subtle-grey">
                    <div className="page">
                        <div className="center">
                            <h1>Other awesome apps</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                      <div className="one-quart">
                          <a href=""className="card">
                            <figure>
                                <img src="images/background/animated/horse.gif"/>
                            </figure>
                            <h3>I'm 4</h3>
                            <p> Description </p>
                          </a>
                      </div>
                      <div className="one-quart">
                          <a href=""className="card">
                            <figure>
                                <img src="images/background/animated/horse.gif"/>
                            </figure>
                            <h3>I'm 5</h3>
                            <p> Description </p>
                          </a>
                      </div>
                      <div className="one-quart">
                          <a href=""className="card"> 
                            <figure>
                                <img src="images/background/animated/horse.gif"/>
                            </figure>
                            <h3>I'm 6</h3>
                            <p> Description </p>
                          </a>
                      </div>
                      <div className="one-quart">
                          <a href=""className="card">
                            <figure>
                                <img src="images/background/animated/horse.gif"/>
                            </figure>
                            <h3>I'm 6</h3>
                            <p> Description </p>
                          </a>
                      </div>
                    </div>
                </div>
                <div className="mockup-wrapper">
                    <VideoHandler/>
                </div>
                <div className="center">
                    <CountDown/>
                </div>
                <div className="page">
                  <div className="one-third card">
                    <h5>0€/month</h5>
                    <h3>Free plan</h3>
                    <p> Description </p>
                  </div>
                  <div className="one-third card active">
                    <h5>5€/month</h5>
                    <h3>Member plan</h3>
                    <p> Description </p>
                  </div>
                  <div className="one-third card">
                    <h5>50€/month</h5>
                    <h3>Business plan</h3>
                    <p> Description </p>
                  </div>
                </div>
                <div className="center">
                    <p> It's a development kit that provides the most basic styles as a foundation, but it's ready to adopt whatever your design or style is. </p>
                </div>
                <footer className="subtle-grey">
                    <div className="page">
                        <div className="one-third">
                            <h2>Contact</h2>
                            <ul>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Fonctionnalités</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                        </div>
                        <div className="one-third">
                            <h2>Social</h2>
                            <ul>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Fonctionnalités</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                        </div>
                        <div className="one-third">
                            <h2>Coucou</h2>
                            <ul>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Fonctionnalités</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                        </div>

                    </div>
                </footer>
            </div>
        );
    }
}

