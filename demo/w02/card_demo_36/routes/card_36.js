var express=require('express');
var router=express.Router();
router.get('/',function(req,res,next){
    res.render('card_36/index',{name:'TaiLin Lu',id:'210410436'});
});

module.exports=router;