import React from 'react';
import FederatedWrapper from './index';

const wrapComponent = (Component) => ({ error, delayed, ...props }) => (
    <FederatedWrapper error={error} delayed={delayed}>
        <Component {...props} />
    </FederatedWrapper>
);

export default wrapComponent;