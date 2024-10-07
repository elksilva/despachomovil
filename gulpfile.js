const { src, dest, watch, parallel } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const postcss    = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('cssnano');

const imagemin = require('gulp-imagemin'); // Minificar imagenes 
const notify = require('gulp-notify');
const cache = require('gulp-cache');
const clean = require('gulp-clean');
const avif = require('gulp-avif');
//const webp = require('gulp-webp');

const concat = require('gulp-concat');
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'
}

// css es una función que se puede llamar automaticamente
function css() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(postcss([autoprefixer(), cssnano()]))
        // .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe( dest('build/css') );
}


function javascript() {
    return src(paths.js)
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(dest('build/js'));
}

function imagenes() {
    return src(paths.imagenes)
        .pipe(cache(imagemin({ optimizationLevel: 3})))
        .pipe(dest('build/img'))
        //.pipe(notify({ message: 'Imagen Completada'}));
}
/*
function versionWebp() {
    return src(paths.imagenes)
        .pipe( webp() )
        .pipe(dest('build/img'))
        .pipe(notify({ message: 'Imagen Completada'}));
}*/

function versionAvif( done ) {
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe( avif(opciones) )
        .pipe( dest('build/img') )
    done();
}


function dev(done) {
    watch( paths.scss, css );
    watch( paths.js, javascript );
    watch( paths.imagenes, imagenes)
    //watch( paths.imagenes, versionWebp)
    //watch( paths.imagenes, versionAvif)
    done()
}

  
exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
//exports.versionWebp = versionWebp;
//exports.versionAvif = versionAvif;

exports.dev = parallel( css, imagenes, /*versionWebp,*/ /*versionAvif,*/ javascript, dev) ;