import { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
              },
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
}

export default nextConfig;