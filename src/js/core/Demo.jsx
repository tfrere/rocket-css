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
import Images                   from 'config/image';
import Placeholders             from 'config/placeholder';

import Config                   from 'config/config';

export default class demo extends Component {

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <div className="screen-box demo">
                <KeyPress/>

                <div className="center">
                    <article>
                      <h2>Grid</h2>
                      <div>
                        <div className="row row-gutter row-center">
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                        </div>
                        <div className="row row-gutter row-center">
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                        </div>
                        <div className="row row-gutter">
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                        </div>
                        <div className="row row-gutter">
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                          <div className="cell">
                            <div className="demo-cell"></div>
                          </div>
                        </div>
                        <div className="row row-gutter">
                          <div className="cell cell-center">
                            <div className="demo-cell">
                              <div className="row row-gutter">
                                <div className="cell cell-center">
                                  <div className="demo-cell"></div>
                                </div>
                                <div className="cell">
                                  <div className="demo-cell"></div>
                                </div>
                                <div className="cell">
                                  <div className="demo-cell"></div>
                                </div>
                                <div className="cell">
                                  <div className="demo-cell"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cell">
                            <div className="demo-cell">
                              <div className="row row-gutter">
                                <div className="cell">
                                  <div className="demo-cell">
                                    <div className="row row-gutter">
                                      <div className="cell">
                                        <div className="demo-cell"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="cell">
                                  <div className="demo-cell">
                                    <div className="row row-gutter">
                                      <div className="cell">
                                        <div className="demo-cell"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cell cell-center">
                            <div className="demo-cell">
                              <div className="row row-gutter">
                                <div className="cell cell-center">
                                  <div className="demo-cell"></div>
                                </div>
                                <div className="cell">
                                  <div className="demo-cell"></div>
                                </div>
                                <div className="cell">
                                  <div className="demo-cell"></div>
                                </div>
                                <div className="cell">
                                  <div className="demo-cell"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row row-gutter">
                          <div className="cell">
                            <div className="row row-gutter force-4 row-right">
                              <div className="cell">
                                <div className="demo-cell"></div>
                              </div>
                              <div className="cell">
                                <div className="demo-cell"></div>
                              </div>
                            </div>
                          </div>
                          <div className="cell">
                            <div className="row row-gutter force-4 row-left">
                              <div className="cell">
                                <div className="demo-cell"></div>
                              </div>
                              <div className="cell">
                                <div className="demo-cell"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row row-gutter">
                          <div className="cell">
                            <div className="row row-gutter force-6 row-right">
                              <div className="cell">
                                <div className="demo-cell"></div>
                              </div>
                              <div className="cell">
                                <div className="demo-cell"></div>
                              </div>
                            </div>
                          </div>
                          <div className="cell">
                            <div className="row row-gutter force-6 row-left">
                              <div className="cell">
                                <div className="demo-cell"></div>
                              </div>
                              <div className="cell">
                                <div className="demo-cell"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        <h2>Simple Forms</h2>
                        <form>
                            <div className="row row-gutter">
                                <div className="cell" >
                                    <input className="large" placeholder="Email" type="text"/>
                                </div>
                                <div className="cell" >
                                    <input className="large" placeholder="Sujet" type="text"/>
                                </div>
                            </div>
                            <div className="row">
                                <textarea className="large" className="cell" placeholder="Message" />
                            </div>
                            <button>
                                Valider
                            </button>
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
                        <blockquote className="pullquote"><p>The less you reveal the more people can wonder.</p><footer>- Henri Ford.</footer></blockquote>
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
                        <div className="inclined">
                            <img src="images/background/animated/ui.gif"/>
                        </div>
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
                    </article>
                </div>
            </div>
        );
    }
}

