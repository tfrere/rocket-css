import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

export default class CircleTransition extends Component {

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
            <div className={ classNames( 'circle-transition-wrapper', { active : this.state.active } ) }>
                <div onClick={ ::this.onClick } className="circle-transition-button">
                    <button className="primary special-button naira">
                        <i className="icon icon-heart"/>
                        <span> Test </span>
                    </button>
                </div>
                <div className="circle-transition-overlay"/>
                <div className="circle-transition">
                    {this.props.children}
                </div>
            </div> 
        );
    }
}
