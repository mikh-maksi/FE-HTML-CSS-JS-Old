module.exports = function(grunt) {


grunt.initConfig({
  cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'css',
      src: ['styles.css'],
      dest: 'css',
      ext: '.min.css'
    }]
  }
},
  concat_css: {
    options: {
      // Task-specific options go here. 
    },
    all: {
      src: ["css/*.css"],
      dest: "css/styles.css"
    },
  },
  concat: {
    options: {
      separator: '',
    },
    dist: {
      src: ['js/js1.js', 'js/js2.js'],
      dest: 'js/js.js',
    },
  },
});


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat','concat_css','cssmin']);
};
