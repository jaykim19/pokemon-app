/** @type {import('next').NextConfig} */
const nextConfig = {
    // for security reason, raw link is not able to refer to external source from git
   images: {
       remotePatterns: [
           {
               protocol: "https",
               hostname: "raw.githubusercontent.com"
           }
       ]
   }
}

module.exports = nextConfig
