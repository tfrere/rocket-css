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
import KeyPress                  from 'component/KeyPress';

import Typographies             from 'config/typography';
import Colors                   from 'config/color';
import Placeholders             from 'config/placeholder';

import Config                   from 'config/config';
 
export default class Guidelines extends Component {

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <div className="screen-box guidelines">
                <div className="center">
                      <article>
                        <h1>Demo page</h1>
                        <p> In this page, there is a sample of every block you can find in this toolkit and they are sorted by their abstraction level. Enjoy.</p>
                        <h2>Colors</h2>
                        <hr/>
                        <p>
                            You have 6 main colors and their derivate. You can call them by the class system or directly in your scss with the following syntax
                        </p>
                        <code> background-color: color("primary", "darken-1"); </code>
                        
                        <div className="row colors">
                          <div className="cell primary lighten-4"/>
                          <div className="cell primary lighten-3"/>
                          <div className="cell primary lighten-2"/>
                          <div className="cell primary lighten-1"/>
                          <div className="cell primary"/>
                          <div className="cell primary darken-1"/>
                          <div className="cell primary darken-2"/>
                          <div className="cell primary darken-3"/>
                          <div className="cell primary darken-4"/>
                          <div className="cell">Primary </div>
                        </div>
                        <div className="row colors">
                          <div className="cell complement lighten-4"/>
                          <div className="cell complement lighten-3"/>
                          <div className="cell complement lighten-2"/>
                          <div className="cell complement lighten-1"/>
                          <div className="cell complement"/>
                          <div className="cell complement darken-1"/>
                          <div className="cell complement darken-2"/>
                          <div className="cell complement darken-3"/>
                          <div className="cell complement darken-4"/>
                          <div className="cell">Complement </div>
                        </div>
                        <div className="row colors">
                          <div className="cell grey lighten-4"/>
                          <div className="cell grey lighten-3"/>
                          <div className="cell grey lighten-2"/>
                          <div className="cell grey lighten-1"/>
                          <div className="cell grey"/>
                          <div className="cell grey darken-1"/>
                          <div className="cell grey darken-2"/>
                          <div className="cell grey darken-3"/>
                          <div className="cell grey darken-4"/>
                          <div className="cell">Grey </div>
                        </div>
                        <div className="row colors">
                          <div className="cell danger lighten-4"/>
                          <div className="cell danger lighten-3"/>
                          <div className="cell danger lighten-2"/>
                          <div className="cell danger lighten-1"/>
                          <div className="cell danger"/>
                          <div className="cell danger darken-1"/>
                          <div className="cell danger darken-2"/>
                          <div className="cell danger darken-3"/>
                          <div className="cell danger darken-4"/>
                          <div className="cell">Danger </div>
                        </div>
                        <div className="row colors">
                          <div className="cell success lighten-4"/>
                          <div className="cell success lighten-3"/>
                          <div className="cell success lighten-2"/>
                          <div className="cell success lighten-1"/>
                          <div className="cell success"/>
                          <div className="cell success darken-1"/>
                          <div className="cell success darken-2"/>
                          <div className="cell success darken-3"/>
                          <div className="cell success darken-4"/>
                          <div className="cell">Success </div>
                        </div>
                        <div className="row colors">
                          <div className="cell info lighten-4"/>
                          <div className="cell info lighten-3"/>
                          <div className="cell info lighten-2"/>
                          <div className="cell info lighten-1"/>
                          <div className="cell info"/>
                          <div className="cell info darken-1"/>
                          <div className="cell info darken-2"/>
                          <div className="cell info darken-3"/>
                          <div className="cell info darken-4"/>
                          <div className="cell">Info </div>
                        </div>
                        <h2>Typography</h2>
                        <p>Normalize and typography, inspired by dave magache's skeleton.</p>
                        <hr/>
                        <h1>Title 1</h1>
                        <h2>Title 2</h2>
                        <h3>Title 3</h3>
                        <h4>Title 4</h4>
                        <h5>Title 5</h5>
                        <h6>Title 6</h6>
                        <p> This is a test </p>
                        <blockquote>I believe that we are who we choose to be. Nobody’s going to come and save you, you’ve got to save yourself. Nobody’s going to give you anything. You’ve got to go out and fight for it. Nobody knows what you want except for you. And nobody will be as sorry as you if you don’t get it. So don’t give up on your dreams.</blockquote>
                        <blockquote className="pullquote"><p>The less you reveal the more people can wonder.</p><footer>- Henri Ford.</footer></blockquote>
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
                        <form>
                            <div className="row row-gutter">
                                <div className="cell" >
                                    <input className="large" placeholder="Email" type="text"/>
                                </div>
                                <div className="cell" >
                                    <input className="large" placeholder="Email" type="text"/>
                                </div>
                                <div className="cell" >
                                    <div className="select select-noimage">
                                      <select className="large" type="text">
                                        <option>Coucou</option>
                                        <option>Test</option>
                                      </select>
                                    </div>
                                </div>
                            </div>
                            <textarea className="large" placeholder="your message"/>
                            <button className="button primary">
                                Valider
                            </button>
                        </form>

