import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

export default class Input extends Component {

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
			<div id="name" className={ classNames( 'input-box', { focus : this.state.active } ) }>
				<label> Name </label>
				<input onClick={ ::this.onClick } className="large" type="text" required/>
			</div>
        );
    }
}
