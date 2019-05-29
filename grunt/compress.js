/**
 * @link https://github.com/gruntjs/grunt-contrib-compress
 */
module.exports = {
    "dist": {
        options: {
            archive: "<%= cfg.path.dist %>/<%= package.name %>-<%= package.version %>.zip"
        },
        files: [{
            expand: true,
            src: [
                "**/*",
                "!.git/**",
                "!.gitattributes",
                "!.gitignore",
                "!.jshintrc",
                "!.tx",
                "!todo",
                "!TODO.txt",
                "!assets/**",
                "!bin/**",
                "!bower.json",
                "!CHANGELOG.md",
                "!composer.json",
                "!composer.lock",
                "!grunt/**",
                "!Gruntfile.js",
                "!node_modules/**",
                "!npm-debug.log",
                "!package.json",
                "!package-lock.json",
                "!phpunit.xml",
                "!tests/**",
                "!travis.yml",
                "!unit-tests/**",
                "!vendor/bin/**",
                "!vendor/composer/**",
                "!test/**"
            ],
            dest: "./<%= package.name %>"
        }]
    }
};
