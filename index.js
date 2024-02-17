const _ = require('underscore')

//First assumption is that this is a Core module
//Then thinks it is a file or folder in this project 
//Then iterates to assume module is a part of the node_modules folder
// This is how require() resolves a module 

let result = _.contains([1, 2, 3], 4)
console.log(result)

