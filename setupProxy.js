const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy("/api/**", {
            target: "http://45.32.15.21:8090/",
            changeOrigin: true
        })
    );
};