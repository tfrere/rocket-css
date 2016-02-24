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
                    <h1>React toolkit</h1>
                    <h5>Let's build UI with less than 100 lines of css</h5>
                        <div className="button-box">
                            <Link to={`demo`}>
                                <button>
                                    Demo
                                </button>
                            </Link>
                            <Link to={`blog`}>
                                <button>
                                    Blog
                                </button>
                            </Link>
                            <Link to={`vitrine`}>
                                <button>
                                    Vitrine
                                </button>
                            </Link>
                        </div>
                </div>
            </div> 
        );
    }
}
