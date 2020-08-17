const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Cource = new Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    image : {
        type : String
    },
    videoId : {
        type : String,
        required : true
    },
    level : {
        type : String
    },
    slug : {
        type : String,
        slug : 'name',
        unique: true
    }
},{
    timestamps : true
})

module.exports = mongoose.model('cource',Cource);