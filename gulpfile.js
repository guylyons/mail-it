var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var htmlmin = require("gulp-htmlmin");
var inlinecss = require("gulp-inline-css");

var paths = {
  images: "src/assets/img/**/*",
  css: "src/assets/css/**/*"
}

gulp.task("minify", function () {
  return gulp.src("src/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist"));
});

gulp.task("imagemin", function () {
  gulp.src("src/assets/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
});

gulp.task("inlinecss", function () {
  return gulp.src("src/*.html")
    .pipe(inlinecss())
    .pipe(gulp.dest("dist"));
});

//
// gulp.task("unused", function () {
//   return gulp.src('test.css')
//     .pipe(remove({
//       whitelist: []
//     }))
//     .pipe(gulp.dest('./out'));
// });
//
