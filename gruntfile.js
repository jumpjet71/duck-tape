/**
 * Grunt JS task configurations
 * @param grunt Grunt JS instance
 */
module.exports = function (grunt) {
    'use strict';

    var concatenation = grunt.file.readJSON('concatenation.json');

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        clean: {
            all: ['dist', 'build', 'out']
        },
        cssmin: {
            'dist/main/webapp/stylesheets/libs/css/libs.css': concatenation.cssLibs.themes.standard.files
        },
        csslint: {
            strict: {
                options: {
                    csslintrc: '.csslintrc'
                },
                src: ['src/main/webapp/stylesheets/**/*.css']
            }
        },
        copy: {
            fonts: {
                files: [
                    {src: 'bower_components/font-awesome/font/**',
                        dest: 'dist/main/webapp/stylesheets/libs/font', expand: true, flatten: true}
                ]
            },
            fontsImages: {
                files: [
                    {src: 'src/main/webapp/images/**',
                        dest: 'dist/main/webapp/images', expand: true, flatten: true}
                ]
            }
        },
        concat: {
            jsLibs: {
                src: concatenation.jsLibs.files,
                dest: 'dist/main/webapp/javascript/libs/libs.js'
            },
            angularIELibs: {
                src : concatenation.angularIELibs.files,
                dest: 'dist/main/webapp/javascript/libs/angular-ie-libs.js'
            },
            bootstrapIELibs: {
                src: concatenation.bootstrapIELibs.files,
                dest: 'dist/main/webapp/javascript/libs/bootstrap-ie-libs.js'
            },
            jsApp: {
                src: concatenation.jsApp.files,
                dest: 'dist/main/webapp/javascript/app/app.js'
            },
            cssLibs: {
                src: concatenation.cssLibs.themes.standard.files,
                dest: 'dist/main/webapp/stylesheets/libs/css/libs.css'
            },
            cssApp: {
                src: concatenation.cssApp.themes.standard.files,
                dest: 'dist/main/webapp/stylesheets/app/standard/app.css'
            },
            jsExamples: {
                src: concatenation.jsExamples.files,
                dest: 'dist/main/webapp/javascript/app/examples.js'
            },
            htmlTemplates: {
                src: concatenation.htmlTemplates.files,
                dest: 'dist/main/webapp/templates.html'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: 'dist/main/webapp/templates.html',
                    dest: 'dist/main/webapp/templates.html'
                }]
            }
        },
        jshint: {
            files: [
                'app.js',
                'gruntfile.js',
                'bower.json',
                'concatenation.json',
                'src/main/webapp/javascript/directives/**/*.js',
                'src/main/webapp/javascript/rest-resources/**/*.js',
                'src/main/webapp/javascript/utils/**/*.js',
                'src/main/webapp/javascript/examples/**/*.js',
                'src/test/webapp/javascript/directives/**/*.js',
                'src/test/webapp/javascript/rest-resources/**/*.js',
                'src/test/webapp/javascript/examples/**/*.js',
                'src/test/webapp/javascript/utils/**/*.js',
                'src/main/javascript/**/*.js',
                'src/test/javascript/**/*.js',
                'src/main/resources/**/*.js',
                'src/test/resources/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        markdown: {
            all: {
                files: ['README.md'],
                dest: 'build/docs',
                options: {
                    gfm: true,
                    codeLines: {
                        before: '<span>',
                        after: '</span>'
                    }
                }
            }
        },
        mocha: {
            // This variant auto-includes 'bridge.js' so you do not have
            // to include it in your HTML spec file. Instead, you must add an
            // environment check before you run `mocha.run` in your HTML.
            test: {
                // Test files
                src: ['src/test/webapp/views/pages/index.html'],
                options: {
                    // Pipe output console.log from your JS to grunt.
                    // False by default.
                    log: true,
                    // Mocha options
                    mocha: {
                        ignoreLeaks: false
                    },
                    reporter: 'Spec',
                    // Indicates whether 'mocha.run()' should be executed in
                    // 'bridge.js'. If you include `mocha.run()` in your html spec,
                    // check if environment is PhantomJS.
                    run: true
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['src/test/javascript/**/*.js', 'src/test/resources/**/*.js']
            }
        },
        uglify: {
            options: {
                mangle: false,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/main/webapp/javascript/libs/libs.js': '<%= concat.jsLibs.dest %>',
                    'dist/main/webapp/javascript/libs/angular-ie-libs.js': '<%= concat.angularIELibs.dest %>',
                    'dist/main/webapp/javascript/libs/bootstrap-ie-libs.js': '<%= concat.bootstrapIELibs.dest %>',
                    'dist/main/webapp/javascript/app/app.js': '<%= concat.jsApp.dest %>',
                    'dist/main/webapp/javascript/app/examples.js': '<%= concat.jsExamples.dest %>'
                }
            }
        },
        watch: {
            main: {
                files: [
                    'src/main/webapp/javascript/**/*.js',
                    'src/main/webapp/stylesheets/**/*.css',
                    'src/main/webapp/views/directives/**/*.html',
                    'concatenation.json',
                    'component.json'
                ],
                tasks: ['dist']
            }
        },
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    paths: ['src/main/javascript/', 'src/main/webapp/javascript'],
                    outdir: 'build/docs/'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('check', 'Run csslint and jshint on all source files.', ['csslint', 'jshint']);
    grunt.registerTask('docs', 'Generate all source code and project documentation.', ['yuidoc', 'markdown']);
    grunt.registerTask('dist', 'Build development distribution.', ['concat', 'copy']);
    grunt.registerTask('minify', 'Minimize all CSS and JS source code in the distribution directory', ['cssmin', 'uglify']);
    grunt.registerTask('runTests', 'Run all server JS and client JS unit tests.', ['dist', 'check', 'mocha', 'mochaTest']);
    grunt.registerTask('build', 'Build development distribution and run all unit tests.', ['runTests', 'docs']);
    grunt.registerTask('deploy', 'Build production distribution and run all unit tests.', ['build', 'minify']);
    grunt.registerTask('default', 'The default grunt target is "build".', ['build']);
};
