'use strict';

module.exports = function(grunt) {

  // 基本配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc' //校验配置
        },
        src: 'Gruntfile.js' //被校验的文件
      },
      src: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['src/*.js']
      }
    },
    concat: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        stripBanners: true
      },
      dist: {
        src: ['src/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    }
  });

  //注册build任务(将多个任务合并为一个)
  grunt.registerTask('build', [
    'jshint', // jshint配置的全部(gruntfile+src)
    'concat:dist', // concat配置的dist
    'uglify:dist' // uglify配置的dist
  ]);

  //加载插件
  grunt.loadNpmTasks('grunt-contrib-jshint');//js校验
  grunt.loadNpmTasks('grunt-contrib-concat');//文件合并
  grunt.loadNpmTasks('grunt-contrib-uglify');//文件压缩

  //注册默认任务
  grunt.registerTask('default', ['build']);

};
