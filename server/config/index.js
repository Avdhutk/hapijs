const manifest = {
	server: {
      port: 8000
  },
	register: {
		plugins: [
			{
				plugin: './api',
			}
		]
	}
};

module.exports = manifest;
