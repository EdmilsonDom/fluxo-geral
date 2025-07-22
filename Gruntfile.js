module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Concatenação de arquivos JS
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['mov.js', 'gerenciamento_veiculos/**/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    // Minificação do JavaScript
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    // Minificação do CSS
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/style.min.css': ['estilo.css']
        }
      }
    },

    // Minificação do HTML
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'index.html'
        }
      }
    },

    // Watch para desenvolvimento
    watch: {
      files: ['*.js', '*.css', '*.html', 'gerenciamento_veiculos/**/*'],
      tasks: ['default']
    },

    // Cópia de arquivos estáticos
    copy: {
      main: {
        files: [
          // Imagens
          {expand: true, src: ['imagem/**'], dest: 'dist/'},
          // Sons
          {expand: true, src: ['som/**'], dest: 'dist/'},
          // Outros arquivos
          {expand: true, src: ['*.py'], dest: 'dist/'},
          {expand: true, src: ['*.jsx'], dest: 'dist/'}
        ]
      }
    }
  });

  // Carrega os plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Tarefa padrão
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'htmlmin', 'copy']);
  
  // Tarefa de desenvolvimento
  grunt.registerTask('dev', ['default', 'watch']);
};