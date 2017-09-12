const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
? 'pk_test_PABNoy6xmF4P31nBxg8O91ES'
: 'sk_test_i1MFujr2BkbOF1MfM5f84mrg';

export default STRIPE_PUBLISHABLE;