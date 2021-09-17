const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/',
		createProxyMiddleware({
			target: 'http://internal-BACK-Internal-ALB-1927362478.ap-northeast-2.elb.amazonaws.com:80',
			changeOrigin: true,
		}),
	);
};
