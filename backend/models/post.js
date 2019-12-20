var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    username: {type:String, require:true},
    text: {type:String, require:true},
    created: {type:Date, require:true}
});

module.exports = mongoose.model('Post', postSchema);