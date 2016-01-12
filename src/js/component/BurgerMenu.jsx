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

    }

    onClick() {
         this.props.onClick();
         this.setState( { active: !this.state.active } );
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div onClick={ ::this.onClick } className={ classNames( 'burger-menu', { active : this.state.active } ) }>
                <div></div>
            </div>
        );
    }
}
