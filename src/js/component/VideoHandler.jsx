// iframe chargement à revoir

import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

export default class ShareMenu extends Component {

    static defaultProps = {
        onClick : () => true,
        width: 300,
        height:200
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
                    style={ { height: this.props.height} }
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

                { 
                    !this.state.active ? null :
                    <iframe
                            frameBorder="0"
                            width={this.props.width}
                            height={this.props.height}
                            src="https://www.youtube.com/embed/CDB_XkVuq9Q?rel=0&theme=dark&color=white&autoplay=1&autohide=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3"
                            allowFullScreen />
                }
            </div> 
        );
    }
}