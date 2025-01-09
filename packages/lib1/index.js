const jwt = require('jsonwebtoken');

const jwtProvider = {
    secret: 'your-secret-key',
    options: { expiresIn: '1h' },

    sign: function(payload) {
        return jwt.sign(payload, this.secret, this.options);
    },

    verify: function(token) {
        try {
            return jwt.verify(token, this.secret);
        } catch (err) {
            return null;
        }
    }
};

module.exports = jwtProvider;