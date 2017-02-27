const config = {
    port: 3000,
    favicon: __dirname + '/public/favicon.ico',
    compress: {
        threshold: 2048,
        flush: require('zlib').Z_SYNC_FLUSH
    }
}
export default config
