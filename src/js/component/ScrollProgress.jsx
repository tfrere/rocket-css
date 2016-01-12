import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

export default class ScrollProgress extends Component {

    static defaultProps = {
        image: "",
        filter: "",
        fullscreen: false
    }

    constructor( props ) {
        super( props );
        this.state = {
            progress : 1
        };
        this.scroll = this.scroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }

    scroll() {
        var scrollTop = event.srcElement.body.scrollTop;
        var documentSize = Math.round(event.srcElement.body.scrollHeight);
        var progress =  scrollTop * 100 / documentSize;
        console.log("scrollTop", scrollTop, "total", documentSize, "progress", progress);
        this.setState({ progress: progress });
    }

    render() {

        return (
            <div className="scroll-progress">
                <div className="scroll-progress-bar" style={{width: this.state.progress + "%"}} ></div>
            </div>
        );
    }
}
