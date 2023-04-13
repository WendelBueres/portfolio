import image from 'gulp-image';
import gulp from 'gulp';
import inlinesource from 'gulp-inline-source';
import replace from 'gulp-replace';

gulp.task('default', () => {
    return gulp.src('build/*.html')
        .pipe(replace('.js"></script>', '.js" inline></script>'))
        .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
        .pipe(replace('.src/assets/.*'))
        .pipe(inlinesource(
            {
                compress: false,
                ignore: ['png']
            }
        ))
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true // defaults to false
          }))
        .pipe(gulp.dest('./build'));
})