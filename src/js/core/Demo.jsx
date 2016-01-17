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

export default class Demo extends Component {

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <div className="screen-box demo">
                <div className="center">
                    <p> It's a development kit that provides the most basic styles as a foundation, but it's ready to adopt whatever your design or style is. </p>
                    <h1>What's in the box ?</h1>
                    <hr className="lines"/>
                    <h2>Grid</h2>
                </div>
                <div className="row">
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-11"/>
                    <div className="col-xs-2"/>
                    <div className="col-xs-10"/>
                </div>
                <div className="large-row">
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-1"/>
                    <div className="col-xs-11"/>
                    <div className="col-xs-2"/>
                    <div className="col-xs-10"/>
                </div>
                <div className="center">
                    <h2>Offset</h2>
                </div>
                <div className="row">
                    <div className="off-xs-2 col-xs-4"/>
                    <div className="col-xs-4"/>
                    <div className="off-xs-3 col-xs-3"/>
                    <div className="col-xs-3"/>
                    <div className="off-xs-4 col-xs-2"/>
                    <div className="col-xs-2"/>
                    <div className="off-xs-5 col-xs-1"/>
                    <div className="col-xs-1"/>
                </div>
                <div className="center">
                    <h2>Nesting</h2>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <div className="large-row">
                            <div className="col-xs-2"/>
                            <div className="col-xs-2"/>
                            <div className="col-xs-2"/>
                            <div className="col-xs-2"/>
                            <div className="col-xs-2"/>
                            <div className="col-xs-2"/>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="large-row">
                            <div className="col-xs-2"/>
                            <div className="col-xs-2"/>
                            <div className="col-xs-2"/>
                            <div className="col-xs-2"/>
                            <div className="col-xs-2"/>
                            <div className="col-xs-2"/>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <h2>Variable height</h2>
                </div>
                <div className="flex-row">
                    <div className="col-xs-2"/>
                    <div className="col-xs-2"/>
                    <div className="col-xs-2"/>
                    <div className="col-xs-2"/>
                    <div className="col-xs-2"/>
                    <div className="col-xs-2"/>
                    <div className="col-xs-2"/>
                    <div className="col-xs-2"/>
                    <div className="col-xs-2"/>
                    <div className="col-xs-2"/>
                    <div className="col-xs-2"/>
                    <div className="col-xs-2"/>
                </div>
                <div className="center">
                    <h2>UltimateGrid</h2>
                </div>
                <div className="Grid Grid--gutter">
                    <div className="Grid-cell"><div/></div>
                    <div className="Grid-cell"><div/></div>
                    <div className="Grid-cell"><div/></div>
                    <div className="Grid-cell"><div/></div>
                    <div className="Grid-cell"><div/></div>
                    <div className="Grid-cell"><div/></div>
                    <div className="Grid-cell"><div/></div>
                    <div className="Grid-cell"><div/></div>
                    <div className="Grid-cell"><div/></div>
                    <div className="Grid-cell"><div/></div>
                    <div className="Grid-cell"><div/></div>
                </div>
                
                <div className="Grid Grid--gutter">

                    <div className="Grid-cell">
                        <div>
                            <div className="Grid Grid--gutter">
                                
                                <div className="Grid-cell"><div/></div>
                                <div className="Grid-cell"><div/></div>
                                <div className="Grid-cell">
                                    <div>
                                        <div className="Grid Grid--gutter">
                                            <div className="Grid-cell"><div/></div>
                                            <div className="Grid-cell"><div/></div>
                                            <div className="Grid-cell"><div/></div>
                                        </div>
                                    </div>

                                </div>
                            
                            </div>
                        </div>
                    </div>
                
                </div>

                <div className="center">
                    <h2>Centered height</h2>
                </div>
                <div className="center-row">
                    <div className="col-xs-6"/>
                    <div className="col-xs-6"/>
                </div>
                <article>
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
                    <h2>Simple Forms</h2>
                    <form>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea />
                        <button/>
                    </form>
                    <form className="material">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea />
                        <button/>
                    </form>
                    <h2>Simple titles</h2>
                    <h1>Title 1</h1>
                    <h2>Title 2</h2>
                    <h3>Title 3</h3>
                    <h4>Title 4</h4>
                    <h5>Title 5</h5>
                    <h6>Title 6</h6>
                    <h2>Simple quotes</h2>
                    <h3>Simple single line quote</h3>
                    <blockquote>I believe that we are who we choose to be. Nobody’s going to come and save you, you’ve got to save yourself. Nobody’s going to give you anything. You’ve got to go out and fight for it. Nobody knows what you want except for you. And nobody will be as sorry as you if you don’t get it. So don’t give up on your dreams.</blockquote>
                    <h3>Simple multi line quote</h3>
                    <blockquote className="pullquote">The less you reveal the more people can wonder.</blockquote>
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
                    <h2>Simple image</h2>
                    <img src="images/background/animated/ui.gif"/>
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
            </div>
        );
    }
}

