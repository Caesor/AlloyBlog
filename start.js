const pm2 = require('pm2');

pm2.connect(function(err) {
    if (err) {
        console.error(err);
        process.exit(2);
    }
    console.log('pm2 start')
    pm2.start({
        "watch": ["./src"], // 开启 watch 模式
        "ignore_watch": ["node_modules", "assets"],
        "watch_options": {
            "followSymlinks": false
        },
        name: 'httpServer',
        script: './src/index.js', // Script to be run
        exec_mode: 'fockMode', // Allows your app to be clustered
        instances: 1, // Optional: Scales your app by 4
        max_memory_restart: '100M' // Optional: Restarts your app if it reaches 100Mo
    }, function(err, apps) {
        pm2.disconnect(); // Disconnects from PM2
        if (err) throw err
    });
});