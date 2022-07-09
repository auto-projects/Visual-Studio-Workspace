exports.config = {

    // Test Script
    specs: [
        "sources/click.js"
    ],
    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    runner:'local',

    // Declare server info
    hostname: 'localhost',
    port: 9515,
    path: '//',

    // Test Framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000,
    },
}