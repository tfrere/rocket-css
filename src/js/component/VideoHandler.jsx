// iframe chargement à revoir

import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

export default class ShareMenu extends Component {

    static defaultProps = {
        onClick : () => true
    };

    constructor( props ) {
        super( props );
        this.state = {};
    }

    onClick() {
         this.props.onClick();
         this.setState( { active: !this.state.active } );
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="video-handler">
                <div
                    onClick={ ::this.onClick }
                    className={ classNames( 'video-box', { active : this.state.active })}>
                    <div>
                        <div className="play">
                            <div className="triangle">
                            </div>
                        </div>
                        <img 
                            src='images/background/video-cover.svg'
                            className="video-cover"/>
                    </div>
                </div>
                {(function(active) {
                    if (active) {
                    return (
                        <iframe
                            frameBorder="0"
                            width="400"
                            height="300"
                            src="https://www.youtube.com/embed/CDB_XkVuq9Q?rel=0&theme=dark&color=white&autoplay=1&autohide=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3"
                            allowFullScreen />
                        ); 
                    } 
                })(this.state.active)} 
            </div> 
        );
    }
}