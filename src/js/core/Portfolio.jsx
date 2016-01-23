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

export default class Portfolio extends Component {

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
                    <nav>
                      <ul>
                        <li className='scale-stroke'>
                          <a href="">About</a>
                        </li>
                        <li className='scale-stroke'>
                          <a href="">Blog</a>
                        </li>
                        <li className='scale-stroke'>
                          <a href="">Contact</a>
                        </li>
                      </ul>
                    </nav>
            </div>
        );
    }
}

