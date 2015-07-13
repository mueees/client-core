module.exports = {
    build_dir: 'build',
    compile_dir: 'bin',

    app_files: {
        index: 'app/index.html',
        js_html: 'app/js.html',
        js: [
            'app/js/**/*.js'
        ],
        templates: [
            'app/js/**/*.html',
            'app/js/**/*.hbs'
        ],
        less: {
            default: 'app/less/init.less'
        }
    },

    src_files: {
        js: [
            'src/js/**/*.js'
        ],
        templates: [
            'src/js/**/*.html',
            'src/js/**/*.hbs'
        ]
    },

    vendor_files: {
        js: [
            'vendor/requirejs/require.js',
            'vendor/requirejs/text.js',
            'vendor/jquery/dist/jquery.js',
            'vendor/jquery-mockjax-2.0.0-beta/mockajax.js',
            'vendor/underscore-1.8.3/underscore.js',
            'vendor/bootstrap/dist/js/bootstrap.js',
            'vendor/handlebars-0.11.2/handlebars.js',
            'vendor/marionette/marionette.js',
            'vendor/backbone/backbone.js',
            'vendor/backbone/backbone_clear.js',
            'vendor/backbone/backbone.babysitter.js',
            'vendor/backbone/backbone.queryparam.js',
            'vendor/backbone/backbone.routefilter.js',
            'vendor/backbone/backbone.server.js',
            'vendor/backbone/backbone.stickit.js',
            'vendor/backbone/backbone.syphon.js',
            'vendor/backbone/backbone.validation.js',
            'vendor/backbone/backbone.wreqr.js'
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