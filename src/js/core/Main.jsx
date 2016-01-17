import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
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
    }

    render() {
        return (
            <div className="main">
                <div>
                    <div className="center">
                        <h1>Ui toolkit</h1>
                    </div>
                    <div className="center">
                        <Link className="card" to={`demo`}>
                            Demo
                        </Link>
                    </div>
                    <div className="one-third">
                        <Link className="card" to={`reader`}>
                            Reader
                        </Link>
                    </div>
                    <div className="one-third">
                        <Link className="card" to={`vitrine`}>
                            Vitrine
                        </Link>
                    </div>
                    <div className="one-third">
                        <Link className="card" to={`vitrine`}>
                            Interface
                        </Link>
                    </div>
                </div>
            </div> 
        );
    }
}
