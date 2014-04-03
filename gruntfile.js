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
                    '.tmp/*.js',
                    'vendor/jquery.js',
                    'vendor/**/*.js',
                    'app/Main.js',
                    'app/**/*.js'
                ],
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
                files: {
                    '<%= pkg.buildPath %>css/default.css': 'css/**/*.less'
                }
            }
        },
        copy: {
            main: {
                files: [
                    {src: 'index.html', dest: '<%= pkg.buildPath %>'},
                    {src: ['css/**/*', '!css/**/*.less'], dest: '<%= pkg.buildPath %>'},
                    {src: 'locales/**/*', dest: '<%= pkg.buildPath %>'}
                ]
            },
            release: {
                files: [
                    {expand: true, cwd: '<%= pkg.buildPath %>/', src: ['**'], dest: '<%= pkg.releasePath %>/'}
                ]
            }
        },
        clean: {
            build: {
                src: ['<%= pkg.buildPath %>']
            },
            release: {
                src: ['<%= pkg.releasePath %>']
            }
        },
        imagemin: {
            release: {
                files: [{
                    expand: true,
                    cwd: '<%= pkg.releasePath %>css/imgs/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= pkg.releasePath %>css/imgs/'
                }]
            }
        },
        watch: {
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
            }
        },
        htmlConvert: {
            options: {
                base: '',
                rename: function($moduleName){
                    return $moduleName.split('/').reverse()[0];
                },
                fileHeaderString: 'var Chaos = Chaos || {}; Chaos.NS = Chaos.NS || {};'
            },
            "ChaosTemplates": {
                src: ['app/**/*.html'],
                dest: '.tmp/template-data.js'
            }
        },
        imageEmbed: {
            dist: {
                src: [ '<%= pkg.buildPath %>css/default.css' ],
                dest: '<%= pkg.buildPath %>css/default.css',
                options: {
                    deleteAfterEncoding : false
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['build']);
    grunt.registerTask('base', ['clean:build', 'copy:main', 'htmlConvert', 'concat', 'less']);
    grunt.registerTask('build', ['base', 'connect:build', 'open', 'watch']);
    grunt.registerTask('release', function (){
        var tasks = ['base', 'yuidoc', 'clean:release', 'uglify', 'copy:release', 'imagemin', 'connect:release', 'open', 'watch'];
        grunt.option('force', true);
        grunt.task.run(tasks);
    });

    grunt.registerTask('run', ['build', 'connect']);

};
