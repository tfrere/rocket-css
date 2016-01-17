import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

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
        const scrollTop = event.srcElement.body.scrollTop;
        const isScrollingUp = this.state.scrollTop > scrollTop;

        let { fadeIn, minified } = this.state, fadeOut = false;

        const fixed = scrollTop > 150;

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
            <nav className={ classNames( 
                'navbar',
                { top : this.props.isTop },
                { bottom : this.props.isBottom }, 
                { fixed : this.state.fixed } ,
                { minified : this.state.minified } , 
                { fixedFadeIn : this.state.fadeIn } ,
                { fixedFadeOut : this.state.fadeOut } 
            ) }>
                { this.props.children }
            </nav>
        );
    }
}
