import React, { memo } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';

import { handleToken } from '../actions';

const Payments = () => {
  const dispatch = useDispatch();

  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500}
      token={(token) => dispatch(handleToken(token))}
      // Set process.env stripe key.
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default memo(Payments);
