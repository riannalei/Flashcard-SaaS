import React from 'react';
import { Button } from '@mui/material';
import getStripe from '../../utils/get-stripe'; // Adjust the path to your get-stripe.js file

const PricingPage = () => {
  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: { origin: window.location.origin },
    });

    const checkoutSessionJson = await checkoutSession.json();

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    });

    if (error) {
      console.warn(error.message);
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleSubmit}>
      Buy Pro Subscription
    </Button>
  );
};

export default PricingPage;
