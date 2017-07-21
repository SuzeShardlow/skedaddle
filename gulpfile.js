const gulp        = require('gulp');
const sass        = require('gulp-sass');
const nodemon     = require('gulp-nodemon');
const babel       = require('gulp-babel');
const cleanCSS    = require('gulp-clean-css');
const plumber     = require('gulp-plumber');
const uglify      = require('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task('js', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('sass', () => {
  return gulp.src('src/scss/**/*.scss')
    .pipe(plumber()) // if there is an error it will notify the error but not stop gulp/stop the server running
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('fonts', () => {
  return gulp.src('src/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('public/fonts'))
    .pipe(browserSync.stream());
});

gulp.task('images', () => {
  return gulp.src('src/images/**/*.{png,jpg,jpeg,gif,ico}')
    .pipe(gulp.dest('public/images'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['js', 'sass'], () => {
  browserSync.init({
    proxy: 'http://localhost:3000',
    port: 8000, // need to manually go to localhost:3000
    files: ['public/**/*.*'],
    reloadDelay: 500,
    notify: false,
    open: false
  });

  return nodemon({ script: 'index.js'})
  .on('start', () => browserSync.reload());
});

gulp.task('default', ['sass', 'js', 'images', 'fonts', 'serve'], () => {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/images/**/*.{png,jpg,jpeg,gif,ico}', ['images']);
  gulp.watch('src/fonts/**/*.{eot,svg,ttf,woff,woff2}', ['fonts']);
  gulp.watch('views/**/*.ejs', browserSync.reload);
});

gulp.task('deploy', ['sass', 'js', 'images', 'fonts']);
