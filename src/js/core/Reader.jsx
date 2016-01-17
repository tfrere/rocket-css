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
import KeyPress from 'component/KeyPress';
export default class Reader extends Component {
    
    constructor( props ) {
        super( props );
        this.state = {};

    }

    onClick() {
         this.props.onClick();
         console.log(this.state.active);
         this.setState( { active: !this.state.active } );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <div className="screen-box reader">
                <ScrollProgress/>
                <KeyPress/>
                <ShareMenu>
                    <div>
                        <h3>Share this story</h3>
                        <ul>
                            <li data-tip="facebook">
                                <a href="">
                                    <i className="icon icon-4x icon-share"/>
                                </a>
                            </li>
                            <li data-tip="facebook">
                                <a href="">
                                    <i className="icon icon-4x icon-share"/>
                                </a>
                            </li>
                            <li data-tip="facebook">
                                <a href="">
                                    <i className="icon icon-4x icon-share"/>
                                </a>
                            </li>
                            <li data-tip="facebook">
                                <a href="">
                                    <i className="icon icon-4x icon-share"/>
                                </a>
                            </li>
                        </ul>
                        <ReactTooltip place="bottom" type="light" effect="solid"/>
                    </div>
                </ShareMenu>
                <SideMenu onClick={this.onClick.bind(this)}>
                    <h3>Other stories</h3>
                    <ul>
                        <li className="delay-1">
                            <a className="card" href="">
                                <figure>
                                    <img className="nashville" src="images/background/texture/trees.jpg"/>
                                </figure>
                                <h5>React.js - Component rocks</h5>
                                <h6>23 APRIL 2016 - BY TFRERE</h6>
                            </a>
                        </li>
                        <li className="delay-2">
                            <a className="card" href="">
                                <figure>
                                    <img className="nashville" src="images/background/medusa.jpg"/>
                                </figure>
                                <h5>Angular is dead</h5>
                                <h6>23 APRIL 2016 - BY TFRERE</h6>
                            </a>
                        </li>
                        <li className="delay-3">
                            <a className="card" href="">
                                <figure>
                                    <img className="nashville" src="images/background/medusa.jpg"/>
                                </figure>
                                <h5>Angular is dead</h5>
                                <h6>23 APRIL 2016 - BY TFRERE</h6>
                            </a>
                        </li>
                        <li className="delay-4">
                            <a className="card" href="">
                                <figure>
                                    <img className="nashville" src="images/background/medusa.jpg"/>
                                </figure>
                                <h5>Angular is dead</h5>
                                <h6>23 APRIL 2016 - BY TFRERE</h6>
                            </a>
                        </li>
                        <li className="delay-5">
                            <a className="card" href="">
                                <figure>
                                    <img className="nashville" src="images/background/medusa.jpg"/>
                                </figure>
                                <h5>Angular is dead</h5>
                                <h6>23 APRIL 2016 - BY TFRERE</h6>
                            </a>
                        </li>
                    </ul>
                </SideMenu>
                <FixedBackground position="fixed-background-reader" fullscreen={true} filter="nashville" image="images/background/greece.jpg">
                    <h1>React.js - Components rocks</h1>
                    <h4 className="b">24 JAN 2015 - BY TFRERE</h4>
                </FixedBackground>
                <div className="page">
                    <article className={ classNames({active:this.state.active}) }>
                        <p> Cheat sheet a development kit that provides the most basic styles as a foundation, but it's ready to adopt whatever your design or style is. </p>
                        <h1>What's in the box ?</h1>
                        <hr/>
                        <blockquote className="pullquote">The less you reveal the more people can wonder.</blockquote>
                        <p> Cheat sheet a development kit that provides the most basic styles as a foundation, but it's ready to adopt whatever your design or style is. </p>
                        <code>{Placeholders.code}</code>
                        <blockquote>I believe that we are who we choose to be. Nobody’s going to come and save you, you’ve got to save yourself. Nobody’s going to give you anything. You’ve got to go out and fight for it. Nobody knows what you want except for you. And nobody will be as sorry as you if you don’t get it. So don’t give up on your dreams.</blockquote>
                        <h2>To do</h2>
                        <ul className="ul">
                            <li>Make mistakes</li>
                            <ul>
                                <li>Restart</li>
                                <ul>
                                    <li>Again</li>
                                    <li>And again</li>
                                </ul>
                                <li>...</li>
                            </ul>
                        </ul>
                        <hr></hr>
                        <hr className="lines"></hr>
                        <hr className="dashed"></hr>
                        <hr className="dotted"></hr>
                        <hr className="gradient"></hr>
                        <hr className="stamp"></hr>
                        <hr className="apple"></hr>
                        <aside>
                            <p>Cheat sheet a development kit that provides the most basic styles as a foundation, but it's ready to adopt whatever your design or style is.</p>
                        </aside>
                        <img src="images/background/central/food.jpg"/>
                        <p>
                            <i><small>currencies</small></i><br/>
                            ₳ ​ ฿ ​ ₵ ​¢ ​₡ ​₢ ​ $ ​₫ ​₯ ​ ₠ ​€ ​ ƒ ​₣ ​ ₲ ​<br/>
                            ₴ ​ ₭ ​ ₺ ​ ℳ ​₥ ​ ₦ ​ ₧ ​₱ ​₰ ​£ ​ ៛ ​₽ ​₹ ₨ ​ ₪ ​ ৳ ​₸ ​₮ ​ ₩ ​ ¥<br/>
                            <br/>
                            <i><small>hebrew</small></i><br/>
                            בראשית ברא אלהים את השמים ואת הארץ׃<br/>
                            <br/>
                            <i><small>corean</small></i><br/>
                            사과·배·복숭아·수박은 모두 과일이다.<br/>
                            <br/>
                            <i><small>chinese</small></i><br/>
                            燦爛的中國文明 標點符號的用法<br/>
                            <br/>
                            <i><small>japaneese</small></i><br/>
                            パーソナル・コンピューター <br/>
                            <br/>
                            <i><small>others</small></i><br/>                         <br/>
                            ¶ § “ ” ‘ ’ † ‡ © ™<br/>
                            № ¡ ¿ # º ª ‰ ‱ ′ ″ ‴ ‖<br/>
                            ⁂ ❧ ☞ ‽ ⸮ ◊ ※ ⁀ ¤<br/>
                            <br/>
                            <h2> The end.</h2>
                        </p>
                        <ul className="tag">
                            <li>Animation</li>
                            <li>Design</li>
                            <li>Typography</li>
                            <li>Motion</li>
                            <li>UX / UI</li>
                        </ul>
                    </article>
                </div>
                <a href="">
                    <FixedBackground filter="nashville" fixed={false} image="images/background/animated/horse.gif">
                        <div style={{padding:'50px'}}>
                            <h4 className="b">Next Story</h4>
                            <h1>Angular is dead</h1>
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

