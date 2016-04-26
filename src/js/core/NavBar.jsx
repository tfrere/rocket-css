import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';
import ScrollProgress                   from 'component/ScrollProgress';
import { Router, Route, Link, browserHistory } from 'react-router';

import BurgerMenu                       from 'component/BurgerMenu';

export default class NavBar extends Component {

    constructor( props ) {
        super( props );
        this.props = {
            isAlwaysFixed: true,
            isTop: false,
            isBottom: false
        };
        this.state = {
            fixed : false,
            fadeIn : false,
            fadeOut: false,
            minified: false,
            scrollTop: -1,
            active: false
        };
        this.scroll = ::this.scroll;
        this.onClick = ::this.onClick;

    }

    onClick() {
        console.log("child");
         this.setState({active: !this.state.active });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }

    scroll( event ) {
        const scrollTop = window.scrollY;
        const isScrollingUp = this.state.scrollTop > scrollTop;

        let { fadeIn, minified } = this.state, fadeOut = false;

        const fixed = scrollTop > 150;
        //console.log(fixed);
        
        if ( scrollTop > 300 && !isScrollingUp ) {
            fadeIn = true;
            fadeOut = false;
        }
        if ( scrollTop < 300 && isScrollingUp ) {
            fadeIn = false;
            fadeOut = true;
        }

        if ( scrollTop > 600 && !isScrollingUp ) {
            minified = true;
        }
        if ( scrollTop < 600 ) {
            minified = false;
        }

        this.setState( { scrollTop, fixed, fadeIn, fadeOut, minified } );
    }
    render() {
        return (
            <div className="screen-box">
            <nav className={ classNames( 
                'navbar',
                { top : this.props.isTop },
                { bottom : this.props.isBottom }, 
                { fixed : this.state.fixed } ,
                { minified : this.state.minified } , 
                { fixedFadeIn : this.state.fadeIn } ,
                { fixedFadeOut : this.state.fadeOut } 
            ) }>
                <a className="logo" href="#">
                    <h3>Blue Screen</h3>
                </a>
                <ul className={ classNames( { active : this.state.active } ) }>
                    <li>
                        <Link onClick={::this.onClick} activeClassName='active' to={`/`}> Accueil </Link>
                    </li>
                    <li><Link onClick={::this.onClick} activeClassName='active' to={`/services`}> Services </Link></li>
                    <li><Link onClick={::this.onClick} activeClassName='active' to={`/agence`}> L'agence </Link></li>
                    <li><Link onClick={::this.onClick} activeClassName='active' to={`/contact`}> Contact </Link></li>
                </ul>
                <BurgerMenu onClick={::this.onClick}/>
            </nav>
            { this.props.children }
            <footer name="footer" className="footer" id="footer">
                <div className="page row">
                    <hr/>
                    <div className="cell">
                        <h4>Se connecter</h4>
                        <hr className="lines light"/>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Pinterest</a></li>
                        </ul>
                    </div>
                    <div className="cell">
                        <h4>Légal</h4>
                        <hr className="lines light"/>
                        <ul>
                            <li><a href="#">Mentions légales</a></li>
                            <li><a href="#">Kit de presse</a></li>
                            <li><a href="#">Nous contacter</a></li>
                        </ul>
                    </div>
                    <div className="cell cell-center">
                        <a className="logo" href="#">
                            <h3>Blue Screen</h3>
                        </a>
                    </div>
                </div>
            </footer>
            <div className="credentials">
                <div className="page row row-gutter">
                    <p><small className="bold">© 2016 Blue Screen. Tous droits reservés.</small></p>
                </div>
            </div>
            </div>
        );
    }
}
