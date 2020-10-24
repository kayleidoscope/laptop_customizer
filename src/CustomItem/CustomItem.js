import React, { Component } from 'react';
import slugify from 'slugify';
import '../App.css';

class CustomItem extends Component {
    render() {
        const itemHash = this.props.itemHash;
        const feature = this.props.feature;
        const item = this.props.item;
        const USCurrencyFormat = this.props.USCurrencyFormat;
        const selected = this.props.selected;
        return (
            <div key={itemHash} className="feature__item">
                <input
                  type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === selected}
                    onChange={e => this.props.handleUpdateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
            </div>
        );
    }
}

export default CustomItem;