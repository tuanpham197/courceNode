const Cource = require('../models/Cource');
const {mutipleMongooseToObject,mongooseToObject} = require('../../utils/mongoose');

class CourceController {
    //[GET] /cource/:slug
    show(req,res){
        Cource.findOne({slug : req.params.slug})
                .then(cource=>{
                    //res.json(cource);
                    res.render('cources/detail',{
                        cource : mongooseToObject(cource)
                    });
                })
                .catch(err=>{
                    res.json(err);
                })
    }
    //[GET] /cource/create
    create(req,res){
        res.render('cources/create')
    }
    //[POST] /cource/store
    store(req,res){
        let formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${formData.videoId}/hqdefault.jpg`;
        
        let cource = new Cource(formData);

        cource.save()
                .then(()=>{
                    res.redirect('/news');
                })
                .catch(err=>{
                    console.log(err);
                });
    }
}

module.exports =new CourceController;