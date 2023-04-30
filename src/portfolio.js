import React, { Component, createContext } from 'react';
import Background from './components/background/background';
import Header from './components/header/header';
import './assets/styles/styles.css';

const StyleTheme = createContext();

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckedTheme: false
        };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }
  
    handleCheckboxChange(event) {
        this.setState({ isCheckedTheme: event.target.checked });
    }


    render() {
        return (
            <StyleTheme.Provider value={{ isCheckedTheme: this.state.isCheckedTheme }}>
                <Header onCheckboxChange={this.handleCheckboxChange}/>
                <Background/>
            </StyleTheme.Provider>
        );
    }
}

export { StyleTheme };
export default Portfolio;