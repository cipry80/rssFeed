module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: {
      outputDir: '/public/',
      timestamp: grunt.template.today("yyyymmdd-HHMM")
    },
    clean: ["dist/**/*.*"],
    copy: {
      dist: {
        files: [
          {
            expand: true,
            src: [
                'app/**',
                'config/**',
                'public/**',
                //'!public/css/*.css',
                '!public/less/**',
                '!public/js/**',
                'package.json',
                'server.js'
            ],
            dest: 'dist/'
          }
        ]
      }
    },
    uglify: {
            dist: {
                files:{
                    'dist/public/js/news.min.js': ['public/js/news.js']
                }
            }
    },
    cssmin: {
        dist: {
            files: [{
                expand: true,
                cwd: 'public/css/',
                src: ['*.css',],
                dest: 'dist/css',
                ext: '.min.css'
            }]
        }
    },
    less: {
      options: {
        compress: true
      },
      dist: {
        files: {
          'public/css/style.css': 'public/less/style.less'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      less: {
        files: ['public/less/*'],
        tasks: ['css', 'cssmin']
      },
      js: {
        files: ['public/js/**/*'],
        tasks: ['uglify']
      },
      html: {
        files: ['*.html']
      }
    }
  });
  grunt.registerTask('mincss', ['cssmin']);
  grunt.registerTask('minjs', ['uglify']);
  grunt.registerTask('css', ['less']);

  grunt.registerTask('liveWatch', ['watch']);
  grunt.registerTask('default', ['clean', 'less', 'uglify', 'cssmin',  'copy']);
};
