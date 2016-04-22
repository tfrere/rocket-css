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

                <div className="page padding">
                    <h2 className="h1">Services</h2>
                    <p className="two-col-text"> Le Digitale  Site internet Référencement , Adwords Gestion des réseaux sociaux, Consulting    Facebook ,Instagram, Trip Advisor Campagne mailing, SMS  Communication Conception de supports de communication      carterie, flyer, dépliant, brochure, affiche, signalétique, stand, objet publicitaire, packaging  Logo Chartes graphiques Illustrations Photo  Events         Marketing Alternatif : Street marketing         Campagne sponsoring         Développement         Consulting  Développement d’application web et mobile</p>
                </div>
            </div>
        );
    }
}

