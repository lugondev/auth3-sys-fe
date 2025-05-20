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
	experimental: {
		optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react']
	}
};

module.exports = nextConfig;
