// // next.config.mjs
/** 
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // output: 'export',
  images: {
            remotePatterns: [
              {
                protocol: 'https',
                hostname: 'fastly.picsum.photos',
                port: '',
                pathname: '/id/**', // Match all paths starting with "/id/"
              },
            ],
          }
}
 
export default nextConfig
