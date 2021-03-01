const User = require('../models/User')

exports.register = function (req, res){
    let user = new User(req.body);
    user.register()
    // res.send('Thanks for choosing to register')
    if(user.errors.length){
        res.send(user.errors)
    }else {
        res.redirect('/selectPlan')
    }
}

exports.submit = function(req, res){
    let user = new User(req.body)
    user.payValidate()

    if(user.errors.length){
        res.send(user.errors)
    }else {
        res.redirect('/')
    }
}

exports.review = function (req, res){
    res.render('choose-plan-review')
}