import $                                from 'jquery';
import React, { Component, PropTypes, TransitionGroup }  from 'react';
import classNames                       from 'classnames';
import { Router, Route, Link, browserHistory } from 'react-router';

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
                    <div className="row">
                        <h1>Ui toolkit</h1>
                    </div>
                    <hr className="lines"/>
                    <div className="row">
                        <div className="cell">
                            <Link className="card" to={`demo`}>
                                Documentation
                            </Link>
                        </div>
                        <div className="cell">
                            <Link className="card" to={`reader`}>
                                Article
                            </Link>
                        </div>
                        <div className="cell">
                            <Link className="card" to={`vitrine`}>
                                Landing
                            </Link>
                        </div>
                        <div className="cell">
                            <Link className="card" to={`vitrine`}>
                                Portfolio
                            </Link>
                        </div>
                        <div className="cell">
                            <Link className="card" to={`vitrine`}>
                                Interface
                            </Link>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
