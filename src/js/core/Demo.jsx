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
import Input                     from 'component/Input';


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
                        <hr/>
                      </article>
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
                        <code>
                            .row
                              .cell
                              .cell
                            .row.force-2
                              .cell
                              .cell
                        </code>
                      </div>
                    <article>
                      <h2>Nav</h2>
                      <hr/>
                    </article>
                    <nav>
                      <ul>
                        <li className='left-stroke'>
                          <a href="">Home</a>
                        </li>
                        <li className='right-stroke'>
                          <a href="">About</a>
                        </li>
                        <li className='scale-stroke'>
                          <a href="">Blog</a>
                        </li>
                        <li className='double-stroke'>
                          <a href="">Contact</a>
                        </li>
                        <li className='fancy-stroke'>
                          <a href="">FAQ</a>
                        </li>
                      </ul>
                    </nav>
                    <article>
                        <h2> Forms</h2>
                        <hr/>
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
                            <div className="row">
                                <textarea className="large" className="cell" placeholder="Message" />
                            </div>
                            <Input/>
                            <Input/>
                            <Input/>
                            <h2> Buttons</h2>
                            <hr/>
                            <button className="button click rounded primary">
                                Valider
                            </button>
                            <button className="button click rounded primary">
                                Valider
                            </button>
                            <button className="button complement">
                                Valider
                            </button>
                            <button className="button big">
                                Valider
                            </button>
                            <button className="button success">
                                Valider
                            </button>
                            <button className="button danger">
                                Valider
                            </button>
                            <button className="button info">
                                Valider
                            </button>
                            <button className="button disabled">
                                Valider
                            </button>
                            <h2> Special buttons</h2>
                            <hr/>
                            <button className="special-button naira complement">
                                <i className="icon icon-heart"/>
                                <span>Valider</span>
                            </button>
                        </form>
                        <h2>Titles</h2>
                        <hr/>
                        <h1>Title 1</h1>
                        <h2>Title 2</h2>
                        <h3>Title 3</h3>
                        <h4>Title 4</h4>
                        <h5>Title 5</h5>
                        <h6>Title 6</h6>
                        <h2> quotes</h2>
                        <h3> single line quote</h3>
                        <blockquote>I believe that we are who we choose to be. Nobody’s going to come and save you, you’ve got to save yourself. Nobody’s going to give you anything. You’ve got to go out and fight for it. Nobody knows what you want except for you. And nobody will be as sorry as you if you don’t get it. So don’t give up on your dreams.</blockquote>
                        <h3> multi line quote</h3>
                        <blockquote className="pullquote"><p>The less you reveal the more people can wonder.</p><footer>- Henri Ford.</footer></blockquote>
                        <h2> hr</h2>
                        <hr></hr>
                        <hr className="lines"></hr>
                        <hr className="dashed"></hr>
                        <hr className="dotted"></hr>
                        <hr className="gradient"></hr>
                        <hr className="stamp"></hr>
                        <hr className="apple"></hr>
                        <h2> code</h2>
                        <hr/>
                        <code>{Placeholders.code}</code>
                        <h2> image</h2>
                        <hr/>
                        <img src="images/background/animated/ui.gif"/>
                        <div className="inclined">
                            <img src="images/background/animated/ui.gif"/>
                        </div>
                         <h2> list</h2>
                         <hr/>
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

