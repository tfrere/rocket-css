import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';
import BurgerMenu                from 'component/BurgerMenu';
import PreLoader                from 'component/PreLoader';
import { Router, Route, Link, browserHistory } from 'react-router';

import SmoothWheel  from 'component/SmoothWheel';

export default class Nav extends Component {


    static defaultProps = {
        onClick : () => true,
        url: ""
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

        console.log(this.props.location.pathname);

        var url = this.props.location.pathname;


        if (url == "/")
            var url = "Portfolio";
        else 
            url = url.replace(/\//g, '');

        return (
            <div>
                <SmoothWheel/>
                <div className={ classNames( 'nav-wrapper displayed', { active : this.state.active }) }>
                    <PreLoader/>
                    <div className="nav-info">
                        <h5>{url}</h5>
                    </div>

                    <div  className="nav-button">
                        <BurgerMenu onClick={ ::this.onClick }/>
                    </div>
                    <div className="nav-overlay"/>
                    <div className="nav">
                        <div>
                            <ul>
                                <li>
                                    <Link onClick={ ::this.onClick }
                                            activeClassName='active'
                                            to={`/blog`}
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ ::this.onClick }
                                            activeClassName='active'
                                            to={`/`}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ ::this.onClick }
                                            activeClassName='active'
                                            to={`/contact`}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <footer>
                                <Link onClick={ ::this.onClick }
                                        activeClassName='active'
                                        to={`/guidelines`}
                                >
                                    Guidelines
                                </Link>
                            </footer>
                        </div>
                    </div>
                </div> 
                {this.props.children}
            </div> 
        );
    }
}
