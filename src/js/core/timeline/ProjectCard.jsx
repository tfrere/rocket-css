

import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import ReactDOM                 from 'react-dom';
import classNames               from 'classnames';

import Articles                 from 'config/articles';

export default class ProjectCard extends Component {
 
    static defaultProps = {
        onClick : () => true
    };

    constructor( props ) {
        super( props );
        this.state = {active:false};
        this.onClick = this.onClick.bind(this);
    }
    componentWillMount() {
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentWillUnmount() {
    }

    onClick() {

        console.log("onclickarticle");
         this.props.onClick();
         this.setState( { active: true } );

        setTimeout( () => {
            console.log(this.props.history);
            this.props.history.pushState(null, '/project/'+ this.props.id);
            this.setState( { active : false } );
        }, 600 );
    }

    render() {

        return (
            <div className={ classNames( {clicked:this.state.active} ) }>
                <a onClick={ ::this.onClick }>
                    <div className={classNames("delay-" + this.props.id)}>
                        <div className="circle"></div>
                        <figure>
                            <img src={this.props.data.imgUrl} />
                            <div className="data">
                                <h5 className="italic">{this.props.data.month}</h5>
                                <h2>{this.props.data.title}</h2>
                                <p>{this.props.data.short}</p>
                                <span>{this.props.data.purpose}</span>
                            </div>
                        </figure>
                    </div>
                </a>
            </div>
        );
    }
}

