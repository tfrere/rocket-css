import _                        from 'lodash';
import $                        from 'jquery';
import React,
       { Component, PropTypes } from 'react';
import { Router, Route, Link }  from 'react-router'
import ReactDOM                 from 'react-dom';
import classNames               from 'classnames';

import Projects                 from 'config/projects';
import ProjectCard              from 'core/timeline/ProjectCard';
import ProjectWrapper           from 'core/timeline/ProjectWrapper';
import Project                  from 'core/timeline/Project';

import TypeName                 from 'core/timeline/TypeName';

import TweenMax from 'gsap/src/minified/TweenMax.min.js';
import TweenLite from 'gsap/src/minified/TweenLite.min.js';

export default class Timeline extends Component {

    static defaultProps = {
        onClick : () => true
    };

    constructor( props ) {
        super( props );
        this.state = {clicked:false};
        this.onClick = this.onClick.bind(this);
        this.tl = new TimelineLite();
    }

    onClick() {
        console.log("onclickblog");
         this.props.onClick();
         this.setState( { clicked: true } );
        setTimeout( () => {
            this.setState( { clicked : false } );
        }, 1500 );
    }

    componentDidMount(){
        var title = this.refs.timelineTitle;
        var timeline = this.refs.timeline;

        this.tl
        .from(title, 1, { opacity:0, y:-20, ease: Cubic.linear }, "+0.5")
        .fromTo(timeline, 1, { opacity:0, y:500, ease: Cubic.linear }, { opacity:1, y:0, ease: Cubic.linear }, "+1");
    }

    componentWillUnMount() {
        this.tl.reverse();
    }

    render() {

        return (
            <div className={classNames("timeline", {clicked: this.state.clicked}) }>
                <header ref="timelineTitle">
                    <TypeName/>
                </header>
                <div ref="timeline" className="row row-gutter">
                     {Projects.map((object, i) => <ProjectCard onClick={ ::this.onClick } history={this.props.history} data={object} id={i}/> )}
                    <div className="line"/>
                </div>
            </div>
        );

    }
}

