/** @type {import('next').NextConfig} */
import PWA from 'next-pwa';

const withPWA = PWA({
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
    //...
    cacheOnFrontEndNav:true,

  })
const nextConfig = {};

export default withPWA( nextConfig);
