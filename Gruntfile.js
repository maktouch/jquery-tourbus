module.exports = function(grunt) {

  grunt.initConfig( {
    pkg: grunt.file.readJSON( 'package.json' ),

    coffee: {
      compile: {
        files: {
          'dist/<%= pkg.name %>.js': 'src/<%= pkg.name %>.coffee'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
        }
      }
    },
    less: {
      production: { files: {
        "dist/<%= pkg.name %>.css": ["src/<%= pkg.name %>.less"]
      } }
    },
    cssmin: {
      compress: {
        options: {
          keepLineBreaks: true
        },
        files: {
          'dist/<%= pkg.name %>.min.css': ['dist/<%= pkg.name %>.css']
        }
      }
    },
    watch: {
      files: ['src/<%= pkg.name %>.coffee'],
      tasks: ['coffee', 'uglify']
    }
  } );

  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-coffee' );
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  grunt.registerTask( 'default', [
    'coffee', 'uglify',
    'less', 'cssmin'
  ] );

}