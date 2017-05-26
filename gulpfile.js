var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var htmlmin = require("gulp-htmlmin");

var paths = {
  images: "src/assets/images/**/*",
  css: "src/assets/css/**/*"
}

gulp.task("minify", function () {
  return gulp.src("src/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist"));
});

gulp.task("imagemin", function () {
  gulp.src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
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
