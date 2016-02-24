import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';
import $                                from 'jquery';
import Config                           from 'config/config';

export default class FixedBackground extends Component {

    static defaultProps = {
        image: "",
        filter: "",
        position:"",
        gradient: true,
        gradientDirection: "to bottom",
        gradientColor: false,
        fixed: true,
        fadeOut: true,
        maxScrollToFadeOut: 300
    };

    constructor( props ) {
        super( props );
        this.state = {
            isLoaded : false,
            progress : 1
        };
        this.scroll = this.scroll.bind(this);
        this.computeProgress = this.computeProgress.bind(this);
    }

    componentWillMount() {
        setTimeout( () => {
            this.setState( { isLoaded : true } );
        }, 1500 );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }

    computeProgress() {
        var scrollTop = event.srcElement.body.scrollTop;
        var screenSize = $( window ).height();
        var ratio = screenSize / this.props.maxScrollToFadeOut;
        var progress = (screenSize - scrollTop * ratio) / screenSize ;
        return progress;
    }

    scroll() {
        var progress = this.computeProgress();
        if (progress > -0.6)
            this.setState({ progress: progress });
        else if (progress < -6 )
            this.setState({ progress: 1 });
    }

    render() {

        return (
            <section className={ classNames(
                                'fixed-background',
                                this.props.position,
                                { fixed : this.props.fixed }) }>
                <div className={ classNames(
                                    { "section-gradient" : this.props.gradient } 
                                ) }
                                style={{
                                    opacity: this.props.gradientColor ? 1 : 0.6,
                                    background: `linear-gradient(${this.props.gradientDirection},rgba(0, 0, 0, 0), ${this.props.gradientColor} 100%)`
                                }}></div>
                <div
                    className={ classNames( 
                                "section-background " + this.props.filter,
                                { visible : this.state.isLoaded } ) } 
                    style={ {backgroundImage: `url(${this.props.image})`} }  >
                </div>
                <div style={ { opacity: this.state.progress } } className="section-content">
                    { this.props.children }
                </div>
            </section>
        );
    }
    
}
