// vue.config.js
module.exports = {
    lintOnSave: false,
    devServer: {
        host: 'localhost',
        port: 8082
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/styles/main.scss";'
            }
        }
    }
}
