const newsRouter = require('./news');
const courcesRouter = require('./cources');

function route(app){
    app.get('/',(req,res)=>{
        res.render('home');
    })
    app.use('/news',newsRouter);
    app.use('/cource',courcesRouter);
}
 
module.exports = route;