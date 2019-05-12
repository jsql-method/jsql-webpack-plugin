const execSync = require('child_process').execSync;

class JsqlWebpack {

    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        compiler.hooks.run.tap('JsqlWebpack', compilation => {

            let command = 'node ' + require.resolve('jsql-cli') +
                ' --apiKey=' + this.options.apiKey +
                ' --input=' + this.options.src +
                ' --output=' + this.options.dist +
                ' --env=' + (this.options.local ? 'local' : 'prod') +
                (this.options.devKeyFileName ? ' --devKeyFileName=' + this.options.devKeyFileName : '') +
                (this.options.debug ? ' --debug ' : '');

            console.log(execSync(command).toString());

        });
    }
}

module.exports = JsqlWebpack;