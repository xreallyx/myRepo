var gulp = require('gulp');
var server = require('gulp-express');
var env = require('gulp-env');

gulp.task('default', function () {
	env({
	    vars: {
	      MONGO_URI: 'mongodb://myWebSite:Lafenice_88@ds061354.mongolab.com:61354/rvwebsitedb'
	    }
	  });
  // Start the server at the beginning of the task 
  server.run(['server/server.js'], {}, 7777);

  // Restart the server when file changes 
  gulp.watch(['client/app/**/*.html'], server.notify);
  gulp.watch(['client/assets/**/*'], server.notify);
  gulp.watch(['client/app/**/*.js'], server.notify);

  gulp.watch(['server/**/*.js'], [server.run]);
});