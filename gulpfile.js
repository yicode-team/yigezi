let gulp = require("gulp");
let gulpSass = require("gulp-sass")(require("sass"));
async function public_default() {
    gulp.src("./src/yigezi.scss")
        //
        .pipe(gulpSass().on("error", gulpSass.logError))
        .pipe(gulp.dest("./dist"));
    await Promise.resolve("");
}
gulp.watch("./src/**/*.scss", gulp.series(public_default));
exports.default = public_default;
