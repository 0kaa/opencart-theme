var gulp = require("gulp"),
  concat = require("gulp-concat"),
  prefix = require("gulp-autoprefixer"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps");

gulp.task("css", function () {
  return gulp
    .src("scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(prefix("last 4 versions"))
    .pipe(concat("stylesheet.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("stylesheet"))

});

gulp.task("rtl-css", function () {
  return gulp
    .src("scss/style-rtl.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(prefix("last 4 versions"))
    .pipe(concat("stylesheet-rtl.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("stylesheet"))

});

gulp.task("watch", function () {
  require("./server.js");
  gulp.watch("scss/**", gulp.series("css"));
  gulp.watch("scss/style-rtl.scss", gulp.series("rtl-css"));
});
