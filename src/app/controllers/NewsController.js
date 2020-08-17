const Cource = require('../models/Cource');
const {mutipleMongooseToObject} = require('../../utils/mongoose');

class NewsController {
    //[GET] /news
    index(req,res){
        Cource.find({})
            .then(cources=>{
                res.render('news',{
                    cources : mutipleMongooseToObject(cources)
                });
            })
            .catch(err=>{
                res.status(400).json({error : "ERROR!!"});
            })
    }
    show(req,res){
        return res.send("halo");
    }
}

module.exports =new NewsController;