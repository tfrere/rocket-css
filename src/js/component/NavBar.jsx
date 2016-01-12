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
            oldScrollValue: -1
        };
        this.scroll = this.scroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }

    scroll() {
        var scrollTop = event.srcElement.body.scrollTop;
        var isScrollingUp = (this.state.oldScrollValue > scrollTop) ? true : false;

        if (scrollTop > 150)
            this.setState( { fixed: true, fadeOut: false } );
        else
            this.setState( { fixed: false, fadeOut: false } );

        if (scrollTop > 300 && !isScrollingUp)
            this.setState( { fadeIn : true, fadeOut: false } );
        if (scrollTop < 300 && isScrollingUp)
            this.setState( { fadeIn : false, fadeOut: true } );

        if (scrollTop > 600 && !isScrollingUp)
            this.setState( { minified: true } );
        if (scrollTop < 600)
            this.setState( { minified: false } );

        this.setState( { oldScrollValue: scrollTop } );
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
