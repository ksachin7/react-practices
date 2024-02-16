const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://example.com', // Replace with your API endpoint
      changeOrigin: true,
      secure: false,
    })
  );
};

// note: added this file because facing issue in deploying to netlify.