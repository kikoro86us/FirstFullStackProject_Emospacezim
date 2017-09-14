const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
? 'http://www.matthewhkim.com'
: 'http://localhost:8080';

export default PAYMENT_SERVER_URL;