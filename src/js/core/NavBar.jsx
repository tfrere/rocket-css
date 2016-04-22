import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';
import ScrollProgress                   from 'component/ScrollProgress';
import { Router, Route, Link, browserHistory } from 'react-router';


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
            scrollTop: -1
        };
        this.scroll = ::this.scroll;
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
                <ul className="page">
                    <li><a href="#">
                            <h3>Blue Screen</h3>
                        </a>
                    </li>
                    <li>
                        <Link activeClassName='active' to={`/`}> Accueil </Link>
                    </li>
                    <li><Link activeClassName='active' to={`/services`}> Les services </Link></li>
                    <li><Link activeClassName='active' to={`/realisations`}> Realisations </Link></li>
                    <li><Link activeClassName='active' to={`/contact`}> Contact </Link></li>
                </ul>
            </nav>
            { this.props.children }
            <footer name="footer" className="footer" id="footer">
                <div className="page row row-gutter">
                    <div className="cell">
                        <h2>Blue Screen</h2>
                        <hr/>
                        <p> Copygright blabla </p>
                    </div>

                </div>
            </footer>
            </div>
        );
    }
}
