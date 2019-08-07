const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minifycss = require('gulp-clean-css');
const concat = require('gulp-concat');
const clean = require('gulp-rimraf');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const uglifycss = require('gulp-uglifycss');

// remove unused css
gulp.task('clean', [], function() {
  console.log("Clean all files in build folder");
  return gulp.src("./public/assets/css/*", { read: false })
  .pipe(clean());
});

// compile sass
// gulp.task('sass-dashboard', ['clean'], function(){
//   return gulp.src([
//       './public/assets/scss/swiper.css',

//       './public/assets/scss/dashboard.scss',
//     ])
//     .pipe(sourcemaps.init({
//       loadMaps: true
//     }))
//     .pipe(sass())
//     .pipe(concat('dashboard.css'))
//     .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//     .pipe(sourcemaps.write('.'))
//     .pipe(uglifycss())
//     .pipe(gulp.dest('./public/assets/css'))
//     .pipe(browserSync.stream());
// });

gulp.task('sass-front', ['clean'], function(){
  return gulp.src([
      './public/assets/scss/menu.scss',
      './public/assets/scss/style.scss',
      './public/assets/scss/swiper.scss',
    ])
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('.'))
    // .pipe(uglifycss())
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(browserSync.stream());
});

// concat & minify dashboard js
// gulp.task('minify-dashboard', function(){
//   console.log('javascript has successfully concat and minified');
//   return gulp.src([
//     './public/assets/js/$.js',
//     './public/assets/js/accordion.js',
//     './public/assets/js/action.js',
//     './public/assets/js/closestParent.js',
//     './public/assets/js/media.js',
//     './public/assets/js/media-create-post.js',
//     './public/assets/js/modal.js',
//     './public/assets/js/navigation.js',
//     './public/assets/js/navigation-filter.js',
//     './public/assets/js/navigation-view.js',
//     './public/assets/js/placeHolder.js',
//     './public/assets/js/settings.js',
//     './public/assets/js/sidebarMenu.js',
//     './public/assets/js/swiper-init.js',
//     './public/assets/js/tab.js',
//     './public/assets/js/toolbar.js',
//     './public/assets/js/tooltip.js'
//   ])
//   .pipe(concat('dashboard.js'))
//   .pipe(uglify())
//   .pipe(gulp.dest('./public/assets/js'))
//   .pipe(gulp.dest('./public/assets/dist/js'));
// });

// concat & minify main js
gulp.task('minify-front', function(){
  console.log('javascript has successfully concat and minified');
  return gulp.src([
    './public/assets/js/$.js',
    './public/assets/js/accordion.js',
    './public/assets/js/menu.js',
    './public/assets/js/swiper.js',
  ])
  .pipe(concat('main.js'))
  // .pipe(uglify())
  .pipe(gulp.dest('./public/assets/js'))
  .pipe(gulp.dest('./public/assets/dist/js'));
});

// watch & serve
gulp.task('serve', [
  // 'sass-dashboard',
  'sass-front',
  // 'minify-dashboard',
  'minify-front'], function(){
  browserSync.init({
    server: './src'
  });

  gulp.watch(['./public/assets/scss/*.scss'], ['sass-front']);
  gulp.watch(['./public/assets/*html']).on('change', browserSync.reload);
  gulp.watch(['./public/assets/js/*js'], ['minify-front']).on('change', browserSync.reload);
});

// default
gulp.task('default', ['serve']);

// export
// html
gulp.task('copyHTML', function(){
  gulp.src('./public/assets/*html')
  .pipe(gulp.dest('./public/assets/dist/'));
});

// css
gulp.task('copyCSS', function(){
  gulp.src('./public/assets/css/*')
  .pipe(gulp.dest('./public/assets/dist/css/'));
});

// export & minify css
gulp.task('minifyCSS', function(){
  gulp.src('./public/assets/css/*')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(uglifycss())
  .pipe(gulp.dest('./public/assets/dist/css/'));
});

// fonts
gulp.task('copyFonts', function(){
  gulp.src('./public/assets/fonts/*')
  .pipe(gulp.dest('./public/assets/dist/fonts/'));
});

// images
gulp.task('copyImages', function(){
  gulp.src('./public/assets/images/*')
  .pipe(gulp.dest('./public/assets/dist/images/'));
});


// exoprt & minify js
gulp.task('minifyJS', function(){
  gulp.src([
    './public/assets/js/core.js',
    './public/assets/js/core-finder.js',
    './public/assets/js/finder.js',
    './public/assets/js/main.js',
  ])
  .pipe(uglify())
  .pipe(gulp.dest('./public/assets/dist/js'));
});

// html
gulp.task('copyAJAX', function(){
  gulp.src('./public/assets/ajax/*')
  .pipe(gulp.dest('./public/assets/dist/ajax/'));
});

// export
gulp.task('export', [
  'copyHTML',
  'copyCSS',
  'minifyCSS',
  'copyFonts',
  'copyImages', 
  'minifyJS',
  'copyAJAX'
]);