                      <h1> It's time to be more specific</h1>
                      <p>Note: All these following tools can be used by class or by include </p>
                      <h2> Special hrs</h2>
                      <hr/>
                      <hr className="lines"></hr>
                      <code> hr.lines </code>
                      <hr className="dashed"></hr>
                      <code> hr.dashed </code>
                      <hr className="dotted"></hr>
                      <code> hr.dotted </code>
                      <hr className="gradient"></hr>
                      <code> hr.gradient </code>
                      <hr className="stamp"></hr>
                      <code> hr.stamp </code>
                      <hr className="apple"></hr>
                      <code> hr.apple </code>
                      <h2> Special buttons</h2>
                      <hr/>
                      <p>
                          Buttons styles are inspired by codrops.
                      </p>
                      <code> @include naira(color, background-color); </code>
                      <button className="naira">
                          <i className="icon icon-heart"/>
                          <span>Valider</span>
                      </button>
                      <code> @include push(color, background-color); </code>
                      <button className="push">
                          Valider
                      </button>
                      <h2> Loader</h2>
                      <hr/>
                      <p>
                          A bunch of loaders inspired by <a href="https://connoratherton.com/loaders">loaders.scss</a>
                      </p>
                      <div className="ball-pulse">
                        <div/>
                        <div/>
                        <div/>
                      </div>
                      <code> @include ball-pulse(color); </code>
                      <div className="ball-scale">
                        <div/>
                      </div>
                      <code> @include ball-scale(color); </code>
                      <div className="line-scale">
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                      </div>
                      <code> @include line-scale(color); </code>
                      <div className="circle-line-scale">
                        <div/>
                        <div/>
                        <div/>
                      </div>
                      <code> @include circle-line-scale(color); </code>

                      <h2>Navigation</h2>
                      <hr/>
                      <p> Hover effects on navigation menu inspired by </p>
                    </article>
                      <nav>
                        <ul>
                          <li className='underline-by-left'>
                            <a href="">Home</a>
                          </li>
                        </ul>
                        <code> @extend underline-by-left; </code>
                        <ul>
                          <li className='underline-by-right'>
                            <a href="">About</a>
                          </li>
                        </ul>
                        <code> @extend underline-by-right; </code>
                        <ul>
                          <li className='underline-by-scale'>
                            <a href="">Blog</a>
                          </li>
                        </ul>
                        <code> @extend underline-by-scale; </code>
                        <ul>
                          <li className='underline-by-double'>
                            <a href="">Contact</a>
                          </li>
                        </ul>
                        <code> @extend underline-by-double; </code>
                        <ul>
                          <li className='underline-fancy'>
                            <a href="">FAQ</a>
                          </li>
                        </ul>
                        <code> @extend underline-fancy; </code>
                      </nav>
                </div>
            </div>
        );
    }
}

