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
         this.props.onClick();
         this.setState( { clicked: true } );
        setTimeout( () => {
            this.setState( { clicked : false } );
        }, 600 );
    }

    componentDidMount(){
        var timeline = this.refs.timeline;
        var line = this.refs.timelineLine;
        var projectLength = Projects.length;
        console.log(Projects.length);
        var project0 = this.refs.project0;
        var project1 = this.refs.project1;
        var project2 = this.refs.project2;
        var project3 = this.refs.project3;
        var project4 = this.refs.project4;

        this.tl
        .fromTo(line, 1, { opacity:0, y:500, ease: Cubic.linear },
                            { opacity:1, y:0, ease: Cubic.linear }, "+=0.2")
        .fromTo(project0, 0.5, { opacity:0, ease: Cubic.linear }, { opacity:1, y:0, ease: Cubic.linear }, "-=0.5")
        .fromTo(project1, 0.5, { opacity:0, ease: Cubic.linear }, { opacity:1, y:0, ease: Cubic.linear })
        .fromTo(project2, 0.5, { opacity:0, ease: Cubic.linear }, { opacity:1, y:0, ease: Cubic.linear })
        .fromTo(project3, 0.5, { opacity:0, ease: Cubic.linear }, { opacity:1, y:0, ease: Cubic.linear })
        .fromTo(project4, 0.5, { opacity:0, ease: Cubic.linear }, { opacity:1, y:0, ease: Cubic.linear });

    }

    componentWillUnMount() {

    }

    render() {

        return (
            <div className={classNames("timeline", {clicked: this.state.clicked}) }>

                <div ref="timeline" className="row row-gutter">
                     {Projects.map((object, i) => <div className="cell force-1"
                                                    ref={`project${i}`}
                                                                > <ProjectCard 
                                                                onClick={ ::this.onClick } 
                                                                history={this.props.history} 
                                                                data={object}
                                                                id={i}
                                                                key={i} /></div>
                                                                )}
                    <div ref="timelineLine" className="line"/>
                </div>
            </div>
        );

    }
}

