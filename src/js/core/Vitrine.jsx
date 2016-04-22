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


export default class Vitrine extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }   
    render() {

        return (
            <div className="screen-box vitrine">
                <ScrollProgress/>
                
                <FixedBackground position="fixed-background-vitrine" image="images/background/animated/sunrise.gif">
                    <div className="page punchline">
                        <h1>L’Agence<br/> qui<br/> <i>vous</i><br/> accompagne<br/> au<br/> quotidien</h1>
                    </div>
                </FixedBackground>

                <div>
                    <div className="page padding">
                        <h2 className="h1">Votre image</h2>
                        <p className="two-col-text">L'identité visuelle est au cœur des stratégies de communication. Elle véhicule l'image de l'entreprise et représente un vecteur important de crédibilité. Dans un monde ou tout besoin de services commence par une recherche sur internet, une présence numérique et une identité structurée sont des facteurs nécessaires pour rassurer et inciter à la prise de contact.        Faire appel à des professionnels vous permet de garder l’esprit libre et vous concentrer sur votre cœur de métier.Votre communication sera cohérente et uniformisée, en adéquation avec vos valeurs et vos objectifs.</p>
                    </div>
                    {/*hexagon()*/}
                </div>                
                <div className="dark">
                     <div className="page padding">
                        <h2>Réseaux sociaux</h2>
                        <p>Les réseaux sociaux offrent de formidables possibilités dans le cadre d’une stratégie de communication web. Interactifs, conviviaux et accessibles à tous, ils sont devenus indispensables pour promouvoir votre société. Facebook, Twitter & TripAdvisor représentent de véritables communautés d’échange et de partage extrêmement bénéfiques pour votre activité.  Communiquer sur les réseaux sociaux vous permet de fidéliser vos clients en entretenant un lien direct avec eux, mais aussi d’en conquérir de nouveaux. BlueScreen vous propose la prise en charge de votre e-communication en adéquation avec vos besoins et votre budget. Nous avons l’expertise pour vous accompagner dans la création, la personnalisation et l’animation régulière de vos pages Facebook, Instagram, TripAdvisor et Youtube.</p>
                     </div>
                </div>
                <div id="contact" className="subtle-grey">
                    <div className="page padding">
                        <h2>Développement d’application web et mobile</h2>
                        <p>25 millions de français possèdent un smartphone : si vous ne devriez retenir une seule information pour vous motiver à investir dans le web mobile, ce serait celle-ci (source: Mobile Marketing Association). Nous ne pouvons ignorer ce changement des modes de consommation de l’information ou des contenus, il est essentiel de répondre à ce besoin du consommateur. Il souhaite se simplifier la vie et recherche à répondre à ces besoins d’une façon simple et intuitive. Les applications web et mobiles permettent de faciliter le processus d’achat ou d'interaction avec votre clientèle, cependant cette stratégie doit être calculée et réfléchie de manière globale.Alors que vous soyez en recherche de compétence ou de partenariat, n’hésitez pas à nous contacter pour concrétiser votre projet ! Nous développons notre propre solution web, Peon !(L’agence est en capacité de développer votre projet aussi bien en terme de développement qu’en terme de communication.)</p>
                    </div>
                </div> 
            </div>
        );
    }
}

