/*
 * The MIT License
 *
 * Copyright 2017 Nissar Chababy <contact at funilrys dot com>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Require and assign gulp
 * @type Module gulp|Module gulp
 */
var gulp = require('gulp');
/**
 * Require and assign gulp-rename
 * @type Module gulp-sass|Module gulp-sass
 */
var sass = require('gulp-sass');
/**
 * Require and assign gulp-rename
 * @type Module gulp-rename|Module gulp-rename
 */
var rename = require("gulp-rename");
/**
 * Require and assign gulp-clean-css
 * @type Module gulp-clean-css|Module gulp-clean-css
 */
var cleanCSS = require('gulp-clean-css');
/**
 * Require and assign gulp-delete-file
 * @type Module gulp-delete-file|Module gulp-delete-file
 */
var deletefile = require('gulp-delete-file');

var config = {
    /**
     * bootstrap SASS folder
     * @type String
     */
    bootstrapDir: './bower_components/bootstrap-sass',
    /**
     * css destination folder
     * @type String
     */
    publicCssDir: '../../css',
    /**
     * font destination folder
     * @type String
     */
    publicFontDir: '../../fonts',
};

/**
 * Generation of css/bootstrap.css
 */
gulp.task('css-bootstrap', function ()
{
    return gulp.src('./base.scss')
            .pipe(sass({
                includePaths: [config.bootstrapDir + '/assets/stylesheets'],
            }))
            /**
             * We rename the generated file
             */
            .pipe(rename('bootstrap.css'))
            .pipe(gulp.dest(config.publicCssDir));
});

/**
 * Generation of css/bootstrap-theme.css
 */
gulp.task('css-bootstrap-theme', function ()
{
    return gulp.src('./theme.scss')
            .pipe(sass({
                includePaths: [config.bootstrapDir + '/assets/stylesheets'],
            }))
            /**
             * We rename the generated file
             */
            .pipe(rename('bootstrap-theme.css'))
            .pipe(gulp.dest(config.publicCssDir));
});

/**
 * Generation of fonts
 */
gulp.task('fonts', function ()
{
    return gulp.src(config.bootstrapDir + '/assets/fonts/bootstrap/*')

            .pipe(gulp.dest(config.publicFontDir));
});

/**
 * Deletion of minified files if exist
 */
gulp.task('delete-minified', function ()
{
    var regexp = /^.*\.(min.*)/;

    gulp.src(config.publicCssDir + '/*.css')
            .pipe(deletefile({
                reg: regexp,
                /**
                 * true: delete file which match regexp
                 * false: delete file which don't match regexp
                 */
                deleteMatch: true
            }))
});

/**
 * Generation of *.min.css files
 */
gulp.task('minify-css', ['css-bootstrap-theme', 'css-bootstrap', 'delete-minified'], function ()
{
    return gulp.src(config.publicCssDir + '/*css')
            .pipe(cleanCSS({
                compatibility: 'ie8'
            }))
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest(config.publicCssDir));
});

gulp.task('default', ['css-bootstrap', 'css-bootstrap-theme', 'fonts', 'minify-css', 'delete-minified']);

