const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))

function compilarSass() {
    return gulp.src("./main.scss")
        .pipe(sass())
        /* .pipe(sass({ outputStyle: 'compressed' })) */
        .pipe(gulp.dest("./"))
}

exports.sass = compilarSass