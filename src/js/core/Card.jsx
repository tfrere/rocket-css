

import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import ReactDOM                 from 'react-dom';
import classNames               from 'classnames';

import Articles                 from 'config/articles';

export default class Blog extends Component {
 
    static defaultProps = {
        onClick : () => true
    };

    constructor( props ) {
        super( props );
        this.state = {active:false};
        this.onClick = this.onClick.bind(this);
    }

    onClick() {

        console.log("onclickarticle");
         this.props.onClick();
         this.setState( { active: true } );

        setTimeout( () => {
            console.log(this.props.history);
            this.props.history.pushState(null, '/blog/article/'+ this.props.id);
            this.setState( { active : false } );
        }, 1500 );
    }

    componentWillMount() {
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentWillUnmount() {
    }
    render() {

        return (
            <div className={ classNames(
                "cell",
                { "force-1" : this.props.id == 0 },
                { "force-2" : this.props.id != 0 } 
            ) }>
                <a onClick={ ::this.onClick }>
                    <div className={classNames("card hover delay-" + this.props.id, {clicked:this.state.active})}>
                        <figure>
                            <img src={this.props.data.imgUrl} />
                            <div className="data">
                                <i className="icon icon-heart"/>
                                <h5>{this.props.data.creationDate} | {this.props.data.title}</h5>
                            </div>
                        </figure>
                    </div>
                </a>
            </div>
        );
    }
}

