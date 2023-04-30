import React, { Component } from 'react';
import styles from './header.module.css';

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
                <input type='checkbox' onChange={this.handleCheckboxChange}></input>
            </header>
        );
    }
}

export default Header;