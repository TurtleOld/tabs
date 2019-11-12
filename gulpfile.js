var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var rename = require("gulp-rename");
var cssmin = require("gulp-cssmin");
var autoprefixer = require("autoprefixer");
var postcss = require("gulp-postcss");

var paths = {
    styles: {
        src: 'sass/*.sass'
    }
};

function styles() {
    return gulp
        .src(paths.styles.src,{
            sourcemaps: true
        })
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(rename({
            suffix: '.notMin'
        }))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
};

function watch() {
    browserSync.init({
        server: '.'
    })
    gulp.watch(paths.styles.src, styles);
    gulp.watch('*.html').on('change', browserSync.reload);
};

var tabs = gulp.parallel(styles, watch);

gulp.task(tabs);

gulp.task('default', tabs);