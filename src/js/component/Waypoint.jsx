import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

export default class Waypoint extends Component {

    static defaultProps = {
        onEnter : () => true,
        onLeave : () => true,
        offset: 0,
        orientation: "left"
    };

    constructor( props ) {
        super( props );
        this.state = {};
        this.state.active = false;
        this.scroll = this.scroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }

    onEnter() {
      this.setState({active: true });
    }

    onLeave() {
      this.setState({active: false });
    }

    scroll() {
        var scrollTop = $( window ).scrollTop();
        var elementOffset = $( this.refs.element ).offset().top;
        var elementHeight = $( this.refs.element ).height();

        if (scrollTop >= elementOffset + elementHeight + this.props.offset - elementHeight / 2)
          this.onLeave();
        else if (scrollTop >= elementOffset + this.props.offset - elementHeight / 2)
          this.onEnter();
        else if (scrollTop <= elementOffset + this.props.offset - elementHeight / 2)
          this.onLeave();
    }

    render() {
        return <div className={classNames("waypoint", "" + this.props.orientation, {active: this.state.active})} ref="element">
          {this.props.children}
        </div>;
    }
}
