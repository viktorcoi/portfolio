import React, { Component, createContext } from 'react';
import Background from './components/background/background';
import Header from './components/header/header';
import WebFont from 'webfontloader';
import './assets/styles/styles.css';

const StyleTheme = createContext();

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckedTheme: false,
            theme: 'dark',
        };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }
  
    handleCheckboxChange(event) {
        this.setState({ isCheckedTheme: event.target.checked });
    }

    componentDidMount() {
        WebFont.load({
            google: {
              families: ['Roboto', 'Montserrat']
            }
          });
        this.updateTheme();
    }
    
    componentDidUpdate() {
        this.updateTheme();
    }

    updateTheme() {
        document.documentElement.setAttribute("data-theme", this.state.theme);
    }

    
    
    render() {
        this.state.isCheckedTheme ? this.state.theme = 'light' : this.state.theme = 'dark';
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