/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: ""
            }
        ],
        domains: ['https://cdn.sanity.io/images/t7bhubdr/production/4ceedae91557d8463c387768a9f5d455f9365589-1534x896.png', 'https://cdn.sanity.io/images/t7bhubdr/production/48a45b22005c282189399d5b955cffa44146abd3-1630x888.png', 'https://cdn.sanity.io/images/t7bhubdr/production/e4e92c9bc59dbf08236b271f995d68b1a92d67e9-1616x850.png', 'https://cdn.sanity.io/images/t7bhubdr/production/af2c525900151781ccabf6b064954acae430a177-1442x804.png', 'https://cdn.sanity.io/images/t7bhubdr/production/67d12bd1a196040ed126b99893b5f2a4770a95e6-721x462.png']
    }
}

module.exports = nextConfig
