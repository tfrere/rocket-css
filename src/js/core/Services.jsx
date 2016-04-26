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


export default class Services extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
        
    render() {

        return (
            <div className="screen-box services">
                <ScrollProgress/>
                
                <FixedBackground position="fixed-background-vitrine" image="images/background/animated/sunrise.gif">
                    <div className="page punchline">
                        <h1>Nos domaines d'expertises</h1>
                    </div>
                </FixedBackground>

                <div className="page double-padding">
                    <div className="row">
                        <a className="cell force-2 card">
                            <i className="icon icon-fullscreen"/>
                            <h4>Digital</h4>
                            <ul>
                                <li> Site internet </li>
                                <li> Référencement, Adwords </li>
                                <li> Gestion des réseaux sociaux </li>
                                <li> Campagne mailing, SMS </li>
                            </ul>
                        </a>
                        <a className="cell force-2 card">
                            <i className="icon icon-create"/>
                            <h4>Communication</h4>
                            <ul>
                                <li> Support de communication </li>
                                <li> Logo </li>
                                <li> Charte Graphique </li>
                                <li> Illustration </li>
                                <li> Photographie </li>
                            </ul>
                        </a>
                        <a className="cell force-2 card">
                            <i className="icon icon-schedule"/>
                            <h4>Evenementiel</h4>
                            <ul>
                                <li> Street Marketing </li>
                                <li> Campagne sponso </li>
                                <li> Charte Graphique </li>
                                <li> Illustration </li>
                                <li> Photographie </li>
                            </ul>
                        </a>
                        <a className="cell force-2 card">
                            <i className="icon icon-favorite"/>
                            <h4>Développement</h4>
                            <ul>
                                <li> Consulting </li>
                                <li> Expertise mobile </li>
                                <li> Expertise web responsive </li>
                                <li> Déploiement </li>
                            </ul>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

