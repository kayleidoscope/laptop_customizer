import React, { Component } from 'react';
import '../App.css';

class Customize extends Component { 
    render() {
        const features = this.props.features;
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        );
    }
}

export default Customize;