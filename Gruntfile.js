module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    var userConfig = require('./build.config.js');

    var taskConfig = {
        pkg: grunt.file.readJSON("package.json"),
        copy: {
            // Application files
            app_js: {
                files: [
                    {
                        src: ['**'],
                        dest: '<%= build_dir %>/src/js',
                        cwd: 'app/js',
                        expand: true,
                        flatten: false
                    }
                ]
            },
            html: {
                files: [
                    {
                        src: [
                            '<%= app_files.index %>',
                            '<%= app_files.js_html %>'
                        ],
                        dest: '<%= build_dir %>/src/',
                        expand: true,
                        flatten: true
                    }
                ]
            },

            // Src files
            src_js: {
                files: [
                    {
                        src: ['**'],
                        dest: '<%= build_dir %>/src/js/src',
                        cwd: 'src/js',
                        expand: true,
                        flatten: false
                    }
                ]
            },

            //vendor
            vendor_js: {
                files: [
                    {
                        src: ['<%= vendor_files.js %>'],
                        dest: '<%= build_dir %>/src',
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            vendor_css: {
                files: [
                    {
                        src: ['<%= vendor_files.css %>'],
                        dest: '<%= build_dir %>/src/assets/css/vendor',
                        cwd: '.',
                        expand: true,
                        flatten: true
                    }
                ]
            },
            vendor_fonts: {
                files: [
                    {
                        src: ['<%= vendor_files.fonts %>'],
                        dest: '<%= build_dir %>/assets/fonts',
                        cwd: '.',
                        expand: true,
                        flatten: true
                    }
                ]
            }
        },
        less: {
            dev: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "<%= build_dir %>/src/assets/css/default-<%= pkg.name %>-<%= pkg.version %>.css": '<%= app_files.less.default %>'
                }
            }
        },
        clean: {
            build: [
                '<%= build_dir %>'
            ],
            assets_build: [
                '<%= build_dir %>/assets'
            ]
        },
        watch: {
            index: {
                files: [
                    '<%= app_files.index %>',
                    '<%= app_files.js_html %>'
                ],
                tasks: ['copy:html']
            },
            app_js: {
                files: [
                    '<%= app_files.js %>',
                    '<%= app_files.templates %>'
                ],
                tasks: ['copy:app_js']
            },
            src_js: {
                files: [
                    '<%= src_files.js %>',
                    '<%= src_files.templates %>'
                ],
                tasks: ['copy:src_js']
            },
            assets: {
                files: ['src/assets/**'],
                tasks: ['clean:assets_build', 'copy:app_assets', 'copy:vendor_css', 'copy:vendor_fonts', 'less:dev']
            },
            less: {
                files: ['src/**/*.less'],
                tasks: ['less:dev']
            }
        },
        requirejs: {
            account: {
                options: {
                    baseUrl: 'src/js',
                    name: 'pages/account',
                    out: '<%= compile_dir %>/src/js/account-<%= pkg.name %>-<%= pkg.version %>.js',
                    optimize: 'none',
                    mainConfigFile: "src/js/config/index.js"
                }
            }
        }
    };

    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

    grunt.registerTask('require', [
        'requirejs:development'
    ]);

    grunt.registerTask("development", [
        'clean:build',

        'copy:app_js',
        'copy:src_js',
        'copy:html',

        'less:dev',

        'copy:vendor_css',
        'copy:vendor_js',
        'copy:vendor_fonts'
    ]);

    grunt.registerTask('debug', 'Main task for development', function () {
        grunt.task.run('development');
        grunt.task.run('watch');
    });
};