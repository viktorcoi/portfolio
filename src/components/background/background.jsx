import React, { Component } from 'react';
import styles from './background.module.css';
import { StyleTheme } from '../../portfolio';

class Background extends Component {
    constructor(props) {
        super(props);
        this.isCheckedTheme = false;
        this.backMatrixRef = React.createRef();
        this.matrix = 'abcdefghijklmnopqrstuvwxyz0123456789';
        this.matrix = this.matrix.split('');
        this.font_size = 10;
        this.drops = [];
    }

    componentDidMount() {
        this.ctx = this.backMatrixRef.current.getContext('2d');
        this.resizebackMatrix();
        window.addEventListener('resize', this.resizebackMatrix, false);
        setInterval(this.draw, 40);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizebackMatrix, false);
    }

    draw = () => {
        this.ctx.fillStyle = this.isCheckedTheme ? 'rgba(226, 226, 226, 0.05)' : 'rgba(38, 38, 38, 0.05)';
        this.ctx.fillRect(0, 0, this.backMatrixRef.current.width, this.backMatrixRef.current.height);

        this.ctx.fillStyle = this.isCheckedTheme ? '#232323' : '#E2E2E2';
        this.ctx.font = this.font_size + 'px arial';

        for (let i = 0; i < this.drops.length; i++) {
            let text = this.matrix[Math.floor(Math.random() * this.matrix.length)];
            this.ctx.fillText(text, i * this.font_size, this.drops[i] * this.font_size);
            if (this.drops[i] * this.font_size > this.backMatrixRef.current.height && Math.random() > 0.975)
                this.drops[i] = 0;
            this.drops[i]++;
        }
    }

    resizebackMatrix = () => {
        this.backMatrixRef.current.width = window.innerWidth;
        this.backMatrixRef.current.height = window.innerHeight;
        let columns = Math.ceil(this.backMatrixRef.current.width / this.font_size);
        this.drops = [];
        for (let x = 0; x < columns; x++) {
            this.drops[x] = 1000000;
        }
    }

    render() {
        return (
            <StyleTheme.Consumer>
                {(context) => {
                    this.isCheckedTheme = context.isCheckedTheme;
                    return (
                        <canvas className={styles.background} ref={this.backMatrixRef}></canvas>
                    );
                }}
            </StyleTheme.Consumer>
        );
    }
}

export default Background;