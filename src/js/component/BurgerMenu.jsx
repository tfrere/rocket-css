import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

export default class BurgerMenu extends Component {

    static defaultProps = {
        onClick : () => true
    };

    constructor( props ) {
        super( props );
        this.state = {};
        this.scroll = ::this.scroll;
        this.resize = ::this.resize;

    }

    onClick() {
         this.props.onClick();
         this.setState( { active: !this.state.active } );
    }

    scroll( event ) {
        this.setState({active: false });
    }

    resize(event) {
        this.setState({active: false });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
        window.removeEventListener('scroll', this.scroll);
    }


    render() {
        return (
            <div onClick={ ::this.onClick } className={ classNames( 'burger-menu', { active : this.state.active } ) }>
                <div></div>
            </div>
        );
    }
}
