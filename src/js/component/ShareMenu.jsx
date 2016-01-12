import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

export default class ShareMenu extends Component {

    static defaultProps = {
        onClick : () => true
    };

    constructor( props ) {
        super( props );
        this.state = {};

        this.scroll = this.scroll.bind(this);
    }

    onClick() {
         this.props.onClick();
         this.setState( { active: !this.state.active } );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }

    scroll() {
        var scrollTop = event.srcElement.body.scrollTop;
        var screenHeight = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        if(scrollTop >= screenHeight / 8)
            this.setState({ displayed: true });
        else
            this.setState({ displayed: false });
    }

    render() {
        return (
            <div className={ classNames( 'share-menu-wrapper', { active : this.state.active }, { displayed : this.state.displayed } ) }>
                <div onClick={ ::this.onClick } className="share-menu-button">
                    <i className="icon icon-heart"/>
                    <div/>
                </div>
                <div className="share-menu-overlay"/>
                <div className="share-menu">
                    {this.props.children}
                </div>
            </div> 
        );
    }
}
