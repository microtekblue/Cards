/** @type {import('next').NextConfig} */
const nextConfig = {
   // basePath: '/cards',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'robohash.org',
                port: '',
            },
        ],
    },
};

export default nextConfig;
