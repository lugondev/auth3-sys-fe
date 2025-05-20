/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
				port: '',
				pathname: '/**',
			},
		]
	},
	optimizeFonts: true,
	poweredByHeader: false,
	reactStrictMode: true,
};

module.exports = nextConfig;
