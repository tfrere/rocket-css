import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';

import ReactDOM                 from 'react-dom';
import ReactTooltip             from 'react-tooltip';

import FixedBackground           from 'component/FixedBackground';
import NavBar                    from 'component/NavBar';
import SideMenu                  from 'component/SideMenu';
import ShareMenu                 from 'component/ShareMenu';
import ScrollProgress            from 'component/ScrollProgress';
import VideoHandler              from 'component/VideoHandler';
import CountDown                 from 'component/CountDown';
import KeyPress                  from 'component/KeyPress';

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
                <KeyPress/>
                <NavBar isTop={true} fixed={true}>
                    <ul>
                        <li><a href="">Contact</a></li>
                        <li><a href="">A propos</a></li>
                        <li><a href=""><i className="icon icon-heart icon-2x"/></a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </NavBar>

                <FixedBackground position="fixed-background-vitrine" filter="brightness" image="images/background/animated/thegrid-blocks.gif">
                    <h1>Build UI speeder than ever</h1>
                    <h4>With this new toolkit</h4>
                    <button className="primary">Join the revolution</button>
                </FixedBackground>
                <div style={{padding:"80px"}} className="subtle-grey">
                    <div className="page row row-gutter">
                        <div className="cell">
                          <a href=""className="card">
                            <figure>
                                <img src="images/background/impress-letters.jpg"/>
                            </figure>
                            <h3>I'm 4</h3>
                            <p> <small> Description </small> </p>
                          </a>
                        </div>
                      <div className="cell">
                          <a href=""className="card">
                            <figure>
                                <img src="images/background/thegrid-blocks.jpg"/>
                            </figure>
                            <h3>I'm 5</h3>
                            <p><small> Description </small></p>
                          </a>
                      </div>
                        <div style={{padding:"80px"}} className="cell cell-centerforce-2">
                            <h3>Other awesome apps</h3>
                            <p><small> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</small></p>
                        </div>
                    </div>
                </div>

                <div className="page">
                  <div className="card active">
                    <div className="row">
                        <div className="cell cell-center">
                            <h5>0€/month</h5>
                            <h3>Free plan</h3>
                            <p> Description </p>
                        </div>
                        <div className="card active cell">
                            <h5>0€/month</h5>
                            <h3>Free plan</h3>
                            <p> Description </p>
                        </div>
                        <div className="cell cell-center">
                            <h5>0€/month</h5>
                            <h3>Free plan</h3>
                            <p> Description </p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="row row-gutter">
                  <div className="cell">
                    <div className="mockup-wrapper">
                        <VideoHandler/>
                    </div>
                  </div>
                  <div className="cell cell-center">
                    <div className="center">
                        <h5>Time's left</h5>
                        <CountDown/>
                        <p><small>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</small></p>
                    </div>
                  </div>
                </div>
                <div className="subtle-grey">
                    <div className="page">
                        <p  style={{padding:"80px"}}><small> It's a development kit that provides the most basic styles as a foundation, but it's ready to adopt whatever your design or style is. It's a development kit that provides the most basic styles as a foundation, but it's ready to adopt whatever your design or style is. </small></p>
                    </div>
                </div>
                <FixedBackground fixed={true} filter="1977" image="images/background/thegrid-right-blocks.png">
                    <div style={{padding:"80px"}}>
                        <h1>Build UI speeder than ever</h1>
                        <h4>With this new toolkit</h4>
                        <button className="primary">Join the revolution</button>
                    </div>
                </FixedBackground>
                <div className="subtle-grey">
                    <div className="page">
                        <p  style={{padding:"80px"}}><small> It's a development kit that provides the most basic styles as a foundation, but it's ready to adopt whatever your design or style is. It's a development kit that provides the most basic styles as a foundation, but it's ready to adopt whatever your design or style is. </small></p>
                    </div>
                </div>
                <footer>
                    <div className="page row row-gutter">
                        <div className="cell">
                            <h2>Contact</h2>
                            <hr className="half"/>
                            <ul>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Fonctionnalités</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                        </div>
                        <div className="cell">
                            <h2>Social</h2>
                            <hr className="half"/>
                            <ul>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Fonctionnalités</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                        </div>
                        <div className="cell">
                            <h2>Coucou</h2>
                            <hr className="half"/>
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

