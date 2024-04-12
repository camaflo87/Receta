const {dest,src,watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done){
    // Identificar el archivo
    src('src/scss/**/*.scss')
    .pipe(plumber()) //Identificar errores
    .pipe(sass()) //Compilarlo
    .pipe(dest('build/css'));

    done();
}

function dev(done){
    //Detectar cambios
    watch('src/scss/**/*.scss',css);

    done();
}

exports.css = css;
exports.dev = dev;