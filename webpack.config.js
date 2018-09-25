module.exports = {
    mode: "development",
    entry: "./src/index.js", //starting point for our program
    output: {
        path: __dirname + '/public', //absolute path for the directory where we want our output to be
        filename: 'bundle.js' //name of the file that will contain the output
    }
}