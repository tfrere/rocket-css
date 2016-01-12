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

import Typographies             from 'config/typography';
import Colors                   from 'config/color';
import Images                   from 'config/image';
import Placeholders             from 'config/placeholder';

import Config                   from 'config/config';

export default class Reader extends Component {

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
                <SideMenu>
                    <h3>Other stories</h3>
                    <ul>
                        <li className="delay-1">
                            <a href="">
                                <img className="nashville" src="images/background/texture/trees.jpg"/>
                                <h5>React.js - Component rocks</h5>
                                <h6>23 APRIL 2016 - BY TFRERE</h6>
                            </a>
                        </li>
                        <li className="delay-2">
                            <a href="">
                                <img className="nashville" src="images/background/medusa.jpg"/>
                                <h5>Angular is dead</h5>
                                <h6>23 APRIL 2016 - BY TFRERE</h6>
                            </a>
                        </li>
                        <li className="delay-3">
                            <a href="">
                                <img className="nashville" src="images/background/medusa.jpg"/>
                                <h5>Angular is dead</h5>
                                <h6>23 APRIL 2016 - BY TFRERE</h6>
                            </a>
                        </li>
                        <li className="delay-4">
                            <a href="">
                                <img className="nashville" src="images/background/medusa.jpg"/>
                                <h5>Angular is dead</h5>
                                <h6>23 APRIL 2016 - BY TFRERE</h6>
                            </a>
                        </li>
                        <li className="delay-5">
                            <a href="">
                                <img className="nashville" src="images/background/medusa.jpg"/>
                                <h5>Angular is dead</h5>
                                <h6>23 APRIL 2016 - BY TFRERE</h6>
                            </a>
                        </li>
                    </ul>
                </SideMenu>
                <FixedBackground position="fixed-background-reader" fullscreen={true} filter="nashville" image="images/background/animated/horse.gif">
                    <i className="icon icon-bulb icon-2x"/>
                    <h1>React.js - Components rocks</h1>
                    <h4 className="b">24 JAN 2015 - BY TFRERE</h4>
                </FixedBackground>
                <article>
                    <p> It's a development kit that provides the most basic styles as a foundation, but it's ready to adopt whatever your design or style is. </p>
                    <h1>What's in the box ?</h1>
                    <hr className="lines"/>
                    <h2>Simple quotes</h2>
                    <h3>Simple single line quote</h3>
                    <q>The less you reveal the more people can wonder.</q>
                    <h3>Simple multi line quote</h3>
                    <blockquote>I believe that we are who we choose to be. Nobody’s going to come and save you, you’ve got to save yourself. Nobody’s going to give you anything. You’ve got to go out and fight for it. Nobody knows what you want except for you. And nobody will be as sorry as you if you don’t get it. So don’t give up on your dreams.</blockquote>
                    <h2>Simple list</h2>
                    <ul className="ul">
                        <li>Coucou</li>
                        <ul>
                            <li>Coucou</li>
                            <ul>
                                <li>Coucou</li>
                                <li>Coucou</li>
                            </ul>
                            <li>Coucou</li>
                        </ul>
                        <li>Coucou</li>
                    </ul>
                    <h2>Simple titles</h2>
                    <h1>Title 1</h1>
                    <h2>Title 2</h2>
                    <h3>Title 3</h3>
                    <h4>Title 4</h4>
                    <h5>Title 5</h5>
                    <h6>Title 6</h6>
                    <h2>Simple hr</h2>
                    <hr></hr>
                    <hr className="lines"></hr>
                    <hr className="dashed"></hr>
                    <hr className="dotted"></hr>
                    <hr className="gradient"></hr>
                    <hr className="stamp"></hr>
                    <hr className="apple"></hr>
                    <h2>Simple code</h2>
                    <code>{Placeholders.code}</code>
                    <h2>Simple pre</h2>
                    <pre>{Placeholders.code}</pre>
                    <h2>Simple image</h2>
                    <img src="images/background/animated/ui.gif"/>
                    <h2>Figure image</h2>
                    <figure>
                        <img src="images/background/animated/ui-2.gif"/>
                        <p> Coucou</p>
                    </figure>
                    <h2>Typography test</h2>
                    <p className="text-justify">
                        ¶ § “ ” ‘ ’ † ‡ © ™<br/>
                        № ¡ ¿ # º ª ‰ ‱ ′ ″ ‴ ‖<br/>
                        ⁂ ❧ ☞ ‽ ⸮ ◊ ※ ⁀ ¤<br/>
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
                    </p>
                </article>
                <a href="">
                    <FixedBackground filter="nashville" image="images/background/texture/trees.jpg">
                        <div style={{padding:'50px'}}>
                            <h4 className="b">Next Story</h4>
                            <h1>Angular is dead</h1>
                        </div>
                    </FixedBackground>
                </a>
                <footer>
                    <h6>A reading experiment from <a href="http://tfrere.fr">Tfrere</a></h6>
                </footer>
            </div>
        );
    }
}

