import React, { Component } from 'react';
import CartItem from '../CartItem/CartItem';
import Total from '../Total/Total';
import '../App.css';

class Cart extends Component {
    render() {
        const selected = this.props.selected;
        const USCurrencyFormat = this.props.USCurrencyFormat;
        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = selected[feature];
      
            return (
              <CartItem 
                featureHash={featureHash}
                selectedOption={selectedOption}
                USCurrencyFormat={USCurrencyFormat}
                feature={feature}
                key={featureHash}
              />
            );
        });

        const total = this.props.total;
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total 
                    USCurrencyFormat={USCurrencyFormat}
                    total={total}
                />
            </section>
        );
    }
}

export default Cart;