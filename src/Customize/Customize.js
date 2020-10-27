import React, { Component } from 'react';
import Specs from '../Specs/Specs';
import '../App.css';

export default function Customize(props) {
  const FEATURES = props.FEATURES;
    const features = Object.keys(FEATURES).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        return (
            <Specs
                FEATURES={FEATURES}
                USCurrencyFormat={props.USCurrencyFormat}
                selected={props.selected}
                handleUpdateFeature={props.handleUpdateFeature}
                featureHash={featureHash}
                feature={feature}
            />
        )
    })

    return (
         <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    );
}