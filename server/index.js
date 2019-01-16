'use sctrict'

const Hapi = require('hapi');
const Glue = require('glue');
const manifest = require('./config');
const startServer = async () => {
	try {
		const webServer = await Glue.compose(manifest, {
			relativeTo: __dirname
		});
		await webServer.start();
	} catch (e) {
		console.log('error is server start',e);
	}
}
startServer();
console.log('Web server started.');

process.on('unhandledRejection',(err) => {
	process.exit(1);
});
