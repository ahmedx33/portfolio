/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "gldeeolxohtbgjhlyjpd.supabase.co",
            },
        ],
    },
};

export default nextConfig;
