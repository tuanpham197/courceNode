const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://admin:admin123!@@kentei-6f3ag.mongodb.net/tintuc?retryWrites=true&w=majority',
            {
                useNewUrlParser : true,
                useUnifiedTopology : true
            }
        )
        console.log("Connect db successfully !!");
    }
    catch(error){
        console.log(error);
    }
}
module.exports = {connect}