const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/video_feed', // The path you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:3001', // The target URL of your FastAPI server
      changeOrigin: true,
    })
  );
};
