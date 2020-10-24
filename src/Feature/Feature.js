


import React, { Component } from 'react';
import '../App.css';

class Feature extends Component {
    render() {
        const featureHash = this.props.featureHash;
        const feature = this.props.feature;
        const options = this.props.options;
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
        );
    }
}

export default Feature;