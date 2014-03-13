<<<<<<< HEAD
var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

=======
module.exports = function(grunt) {

>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today(\'yyyy-mm-dd\') %> */\n'
            },
            build: {
                src: '<%= pkg.buildPath %>js/<%= pkg.name %>.min.js',
                dest: '<%= pkg.buildPath %>js/<%= pkg.name %>.min.js'
            }
        },
        concat:{
            core:{
                options: {
                    footer: '}(window));'
                },
                src: [
                    'bower_components/handlebars/handlebars.runtime.js',
                    'bower_components/jquery/jquery.js',
                    'bower_components/underscore/underscore.js',
                    'bower_components/jquery-address/src/jquery.address.js',
                    'bower_components/greensock-js/src/uncompressed/**/*.js',
                    'bower_components/knockout/build/output/knockout-latest.js',
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/i18next/release/i18next-1.7.1.js',
                    'app/index.js',
<<<<<<< HEAD
                    'app/**/*.js',
                    '.tmp/*.js',
                ],
=======
                    'app/**/*.js'],
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
                dest: '<%= pkg.buildPath %>js/<%= pkg.name %>.min.js'
            }
        },
        less:{
            options:{
                ieCompact:false,
                yuicompress: true,
                compress: true
            },
            base:{
<<<<<<< HEAD
                files: {
                    '<%= pkg.buildPath %>css/default.css': 'css/**/*.less'
                }
=======
               files: {
                   '<%= pkg.buildPath %>css/default.css': 'css/default.less'
               }
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
            }
        },
        copy: {
            main: {
                files: [
                    {src: 'index.html', dest: '<%= pkg.buildPath %>'},
<<<<<<< HEAD
                    {src: ['css/**/*', '!css/**/*.less'], dest: '<%= pkg.buildPath %>'},
=======
                    {src: 'css/img/**/*', dest: '<%= pkg.buildPath %>'},
                    {src: 'localized-copy/*', dest: '<%= pkg.buildPath %>'},
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
                    {src: 'locales/**/*', dest: '<%= pkg.buildPath %>'}
                ]
            },
            release: {
                files: [
<<<<<<< HEAD
                    {expand: true, cwd: '<%= pkg.buildPath %>/', src: ['**'], dest: '<%= pkg.releasePath %>/'}
=======
                    {expand: true, cwd: 'build/', src: ['**'], dest: 'release/'}
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
                ]
            }
        },
        clean: {
            build: {
                src: ['<%= pkg.buildPath %>']
            },
            release: {
<<<<<<< HEAD
                src: ['<%= pkg.releasePath %>']
=======
                src: ['<%= pkg.buildPath %>']
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
            }
        },
        imagemin: {
            release: {
                files: [{
                    expand: true,
<<<<<<< HEAD
                    cwd: '<%= pkg.releasePath %>css/imgs/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= pkg.releasePath %>css/imgs/'
=======
                    cwd: '<%= pkg.buildPath %>css/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= pkg.buildPath %>css/img/'
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
                }]
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: '<%= pkg.nameSpace %>.templates',
                    processName: function(filePath) { // input:  **/*.html
                        var pieces = filePath.split('/');
                        return pieces[pieces.length - 1]; // output: *.html
                    }
                },
                files: {
<<<<<<< HEAD
                    '.tmp/template-data.js': 'app/**/*.html'
=======
                    'build/js/template-data.js': 'app/**/*.html'
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
                }
            }
        },
        watch: {
<<<<<<< HEAD
            livereload: {
                options: {
                    livereload: {port: LIVERELOAD_PORT}
                },
                files: ['<%= concat.core.src %>', '*.html', 'app/**/*.html', 'css/**/*'],
                tasks: ['base']
            }
        },
        connect: {
            options: {
                port: SERVER_PORT,
                base: 'build/',
                hostname: 'localhost',
                livereload: LIVERELOAD_PORT
            },
            build:{
                options: {
                    base: 'build/'
                },
                server:{}
            },
            release:{
                options: {
                    base: 'release/'
                },
                server:{}
            }

        },
        open: {
            server: {
                path: 'http://127.0.0.1:<%= connect.options.port %>/index.html'
            }
        },
        yuidoc: {
            options: {
                paths: 'app/',
                outdir: 'docs/'
            },
            dist: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '0',
                url: 'website.com'
=======
            files: ['<%= concat.core.src %>', '*.html', 'app/**/*.html'],
            tasks: ['build']
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'build/',
                    keepalive: true
                }
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
            }
        }
    });

<<<<<<< HEAD
    // Default task(s).
    grunt.registerTask('default', ['build']);
    grunt.registerTask('base', ['clean:build', 'copy:main', 'handlebars', 'concat', 'less']);
    grunt.registerTask('build', ['base', 'connect:build', 'open', 'watch']);
    grunt.registerTask('release', function (){
        var tasks = ['base', 'yuidoc', 'clean:release', 'uglify', 'copy:release', 'imagemin', 'connect:release', 'open', 'watch'];
=======
    // Load the plugin that provides the 'uglify' task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['clean:build', 'copy:main', 'concat', 'less', 'handlebars']);
    grunt.registerTask('release', function (){
        var tasks = ['build', 'clean:release', 'imagemin', 'uglify', 'htmlmin', 'copy:release'];
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
        grunt.option('force', true);
        grunt.task.run(tasks);
    });

};