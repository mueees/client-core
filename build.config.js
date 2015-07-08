module.exports = {
    build_dir: 'build',
    compile_dir: 'bin',

    app_files: {
        js: [
            'src/js/**/*.js'
        ],
        templates: [
            'src/js/**/*.html',
            'src/js/**/*.hbs'
        ],
        less: {
            default: 'app/less/init.less'
        }
    },

    vendor_files: {
        js: [
            'src/vendor/requirejs/require.js',
            'src/vendor/requirejs/text.js',
            'src/vendor/jquery/dist/jquery.js',
            'src/vendor/underscore-1.8.3/underscore.js',
            'src/vendor/bootstrap/dist/js/bootstrap.js',
            'src/vendor/handlebars-0.11.2/handlebars.js',
            'src/vendor/marionette/marionette.js',
            'src/vendor/backbone/backbone.js',
            'src/vendor/backbone/backbone_clear.js',
            'src/vendor/backbone/backbone.babysitter.js',
            'src/vendor/backbone/backbone.queryparam.js',
            'src/vendor/backbone/backbone.routefilter.js',
            'src/vendor/backbone/backbone.server.js',
            'src/vendor/backbone/backbone.stickit.js',
            'src/vendor/backbone/backbone.syphon.js',
            'src/vendor/backbone/backbone.validation.js',
            'src/vendor/backbone/backbone.wreqr.js'
        ],
        css: [],
        fonts: [],
        assets: []
    },

    compile_files: {
        js: [
            'src/vendor/requirejs/require.js'
        ]
    }
};