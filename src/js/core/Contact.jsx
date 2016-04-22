import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';

import ReactDOM                 from 'react-dom';
import ReactTooltip             from 'react-tooltip';

import FixedBackground           from 'component/FixedBackground';
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

import {hexagon}                from './Hexagon.jsx';


export default class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {

        return (
            <div className="screen-box contact">
                <ScrollProgress/>
                <FixedBackground position="fixed-background-vitrine" image="images/background/animated/sunrise.gif">
                    <div className="page punchline">
                        <h1>Venez boire un verre</h1>
                    </div>
                </FixedBackground>

                <div className="page padding">
                    <h2 className="h1">Coordonnées</h2>
                    <p className="two-col-text">BLUESCREEN 13 rue Saint Gengoulf  57000 METZ Tel / Mail </p>
                </div>
            </div>
        );
    }
}

