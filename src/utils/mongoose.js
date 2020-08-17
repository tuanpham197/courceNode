module.exports = {
    mutipleMongooseToObject : function(mongooseArray){
        return mongooseArray.map(ele=>ele.toObject());
    },
    mongooseToObject : (mongoose)=>{
        return mongoose.toObject();
    }

}