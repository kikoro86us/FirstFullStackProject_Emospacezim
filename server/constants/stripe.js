const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_i1MFujr2BkbOF1MfM5f84mrg'
    : 'sk_test_i1MFujr2BkbOF1MfM5f84mrg';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;