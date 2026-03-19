import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

function optimizeImages() {
  return gulp
    .src("src/images/*.{jpg,jpeg,png}")
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

export default optimizeImages;
