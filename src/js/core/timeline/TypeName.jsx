import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';


// var nextAction = function(actions) {
//   var actionCursor = 0;
//   var action = actions[actionCursor];
//   if ( action ) {
//     setTimeout(action.fn, action.delay);
//     actionCursor++;
//   }
// }

// // type a new text
// var type = function(actions, text) {
//   var copy = $('#copy')
//     , preHTML = $('#copy').html();

//   copy.html(preHTML + text.substr(0, 1));
//   if ( text.length > 1 ) {
//     setTimeout(function() {
//       type(text.substr(1));
//     }, 100);

//   } else {
//     nextAction(actions);
//   }
// }

// // strikethrough text
// function strikethrough(st, ln, size) {
//   var copy = $('#copy')
//     , text = $('#copy').text();
//   if ( !st ) { st = 0; }
//   if ( !ln ) { ln = text.length; }
//   if ( !size ) { size = 1; }

//   if ( ln > size-1 ) {
//     var newText = text.substr(0, st) +
//       '<del>' +
//       text.substr(st, size) +
//       '</del>' +
//       text.substr(st + size);
//     copy.html(newText);
//     setTimeout(function() {
//       strikethrough(st, ln, ++size);
//     }, 20);

//   } else {
//     nextAction();
//   }
// }

// // remove text
// function remove() {
//   var cursor = $('#cursor')
//     , copy = $('#copy');

//   var width = copy.width()
//     , step = parseInt(width / copy.text().length);

//     cursor.insertBefore(cursor.prev('span'));
//     cursor.addClass('negative-indent');
//     copy.css({
//       'background-image' : 'url(http://semantic-ui.com/images/em.png)',
//       'background-repeat' : 'no-repeat',
//       'background-position' : width + 'px 0'
//     });

//     var iMove = setInterval(function() {
//       width -= step;
//       if ( width > 0 ) {
//         copy.css({'background-position' : width + 'px 0'});
//       } else {
//         copy.css({'background-position' : '0 0'});
//         clearInterval(iMove);

//         setTimeout(function() {
//           copy.empty();
//           copy.css({
//             'background-color': 'transparent',
//             'background-image' : 'none',
//           });
//           copy.insertBefore(copy.prev('span'));
//           cursor.removeClass('negative-indent');
//           nextAction();
//         }, 500);
//       }
//     }, 20);
//   }


export default class TypeName extends Component {

    static defaultProps = {
        onClick : () => true
    };

    constructor( props ) {
        super( props );
        this.state = {};
        this.state.actions = [];
        this.state.actionCursor = 0;
        this.nextAction = this.nextAction.bind(this);
        this.type = this.type.bind(this);
    }

    nextAction() {
      var actionCursor = 0;
      var action = this.state.actions[actionCursor];
      if ( action ) {
        setTimeout(action.fn, action.delay);
        actionCursor++;
      }
    }

    // type a new text
    type(text) {

      var copy = this.refs.copy
        , preHTML = this.refs.copy.html();
        console.log("here",copy, preHTML);
      copy.html(preHTML + text.substr(0, 1));
      if ( text.length > 1 ) {
        setTimeout(function() {
          type(text.substr(1));
        }, 100);

      } else {
        nextAction();
      }
    }


    onClick() {
         this.props.onClick();
         this.setState( { active: !this.state.active } );
    }

    componentDidMount() {

        var actions = []
          , actionCursor = 0;

          actions.push({
            delay: 500,
            fn: function () { this.type('Thibaud FRERE'); }
          });

        this.nextAction();

        //, {
        //     delay: 300,
        //     fn: function () { strikethrough(7, 8); }
        //   }, {
        //     delay: 600,
        //     fn: function () { remove(); }
        //   });

        //   actions.push({
        //     delay: 300,
        //     fn: function () { strikethrough(6, 5); }
        //   }, {
        //     delay: 300,
        //     fn: function () { type('Beyond your imagination'); }
        //   }, {
        //     delay: 600,
        //     fn: function () { remove(); }
        //   });

        //   actions.push({
        //     delay: 200,
        //     fn: function () { actionCursor = 0;  nextAction(); }
        //   });

    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <h2>
                  <span ref="copy" id="copy">Thibaud FRERE</span>
                  <span id="cursor"/>
                </h2>
            </div>
        );
    }
}




