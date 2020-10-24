import React, { Component } from 'react';
import Total from '../Total/Total';
import '../App.css';

class Cart extends Component {
    render() {
        const summary = this.props.summary;
        const USCurrencyFormat = this.props.USCurrencyFormat;
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