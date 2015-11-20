var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('compile', function() {
    var b = browserify('src/app.jsx', {
        insertGlobals: true,
        debug: true,
        extensions: ['.jsx'],
        transform: [babelify.configure({presets: ['es2015', 'react']})]
    });

    return b.bundle()
     .pipe(source('app.js'))
     .pipe(gulp.dest('./web'));
});

gulp.task('watch', function() {
    return gulp.watch(['src/**/*.js', 'src/**/*.jsx'], ['compile']);
});

gulp.task('default', ['compile']);
