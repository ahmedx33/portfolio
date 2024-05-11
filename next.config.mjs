/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "gwztavkhtouqkvhxcuyh.supabase.co",
            },
        ],
    },
};

export default nextConfig;
