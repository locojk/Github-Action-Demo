// /** @type {import('next').NextConfig} */
// const nextConfig: import('next').NextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination:
//           process.env.NODE_ENV === "development"
//             ? "http://127.0.0.1:8000/api/:path*"
//             : "/api/",
//       },
//     ];
//   },
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig: import('next').NextConfig = {
//   output: "standalone",
// };

// export default nextConfig;

// next.config.ts

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enables standalone mode, which makes the application suitable for containerization
  output: "standalone",

  // Static export setting
  // Configures Next.js to export the site as static HTML files
  exportTrailingSlash: true, // Adds a trailing slash to all paths, which is helpful for static exports
  images: {
    unoptimized: true, // Disables Next.js image optimization, required for static exports
  },
  trailingSlash: true, // Ensures URLs have trailing slashes for static files
};

export default nextConfig;

