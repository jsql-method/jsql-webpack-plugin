const { execFile } = require('child_process');

class JsqlWebpack {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        compiler.hooks.run.tap('JsqlWebpack', compilation => {
            execFile('node', [require.resolve('npm-jsql'), this.options.apiKey, this.options.src, this.options.dist, this.options.watcher], (error, stdout, stderr) => {
                if (error) {
                    throw error;
                }
                console.log(stdout);
            });
        });
    }
}

module.exports = JsqlWebpack;