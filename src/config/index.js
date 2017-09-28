import path from 'path'

const config = {
    port: 3000,
    favicon: path.resolve(__dirname, '../public/favicon.ico'),
    compress: {
        threshold: 2048,
        flush: require('zlib').Z_SYNC_FLUSH
    },
    session: {
        key: 'alloy team',
        maxAge: 86400000,
        overwrite: true, 
        httpOnly: true,
        signed: true,
        rolling: false
    }
}
export default config
