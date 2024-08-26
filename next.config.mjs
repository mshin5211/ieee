/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/join',
                destination: '/',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
