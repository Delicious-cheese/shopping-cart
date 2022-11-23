const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://shopping-cart-seven-sigma.vercel.app',
            changeOrigin: true,
            pathRewrite: {
                "/api": "",
            }
        })
    );
};
