const gulp = require("gulp");

const css = () => {
  const postCSS = require("gulp-postcss");
  var sass = require("gulp-sass")(require("sass"));
  const minify = require("gulp-csso");
  sass.compiler = require("node-sass");
  return gulp
    .src("assets/scss/styles.scss", { allowEmpty: true }) //파일 찾기
    .pipe(sass().on("error", sass.logError))
    .pipe(postCSS([require("tailwindcss"), require("autoprefixer")])) //postcss 가 이해하는 플러그인. 폴더에 있는 코드들을 실제 css코드로 변환시켜줌
    .pipe(minify()) // 코드를 짧게 만들어줌
    .pipe(gulp.dest("static/css")); // 마지막에 결과물을 저장할 폴더
};

exports.default = css;
