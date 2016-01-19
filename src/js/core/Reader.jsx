import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
// import { Router, Route, Link } from 'react-router'
import ReactDOM                 from 'react-dom';
import classNames               from 'classnames';
import ReactTooltip             from 'react-tooltip';

import FixedBackground           from 'component/FixedBackground';
import NavBar                    from 'component/NavBar';
import SideMenu                  from 'component/SideMenu';
import ShareMenu                 from 'component/ShareMenu';
import ScrollProgress            from 'component/ScrollProgress';

import Typographies             from 'config/typography';
import Colors                   from 'config/color';
import Images                   from 'config/image';
import Placeholders             from 'config/placeholder';

import Config                   from 'config/config';
import KeyPress                 from 'component/KeyPress';

export default class Reader extends Component {
    
    constructor( props ) {
        super( props );
        this.state = {};
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <div className="screen-box reader">
                <ScrollProgress/>
                <KeyPress/>
                <ShareMenu>
                    <div>
                        <h3>Share this story</h3>
                        <ul>
                            <li data-tip="facebook">
                                <a href="">
                                    <i className="icon icon-3x icon-facebook"/>
                                </a>
                            </li>
                            <li data-tip="twitter">
                                <a href="">
                                    <i className="icon icon-3x icon-twitter"/>
                                </a>
                            </li>
                            <li data-tip="google+">
                                <a href="">
                                    <i className="icon icon-3x icon-google-plus"/>
                                </a>
                            </li>
                        </ul>
                        <ReactTooltip place="bottom" type="light" effect="solid"/>
                    </div>
                </ShareMenu>
                <SideMenu>
                    <h3>Other stories</h3>
                    <ul>
                        <li className="delay-1">
                            <a className="item" href="">
                                <img src="images/background/impress-letters.jpg"/>
                                <div className="box">
                                    <h4>La typographie au 21e siècle</h4>
                                    <h6>23 APRIL 2016</h6>
                                </div>
                            </a>
                        </li>
                        <li className="delay-2">
                            <a className="item" href="">
                                <img src="images/background/photography.jpg"/>
                                <div className="box">
                                    <h4>Composition is not a mess</h4>
                                    <h6>23 APRIL 2016</h6>
                                </div>
                            </a>
                        </li>
                        <li className="delay-3">
                            <a className="item" href="">
                                <img src="images/reader/flower-color.jpg"/>
                                <div className="box">
                                    <h4>Meaning of colors</h4>
                                    <h6>23 APRIL 2016</h6>
                                </div>
                            </a>
                        </li>
                        <li className="delay-4">
                            <a className="item" href="">
                                <img src="images/background/animated/production.gif"/>
                                <div className="box">
                                    <h4>React components</h4>
                                    <h6>23 APRIL 2016</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                </SideMenu>
                <FixedBackground position="fixed-background-reader" fullscreen={true} filter="brightness" image="images/background/impress.jpg">
                    <h1>La typographie au 21e siècle</h1>
                    <h4 className="b">24 JAN 2015</h4>
                </FixedBackground>
                <div className="page">
                    <article className={ classNames({active:this.state.active}) }>
                        <p>
                            <b>Typographie</b>, à l'heure où j'écris ces lignes, 
                            la typo sur le web tends à s'améliorer. Le probleme est de bien
                            comprendre les briques d'abstraction que l'on utilise. 
                            Cet article est là pour faire une <b>synthèse des connaissances requises</b>.
                            Les ressources glanées au fil de l'article présenteront 
                            chaque concept dans sa globalitée.
                        </p>
                        <p>
                            <small>
                                Appuyer sur <code>²</code> pour afficher une grille verticale.
                            </small>
                        </p>
                        <h1>On commence par ou ?</h1>
                        <hr/>
                        <ul className="ul">
                            <li>Au fil des âges</li>
                            <li>A l'ère d'internet</li>
                            <li>En concret</li>
                            <ul>
                                <li>Les classifications</li>
                                <li>Taille</li>
                                <li>Ligne de base</li>
                            </ul>
                            <li>Créer sa propre typographie</li>
                            <li>A travers le monde</li>
                            <li>Conclusion</li>
                            <li>Crédits</li>
                        </ul>
                        <h1>Au fil des âges</h1>
                        <hr/>
                        <p>
                            Pour bien comprendre ou l'on est, 
                            il est important de comprendre d'où l'on vient.
                            Et si l'on regarde un peu en arrière,
                            on ne vient pas de si loin.
                        </p>
                        <img src="images/reader/volumen.jpg"/>
                        <p>
                            Voilà le volumen. Où l'ancètre de la page web.
                            Puis, le codex débarque avec les romains
                        </p>
                        <img src="images/reader/codex.jpg"/>
                        <p>
                            Finalement, notre page web est plus proche du volumen
                            que du codex.
                        </p>
                        <h1>A l'ère d'internet</h1>
                        <hr/>
                        <p>
                            Depuis qu'internet à débarqué, un retour en arrière
                            s'est opéré sur notre contôle de son affichage. 
                            Il nous aura fallu plusieurs années pour en arriver à 
                            un ensemble de techniques pour palier à cela.
                        </p>
                        <h1>Concrètement</h1>
                        <hr/>
                        <p>
                            Trèves de bavardages, on arrive au coeur du problème,
                            comment je les rends jolies moi ?
                        </p>
                        <h2>Les différentes classifications</h2>
                        <p>
                            De nos jours, il existe tellement de typographies gratuites 
                            de qualité sur internet. Pour éclairer nos choix, différentes 
                            classifications ont été étudiées.
                        </p>
                            <ul className="ul">
                                <li>Vox-atypi</li>
                                <li>Thibaudeau</li>
                                <li>Chronologique</li>
                            </ul>
                        <p>
                            Ici, nous ne parlerons que de la classification vox atypi 
                            qui est, selon moi, la plus complète.
                        </p>
                        <img className="big" src="images/reader/classification-vox.png"/>
                        <h2>Oui, la taille compte</h2>
                        <p>
                            Dans un second temps, sur notre page web,
                            bien choisir le rapport d'aggrandissement entre vos titres 
                            est primordial. Pour cela, plusieurs typographes ont recours 
                            au <a href="http://www.modularscale.com/?16,28&px&1.618&web&text">modular-scale</a>. Ce puissant outil nous permet
                            d'appliquer simplement cette logique en fonction du ratio désiré.
                        </p>
                        <h2>L'alignement vertical</h2>
                        <p>
                            <img className="left" src="images/reader/typo-grid.jpg"/>
                            Une fois votre ratio choisi, maîtriser l'aligment vertical de votre page
                            est primordial. Pour ça encore, des outils ont été étudiés. Le très bon <a href="">SassLine</a> 
                            nous gère pour nous tout l'alignement vertical de notre page. Plutôt exhaustif, il gère également
                            les medias queries et prends en compte la taille du bloc contenant votre text.
                        </p>
                        <h1>A travers le monde</h1>
                        <hr/>
                        <p>
                            Il est important de noter que notre utilisation de la typographie
                            dans la vie de tous les jours ne représente pas l'intégralité 
                            des problématiques rencontrées.
                            Voilà un petit aperçu des carractères utilisés.
                        </p>
                        <p>
                            <i><small>currencies</small></i><br/>
                            ₳ ​ ฿ ​ ₵ ​¢ ​₡ ​₢ ​ $ ​₫ ​₯ ​ ₠ ​€ ​ ƒ ​₣ ​ ₲ ​<br/>
                            ₴ ​ ₭ ​ ₺ ​ ℳ ​₥ ​ ₦ ​ ₧ ​₱ ​₰ ​£ ​ ៛ ​₽ ​₹ ₨ ​ ₪ ​ ৳ ​₸ ​₮ ​ ₩ ​ ¥<br/>
                            <br/>
                            <i><small>hebrew</small></i><br/>
                            בראשית ברא אלהים את השמים ואת הארץ׃<br/>
                            <br/>
                            <i><small>corean</small></i><br/>
                            사과·배·복숭아·수박은 모두 과일이다.<br/>
                            <br/>
                            <i><small>chinese</small></i><br/>
                            燦爛的中國文明 標點符號的用法<br/>
                            <br/>
                            <i><small>japaneese</small></i><br/>
                            パーソナル・コンピューター <br/>
                            <br/>
                            <i><small>others</small></i><br/>                         <br/>
                            ¶ § “ ” ‘ ’ † ‡ © ™<br/>
                            № ¡ ¿ # º ª ‰ ‱ ′ ″ ‴ ‖<br/>
                            ⁂ ❧ ☞ ‽ ⸮ ◊ ※ ⁀ ¤<br/>
                            <br/>
                        </p>
                        <h1>Conclusion</h1>
                        <hr/>
                        <p>
                            A l'heure ou j'écris ces lignes, la typographie sur le web 
                            en est à ses belles heures, diverses librairies sont à disposition 
                            pour vous aider à mieux appréhender vos designs. Pour conclure,
                            voici une citation qui représente bien le concept.
                        </p>
                        <blockquote className="pullquote">
                            <p>
                                Typography is the craft of endowing human language with a durable visual form.
                            </p>
                            <footer>
                                - Robert Bringhurst, The Elements of Typographic Style
                            </footer>
                        </blockquote>
                        <h2> Outils</h2>
                        <ul className="ul">
                            <li>
                                <a href="http://clagnut.com/sandbox/css3/">
                                    CSS3 Font settings
                                </a>
                            </li>

                            <li>
                                <a href="http://www.modularscale.com/?16,28&px&1.618&web&text">
                                    Modular scale
                                </a>
                            </li>
                        </ul>
                        <h2>Credits</h2>
                        <ul className="ul">
                            <li>
                                <a href="http://www.dailymotion.com/video/xfpf08_la-macrotypographie-de-la-page-web-anne-sophie-fradier_tech">
                                    Conférence - La macrotypographie de la page web
                                </a>
                            </li>
                        </ul>
                        <ul className="tag">
                            <li>Animation</li>
                            <li>Design</li>
                            <li>Typography</li>
                            <li>Motion</li>
                            <li>UX / UI</li>
                        </ul>
                    </article>
                </div>
                <a href="">
                    <FixedBackground filter="nashville" fixed={false} image="images/reader/flower-color.jpg">
                        <div style={{padding:'50px'}}>
                            <h4 className="b">Prochain article</h4>
                            <h1>La couleur dans tous ses états</h1>
                        </div>
                    </FixedBackground>
                </a>
                <footer>
                    <h6>A reading <a href="http://tfrere.fr">experiment</a></h6>
                </footer>
            </div>
        );
    }
}

