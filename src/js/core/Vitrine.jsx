import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';

import ReactDOM                 from 'react-dom';
import ReactTooltip             from 'react-tooltip';
import Carousel                 from 'nuka-carousel';
import Slider                   from 'react-slick';

import FixedBackground           from 'component/FixedBackground';
import SideMenu                  from 'component/SideMenu';
import ShareMenu                 from 'component/ShareMenu';
import ScrollProgress            from 'component/ScrollProgress';
import VideoHandler              from 'component/VideoHandler';
import CountDown                 from 'component/CountDown';
import KeyPress                  from 'component/KeyPress';
import Waypoint                  from 'component/Waypoint';

import Typographies             from 'config/typography';
import Colors                   from 'config/color';
import Images                   from 'config/image';
import Placeholders             from 'config/placeholder';

import Config                   from 'config/config';

import {hexagon}                from './Hexagon.jsx';

export default class Vitrine extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }   
    render() {

        return (
            <div className="screen-box vitrine">
                <ScrollProgress/>
                
                <FixedBackground position="fixed-background-vitrine" image="images/background/animated/sunrise.gif">
                    <div className="page big-punchline">
                        <h1>L’Agence qui <i>vous</i> accompagne<br/> au quotidien.</h1>
                    </div>
                </FixedBackground>

                <div>
                    <div className="page double-padding">
                        <h5 className="subtitle"> Une stratégie sur-mesure </h5>
                        <h2 className="h1">Votre image</h2>
                        <p className="three-col-text">L'identité visuelle est au cœur des stratégies de communication. Elle véhicule l'image de l'entreprise et représente un vecteur important de crédibilité. Dans un monde ou tout besoin de services commence par une recherche sur internet, une présence numérique et une identité structurée sont des facteurs nécessaires pour rassurer et inciter à la prise de contact. Faire appel à des professionnels vous permet de garder l’esprit libre et vous concentrer sur votre cœur de métier. En adéquation avec vos valeurs et objectifs, votre communication sera cohérente et uniformisée.</p>
                    </div>
                    {/*hexagon()*/}
                </div>                
                <div className="subtle-grey">
                    <div className="page double-padding">
                        <div className="row row-gutter row-auto-height">
                            <div className="cell force-3">
                                <div className="screen-box">
                                    <img className="image-icon" src="images/agence/social.svg"/>
                                </div>
                            </div>
                            <div className="cell social-text">
                                <div>
                                    <h2>Les réseaux sociaux</h2>
                                    <p>
                                        Les réseaux sociaux offrent de formidables possibilités dans le cadre d’une stratégie de communication web. 
                                        <b> Interactifs, conviviaux et accessibles à tous,</b> ils sont devenus indispensables pour promouvoir votre société.
                                        Facebook, Twitter & TripAdvisor représentent de véritables <b>communautés d’échange et 
                                        de partage</b> extrêmement bénéfiques pour votre activité.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <FixedBackground position="fixed-background-med" image="images/background/central/everest.jpg">
                        <Carousel>
                            <div className="double-padding text-center">
                                <h1 style={{userSelect: "none"}}>
                                    Notre travail ?
                                </h1>
                                <p className="biggest">
                                    Vous rendre <b className="i">beau</b>, <b className="i">crédible</b> et <b className="i">accessible</b>.
                                </p>
                            </div>
                            <div className="double-padding text-center">
                                <h1 style={{userSelect: "none"}}>
                                    Notre travail ?
                                </h1>
                                <p className="biggest">
                                    Vous rendre <b className="i">beau</b>, <b className="i">crédible</b> et <b className="i">accessible</b>.
                                </p>
                            </div>
                            <div className="double-padding text-center">
                                <h1 style={{userSelect: "none"}}>
                                    Notre travail ?
                                </h1>
                                <p className="biggest">
                                    Vous rendre <b className="i">beau</b>, <b className="i">crédible</b> et <b className="i">accessible</b>.
                                </p>
                            </div>
                        </Carousel>            
                    </FixedBackground>
                </div>
                <div className="subtle-grey">
                    <div className="page double-padding">
                        <div className="row row-gutter row-auto-height">
                            <div className="cell mobile-text">
                                <div>
                                    <h2>Développement d’application<br/> <i>web</i> et <i>mobile</i></h2>
                                    <p>
                                        Les applications web ou mobiles font maintenant partie à part entière de notre vie de tous les jours. Ce canal de communication en plein essor représente un enjeu stratégique pour les entreprises et collectivités. 
                                    </p>
                                </div>
                            </div>
                            <div className="cell force-3">
                                <div className="screen-box">
                                    <img className="image-icon" src="images/agence/webmobile.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trust">
                    <div className="page add-padding">
                        <div className="row row-gutter row-auto-height">
                            <div className="cell force-5">
                                <div>
                                    <img src="images/bpifrance.png"/>
                                </div>
                            </div>
                            <div className="cell force-5">
                                <div>
                                    <img src="images/matthieuricard.png"/>
                                </div>
                            </div>
                            <div className="cell force-5">
                                <div>
                                    <img src="images/cglorraine.jpg"/>
                                </div>
                            </div>
                            <div className="cell force-5">
                                <div>
                                    <img src="images/humabio.png"/>
                                </div>
                            </div>
                            <div className="cell force-5">
                                <div>
                                    <img src="images/labrh.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

