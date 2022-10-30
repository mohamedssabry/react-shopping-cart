const gulp = require("gulp");
const gulpsass = require("gulp-sass");
const sass = gulpsass(require("sass"));

gulp.task("watch", async function () {
  gulp.watch(
    ["src/components/**/*.scss", "src/pages/*.scss"],
    async function () {
      gulp
        .src(["src/components/**/*.scss", "src/pages/*.scss"])
        .pipe(sass())
        .pipe(gulp.dest("src/css"));
    }
  );
});
