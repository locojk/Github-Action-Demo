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

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: "standalone",
};

// /** @type {import('next').NextConfig} */
// const nextConfig: import('next').NextConfig = {
//   output: "export",
//   reactStrictMode: true
// };


export default nextConfig;

