import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

export default class BurgerMenu extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
        this.onKeyPress = this.onKeyPress.bind(this);
    }


    componentDidMount() {
        document.addEventListener('keydown', this.onKeyPress, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyPress, false);
    }

    onKeyPress(event) {
      console.log(event); // => nullified object.
      console.log(event.type); // => "click"
      if (event.keyCode == 192)
        $('body').toggleClass('show-baseline');
    }

    render() {
        return null;
    }
}
