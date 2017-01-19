var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify'); // js壓縮
var sass = require('gulp-sass');


gulp.task('concat', function() {
	return gulp.src('./source/js/**/*.js')
	  .pipe(concat('all.js')) // .pipe()水管流程串接
	  .pipe(uglify())
	  .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('sass', function() {
	return gulp.src('./source/scss/**/*.scss')
	  .pipe(sass())
	  .pipe(gulp.dest('./public/stylesheets'));
});

var vendorjs = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/angular/angular.min.js'
];

gulp.task('vendor', function() {
	return gulp.src(vendorjs)
	  .pipe(concat('vendor.js'))
	  .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('watch', function() {
	gulp.watch('./source/js/**/*.js', ['concat']);
	gulp.watch('./source/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['concat', 'sass', 'vendor', 'watch']);