import React, { Component } from 'react';
import styles from './header.module.css';
import Logo from './logo';
import NavPage from './navigation';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(event) {
        this.props.onCheckboxChange(event);
    }

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <Logo/>
                    <input type='checkbox' onChange={this.handleCheckboxChange}></input>
                    <NavPage/>
                </div>
            </header>
        );
    }
}

export default Header;