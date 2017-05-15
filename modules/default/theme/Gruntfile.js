module.exports = function(grunt) {
	require("time-grunt", "load-grunt-tasks")(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		sass: {
			options: {
				sourceMap: false
			},
			dist: {
				files: {
					"../../../css/main-test.css": "sass/main.scss"
				}
			}
		}
	});
	grunt.loadNpmTasks("grunt-sass");
	// grunt.registerTask("default", ["eslint", "stylelint", "jsonlint", "markdownlint", "yamllint"]);
	grunt.registerTask("dev", ["sass"]);
};
