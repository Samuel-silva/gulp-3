const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.css', 'deps.fonts', 'deps.js'])

gulp.task('deps.css', () => {
    return gulp.src([
        'node_modules/font-awesome/css/font-awesome.css',
        'node_modules/quill/dist/quill.snow.css'
    ])
        .pipe(uglifycss({ "uglyComments": false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('deps.fonts', () => {
    return gulp.src(['node_modules/font-awesome/fonts/*.*'])
        .pipe(gulp.dest('build/assets/fonts'))
})

gulp.task('deps.js', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/quill/dist/quill.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('build/assets/js'))
})