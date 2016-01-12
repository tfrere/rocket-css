import $                                from 'jquery';
import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';
import BurgerMenu                       from 'component/BurgerMenu';

export const Direction = {
    right:'right',
    left:'left'
}

export default class SideMenu extends Component {

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
    }

    onClick() {

         this.setState({active: !this.state.active });
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="side-menu-wrapper">
                <BurgerMenu onClick={::this.onClick} />
                <nav className={classNames({active: this.state.active})}>
                    {this.props.children}
                </nav>
            </div>
        );
    }
}
