/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'imagesg2crowd.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'openweathermap.org',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  