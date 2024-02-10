/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        // added due to issues finding these packages when running. Github issue/comment:
        // https://github.com/WalletConnect/walletconnect-monorepo/issues/1908#issuecomment-1487801131
        config.externals.push("pino-pretty", "lokijs", "encoding");
        return config;
    }
}

module.exports = nextConfig
