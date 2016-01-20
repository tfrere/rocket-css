import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

export default class ScrollProgress extends Component {

    static defaultProps = {
        image: "",
        filter: "",
        fullscreen: false
    };

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
        var documentSize = $( window ).height() * 4.3;
        var progress =  scrollTop * 100 / documentSize;
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
