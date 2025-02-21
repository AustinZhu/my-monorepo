/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.app.json',
  },
  transpilePackages: ['@my-project/ui'],
};

export default nextConfig;
