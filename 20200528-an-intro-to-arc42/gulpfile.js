var gulp = require('gulp');
const yargs = require('yargs')

const connect = require('gulp-connect')
const root = yargs.argv.root || '.'
const port = yargs.argv.port || 8000

gulp.task('reload', () => gulp.src(['*.html', '*.md'])
    .pipe(connect.reload()));

gulp.task('serve', () => {

    connect.server({
        root: root,
        port: port,
        host: '0.0.0.0',
        livereload: true
    })

    gulp.watch(['*.html', '*.md'], gulp.series('reload'))

    gulp.watch(['js/**'], gulp.series('reload'))

})