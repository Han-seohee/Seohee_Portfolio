const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy.createProxyMiddleware('/parking', {
            target: 'http://openapi.airport.co.kr/',
            changeOrigin: true,
            pathRewrite: {
                '^/parking': '' // URL ^/api -> 공백 변경
            }
        })
    );
    app.use(
        proxy.createProxyMiddleware('/weather', {
            target: 'https://api.openweathermap.org/',
            changeOrigin: true,
            pathRewrite: {
                '^/weather': '' // URL ^/api -> 공백 변경
            }
        })
    );
}