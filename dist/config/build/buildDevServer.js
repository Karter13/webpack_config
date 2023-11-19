export function buildDevServer(options) {
    var _a;
    return {
        port: (_a = options.port) !== null && _a !== void 0 ? _a : 3000,
        open: true,
        // only for DevServer
        // Если раздавать статику через nginx То надо делать проксирование на Index.html
        historyApiFallback: true
    };
}
