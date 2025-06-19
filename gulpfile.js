const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

// Server task
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "src"
        }
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Styles task (updated)
gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(postcss([autoprefixer()])) // ← Используем postcss + autoprefixer
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Watch task
gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
});

// Default task
gulp.task('default', gulp.parallel('watch', 'server', 'styles'));