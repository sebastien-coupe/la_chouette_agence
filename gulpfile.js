const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const minifyJs = require('gulp-minify');
const minifyCSS = require('gulp-clean-css');

const paths = {
    styles: {
        src: './sources/css/*.css',
        dest: './assets/css/'
    },
    scripts: {
        src: './sources/js/*.js',
        dest: './assets/js/'
    }
};

function styles() {
    return src(paths.styles.src)
        .pipe(concat('main.css'))
        .pipe(minifyCSS())
        .pipe(dest(paths.styles.dest))
}

function scripts() {
    return src(paths.scripts.src)
        .pipe(concat('app.js'))
        .pipe(minifyJs({
            ext: {
                min: '.js'
            },
            noSource: true
        }))
        .pipe(dest(paths.scripts.dest))
}

exports.styles = styles;
exports.scripts = scripts;