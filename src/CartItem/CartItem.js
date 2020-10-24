import React, { Component } from 'react';
import '../App.css';

class CartItem extends Component {
    render() {
        const USCurrencyFormat = this.props.format;
        const featureHash = this.props.featureHash;
        const selectedOption = this.props.selectedOption;
        const feature = this.props.feature;
        return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
        );
    }
}

export default CartItem;