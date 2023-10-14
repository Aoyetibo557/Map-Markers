/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com', '68.media.tumblr.com', 's-media-cache-ak0.pinimg.com', 'dspncdn.com', 's3.burpple.com', 's.yimg.com', 'scontent.cdninstagram.com', 's-media-cache-ak0.pinimg.com', 'rainbowgram.files.wordpress.com'],
    },
    env: {
        API_URL: process.env.API_URL,
    },
}

module.exports = nextConfig