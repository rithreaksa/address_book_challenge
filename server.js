const superstatic = require('superstatic');
const browserSync = require('browser-sync').create();

browserSync.init({
  server: {
    baseDir: 'src',
    middleware: [superstatic({ stack: 'strict' })]
  },
  port: 3001,
  watch: true,
  files: ['./src*.html', './src/**/*.css', './src/**/*.js']
});
