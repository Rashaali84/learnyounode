var filterDirectory = require('./mymodule.js');

var dirPath = process.argv[2];
var extension = '.' + process.argv[3];
//takes two argument directory path and extension of files to be filtered
filterDirectory(dirPath, extension, function (err, list) {
    if (err) throw err;
    //console log the list 
    list.forEach(function (file) {
        console.log(file)
    })
})

/*process.argv
//test
node make-it-modular.js e:\ txt
e:\1.txt.txt
e:\2.txt.txt
Return Value: This property
returns an array containing the
arguments passed to the process when run it in the
command line. The first element is the process execution
 path and the second element is the path for the js file.
 */