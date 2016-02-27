import jQuery                           from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

/**
 * jquery.simplr.smoothscroll
 * version 1.0
 * copyright (c) 2012 https://github.com/simov/simplr-smoothscroll
 * licensed under MIT
 * requires jquery.mousewheel - https://github.com/brandonaaron/jquery-mousewheel/
 */
// ;(function(jQuery) {
//     'use strict';
    
//     jQuery.srSmoothscroll = function(options) {
    
//     var self = jQuery.extend({
//         step: 95,
//         speed: 300,
//         ease: "easeInOutCirc"
//     }, options || {});
    
//     // private fields & init
//     var win = jQuery(window),
//         doc = jQuery(document),
//         top = 0,
//         step = self.step,
//         speed = self.speed,
//         viewport = win.height(),
//         body = (navigator.userAgent.indexOf('AppleWebKit') !== -1) ? jQuery('body') : jQuery('html'),
//         wheel = false;

//     // events
//     jQuery('body').mousewheel(function(event, delta) {

//         wheel = true;

//         if (delta < 0) // down
//             top = (top+viewport) >= doc.height() ? top : top+=step;

//         else // up
//             top = top <= 0 ? 0 : top-=step;

//         body.stop().animate({scrollTop: top}, speed, self.ease, function () {
//             wheel = false;
//         });

//         return false;
//     });

//     win
//     .on('resize', function (e) {
//         viewport = win.height();
//     })
//     .on('scroll', function (e) {
//         if (!wheel)
//             top = win.scrollTop();
//     });
    
//     };
// })(jQuery);

export default class SmoothWheel extends Component {


    constructor( props ) {
        super( props );
    }

    componentDidMount() {
        // jQuery(function () {
        //   jQuery(document).ready(function() {
        //     jQuery.srSmoothscroll();
        //     console.log(1);
        //   });
        // });
    }

    componentWillUnmount() {
    }

    render() {
        return null;
    }
}

