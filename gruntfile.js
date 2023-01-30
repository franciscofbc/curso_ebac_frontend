module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    "dev/styles/main.css": "src/styles/main.less"
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    "dist/styles/main.min.css": "src/styles/main.less"
                }
            }
        },
        watch: {
            less: {
                files: ["src/styles/**/*.less"],
                tasks: ["less:development"]
            },
            html: {
                files: ["src/index.html"],
                tasks: ["replace:dev"]
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: "ENDERECO_DO_CSS",
                            replacement: "./styles/main.css"
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ["src/index.html"],
                        dest: "dev/"
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: "ENDERECO_DO_CSS",
                            replacement: "./styles/main.min.css"
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ["prebuild/index.html"],
                        dest: "dist/"
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    "prebuild/index.html": "src/index.html"
                }
            }
        },
        clean: [
            "prebuild"
        ]


        /* ,
        sass: {
            dist: {
                options: {
                    style: "compressed"
                },
                files: {
                    "main2.css": "main.scss"
                }
            }
        },
        concurrent: {
            target: ["test", "less", "sass"]
        } */
    })

    /*    grunt.registerTask("test", function () {
           const done = this.async()
           setTimeout(function () {
               console.log("test")
               done()
           }, 3000)
       }) */

    grunt.loadNpmTasks("grunt-contrib-less")
    /* grunt.loadNpmTasks("grunt-contrib-sass")
    grunt.loadNpmTasks("grunt-concurrent") */
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks("grunt-replace")
    grunt.loadNpmTasks("grunt-contrib-htmlmin")
    grunt.loadNpmTasks("grunt-contrib-clean")

    /* grunt.registerTask("default", ["concurrent"]) */
    /* grunt.registerTask("default", ["less:development"]) */
    grunt.registerTask("default", ["watch"])
    grunt.registerTask("build", ["less:production", "htmlmin:dist", "replace:dist", "clean"])
}