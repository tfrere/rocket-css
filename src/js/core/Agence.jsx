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
                        <h1>Une société<br/> <i>coopérative</i> et <i>participative</i></h1>
                    </div>
                </FixedBackground>

                <div className="page double-padding">
                    <div className="row row-gutter">
                        <div className="cell">
                            <p className="lettrine text-left"> 
                                <b>BlueScreen</b> est fondé sur un <b>principe démocratique</b> qui défend des valeurs 
                                de <b>responsabilité</b>, de <b>solidarité</b> et de <b>transparence</b>. La répartition des résultats 
                                est prioritairement affectée à la pérennité des emplois et du projet d’entreprise.
                            </p>
                        </div>
                        <div className="cell force-3">
                            <h3>Objectifs</h3>
                            <ul>
                                <li><i className="icon b icon-check"/> Prestation de qualité</li>
                                <li><i className="icon b icon-check"/> Pas d'obsession de rentabilité</li>
                            </ul>
                        </div>
                    </div>
                    <blockquote className="pullquote">
                        <p className="h2">La coopérative est un outil au service des générations présentes et futures.</p>
                        <footer className="h4">Anonymous</footer>
                    </blockquote>
                    <p> 
                        Des rapports humains entre le client et l’agence. 
                        Nous sommes à votre disposition pour prendre le temps d’échanger sur votre projet. 
                        Le mot d’ordre de l’équipe est de simplifier la communication avec vous : on oublie 
                        nos termes techniques pour vous expliquer simplement ce que l’on met en place pour 
                        vous.
                    </p>
                    <p>
                        Nous accompagnons nos clients<i> à la demande</i>.<br/>
                        Si vous ressentez le besoin où l’envie d’approfondir une des thématiques, nous pouvons vous proposer des  
                        <b> « formations express »</b>.
                    </p>
                </div>
                <div className="subtle-grey">
                    <div className="page add-padding text-center">
                        <h2 className="h1">L'Equipe </h2>
                        <p className="page">
                            Une équipe jeune et connectée pour vous apporter le regard extérieur nécessaire pour envisager 
                            de nouvelles solutions efficaces.</p>
                        <div className="row row-gutter row-center add-padding">
                            <div className="cell force-3 member">
                                <div className="circle anthony"/>
                                <h4>Anthony Lacroix </h4>
                                <p>
                                    Développement commercial<br/> Gérant
                                </p>
                            </div>
                            <div className="cell force-3 member">
                                <div className="circle tritz"/>
                                <h4>Quentin Tritz </h4>
                                <p>
                                    Directeur de clientèle<br/> Community Manager
                                </p>
                            </div>
                            <div className="cell force-3 member">
                                <div className="circle marie"/>
                                <h4>Marie Madec </h4>
                                <p>
                                    Chargée de Communication<br/> Community Manager
                                </p>
                            </div>
                            <div className="cell force-3 member">
                                <div className="circle quentin"/>
                                <h4>Quentin Sombsthay </h4>
                                <p>
                                    Illustrateur<br/> Animateur
                                </p>
                            </div>
                            <div className="cell force-3 member">
                                <div className="circle thibaud"/>
                                <h4>Thibaud Frere </h4>
                                <p>
                                    Chef de projet<br/> Directeur artistique<br/> Développeur
                                </p>
                            </div>
                            <div className="cell force-3 member">
                                <div className="circle valentin"/>
                                <h4>Valentin Rebierre </h4>
                                <p>
                                    Développeur<br/> Administrateur Systeme
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

