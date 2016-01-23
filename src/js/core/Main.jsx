import $                                from 'jquery';
import React, { Component, PropTypes, TransitionGroup }  from 'react';
import classNames                       from 'classnames';
import { Router, Route, Link, browserHistory } from 'react-router';
import CircleTransition                        from 'component/CircleTransition';

export default class Main extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        setTimeout( () => {
           console.log(TransitionGroup);
        }, 1200 );
    }

    render() {
        return (
            <div className="main">
                <div >
                    <h1>Whire whire W</h1>
                        <CircleTransition>
                            <div>Documentation</div>
                        </CircleTransition>
                        <Link to={`reader`}>
                            <button className="primary special-button naira">
                                <i className="icon icon-heart"/>
                                <span>Blog</span>
                            </button>
                        </Link>
                        <Link to={`vitrine`}>
                            <button className="primary special-button naira">
                                <i className="icon icon-heart"/>
                                <span>Landing</span>
                            </button>
                        </Link>
                        <Link to={`demo`}>
                            <button className="primary special-button naira">
                                <i className="icon icon-heart"/>
                                <span>Demo</span>
                            </button>
                        </Link>
                </div>
            </div> 
        );
    }
}
