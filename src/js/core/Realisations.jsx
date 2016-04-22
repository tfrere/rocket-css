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


export default class Realisations extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {

        return (
            <div className="screen-box realisations">
                <ScrollProgress/>
                
                <FixedBackground position="fixed-background-vitrine" image="images/background/animated/sunrise.gif">
                    <div className="page punchline">
                        <h1>Ce qu'on à déjà fait</h1>
                    </div>
                </FixedBackground>

                <div className="page padding">
                    <h2 className="h1">Realisations</h2>
                    <p className="two-col-text">L'identité visuelle est au cœur des stratégies de communication. Elle véhicule l'image de l'entreprise et représente un vecteur important de crédibilité. Dans un monde ou tout besoin de services commence par une recherche sur internet, une présence numérique et une identité structurée sont des facteurs nécessaires pour rassurer et inciter à la prise de contact.        Faire appel à des professionnels vous permet de garder l’esprit libre et vous concentrer sur votre cœur de métier.Votre communication sera cohérente et uniformisée, en adéquation avec vos valeurs et vos objectifs.</p>
                </div>
            </div>
        );
    }
}

