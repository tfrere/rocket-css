import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

import Config                           from 'config/config';

export default class FixedBackground extends Component {

    static defaultProps = {
        image: "",
        filter: "",
        position:"",
        fixed: true
    }

    constructor( props ) {
        super( props );
        this.state = {
            isLoaded : false
        };
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState( { isLoaded : true } );
        }, 1500 );
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <section className={ classNames(
                                'fixed-background',
                                this.props.position,
                                { fixed : this.props.fixed } ) }>
                <div className="section-gradient"></div>
                <div
                    className={ classNames(  "section-background " + this.props.filter, { visible : this.state.isLoaded } ) } 
                    style={{backgroundImage: "url("+ this.props.image + ")"}}  >
                </div>
                <div className="section-content">
                    { this.props.children }
                </div>
            </section>
        );
    }
    
}
