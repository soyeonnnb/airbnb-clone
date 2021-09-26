const gulp = require("gulp");

const css = ()=>{
    const postCSS = require("gulp-postcss");
    const sass = require("gulp-sass");
    const minify = require("gulp-csso");
    sass.compiler = require("node-sass");
    return gulp;
};

exports.default = css;