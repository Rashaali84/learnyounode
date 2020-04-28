var fs = require('fs'); // load fs,path node modules 
var path = require('path');
/*
The fs. readdir() method is used to asynchronously
read the contents of a given directory. The callback of this method returns an array of all the file names in the directory.
 The options argument can be used to change
 the format in which the files are returned from
 the method.
 fs.readdir( path, options, callback )
 https://www.geeksforgeeks.org/node-js-fs-readdir-method/
 */
var filterDirectory = function (dirPath, extension, cb) {
    fs.readdir(dirPath, function (err, list) {
        if (err) return cb(err);
        //The path.join() method joins the specified path segments into one path.
        //The path.extname() method returns the extension of the path
        var filtered = list.map(function (fileName) {
            return path.join(dirPath, fileName);
        }).filter(function (filePath) {
            return path.extname(filePath) === extension;
        })
        //return filtered array using call-back function 

        cb(null, filtered);
    })
}
//export the function takes 3 arguments 
module.exports = filterDirectory;