import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';
import BurgerMenu                       from 'component/BurgerMenu';

export const Direction = {
    right:'right',
    left:'left'
}

export default class SideMenu extends Component {

    static childContextTypes = {
        active: PropTypes.any
    }

    static propTypes = {
        size: PropTypes.string,
        direction: PropTypes.string
    };

    static defaultProps = {
        direction: Direction.right
    };


    constructor( props ) {
        super( props );
        this.state = {};
        this.getChildContext = this.getChildContext.bind(this);
    }

    getChildContext() {
        return {
          active: this.state.active
        };
    };

    onClick() {
         this.setState({active: !this.state.active });
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className={classNames("side-menu-wrapper", {displayed: this.state.active})}>
                <div className={classNames("overlay", {displayed: this.state.active})}/>
                <BurgerMenu onClick={::this.onClick} />
                <nav className={classNames({active: this.state.active})}>
                    {this.props.children}
                </nav>
            </div>
        );
    }
}
