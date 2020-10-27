import React, { Component } from 'react';
import slugify from 'slugify';
import CustomItem from '../CustomItem/CustomItem';
import Feature from '../Feature/Feature';
import '../App.css';

class Specs extends Component {
    render() {
        const USCurrencyFormat= this.props.USCurrencyFormat;
        const featureHash = this.props.featureHash;
        const feature = this.props.feature;
            const options = this.props.FEATURES[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <div>
                        <CustomItem 
                            itemHash={itemHash}
                            feature={feature}
                            item={item}
                            USCurrencyFormat={USCurrencyFormat}
                            handleUpdateFeature={ (feature, newValue) => this.props.handleUpdateFeature(feature, newValue)}
                            selected={this.props.selected}
                            key={itemHash}
                        />

                    </div>
                );
            });
            return (
                <Feature 
                    featureHash = {featureHash}
                    feature = {feature}
                    options = {options}
                    key = {featureHash}
                >
                {options};
                </Feature>
            )
        };
    }

export default Specs;