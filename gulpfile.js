const gulpfile = require('gulp');
const stylus = require('gulp-stylus');
const pug = require('gulp-pug');
const plumberNotifier = require('gulp-plumber-notifier');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const cleanss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
/*const merge = require('merge-stream');
const imagemin = require('gulp-imagemin');
const run = require('run-sequence');
const del = require('del');
const concat = require('gulp-concat');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const path = require('path');*/

gulpfile.task('html', function() {
    return gulpfile.src('src/*.html')
        .pipe(plumberNotifier())
        .pipe(gulpfile.dest('src/'))
        .pipe(browserSync.stream());
});

gulpfile.task('pug', function() {
    return gulpfile.src('src/*.pug')
        .pipe(pug())
        .pipe(gulpfile.dest('src/'))
        .pipe(browserSync.stream());
});

gulpfile.task('stylus', function () {
    return gulpfile.src('src/stylus/style.styl')
        .pipe(plumberNotifier())
        .pipe(stylus())
        .pipe(postcss([
            autoprefixer({browsers: [
                    'last 2 versions',
                    'Explorer >= 10'
                ]}),
            mqpacker ({
                sort: true
            })
        ]))
        .pipe(rename('style.css'))
        .pipe(gulpfile.dest('src/css'))
        .pipe(cleanss())
        .pipe(rename('style.min.css'))
        .pipe(gulpfile.dest('src/css'))
        .pipe(browserSync.stream());
});