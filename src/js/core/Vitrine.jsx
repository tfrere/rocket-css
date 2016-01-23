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
                        <li className="right-stroke"><a href="">Contact</a></li>
                        <li className="right-stroke"><a href="">A propos</a></li>
                        <li><a href=""><i className="icon logo icon-heart icon-2x"/></a></li>
                        <li className="left-stroke"><a href="">Portfolio</a></li>
                        <li className="left-stroke"><a href="">Blog</a></li>
                    </ul>
                </NavBar>

                <FixedBackground position="fixed-background-vitrine" image="images/background/boreal.jpg">
                    <h1>Build UI speeder than ever</h1>
                    <h4>With this new toolkit</h4>
                    <button className="special-button naira">
                        <i className="icon icon-heart"/>
                        <span>Join the revolution</span>
                    </button>
                </FixedBackground>
                <div style={{padding:"80px"}} className="row row-gutter">
                  <div className="cell">
                    <div className="mockup-wrapper">
                    </div>
                  </div>

                  <div className="cell cell-center">
                    <div style={{padding:"40px"}} className="center">
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
                <div className="dark">
                    <div className="row">
                        <div className="cell force-2">
                            <FixedBackground gradient={true} gradientColor="#263238" gradientDirection="to right" position="everest" image="images/background/everest.jpg"/>
                        </div>
                      <div className="cell force-2 cell-center">
                         <div style={{padding:"80px"}}>
                            <h2>Time's left</h2>
                            <p><small>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</small></p>
                         </div>
                      </div>
                    </div>
                </div>
                <div style={{padding:"80px"}} className="page pricing">
                    <div className="row row-gutter">
                        <div className="cell cell-center">
                             <div className="card hover color">
                                <h2>4.9 <span>€</span></h2>
                                <small>/ month</small>
                                <h3>Member plan</h3>
                                <hr className="tiny centered"/>
                                <p><small> For small business </small></p>
                                <button className="button primary">Subscribe</button>
                            </div>
                        </div>
                        <div className="cell cell-center">
                             <div className="card hover color active">
                                <h2>0 <span>€</span></h2>
                                <small>/ month</small>
                                <h3>Free plan</h3>
                                <hr className="tiny centered"/>
                                <p><small> Free account is the best choice you could do</small></p>
                                <button className="button primary">Subscribe</button>
                            </div>

                        </div>
                        <div className="cell cell-center">
                             <div className="card hover color">
                                <h2>49.0 <span>€</span></h2>
                                <small>/ month</small>
                                <h3>Free plan</h3>
                                <hr className="tiny centered"/>
                                <p><small> For big partnership </small></p>
                                <button className="button primary">Subscribe</button>
                            </div>
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
                        <h1>Discover a new world</h1>
                        <h4>a world of possibilities</h4>
                        <button className="special-button naira">
                            <i className="icon icon-heart"/>
                            <span>Join us</span>
                        </button>
                    </div>
                </FixedBackground>
                <footer>
                    <div className="page row row-gutter">
                        <div className="cell">
                            <h2>Contact</h2>
                            <hr className="tiny light lines"/>
                            <ul>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Fonctionnalités</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                        </div>
                        <div className="cell">
                            <h2>Social</h2>
                            <hr className="tiny light lines"/>
                            <ul>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Fonctionnalités</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                        </div>
                        <div className="cell">
                            <h2>Coucou</h2>
                            <hr className="tiny light lines"/>
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

