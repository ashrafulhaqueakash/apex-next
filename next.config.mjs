/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/partner",
        destination: "/advertisers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
