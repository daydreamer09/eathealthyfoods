
exports.home = function(req, res) {
    res.render('home-version1')
}

exports.aboutUs = function(req, res) {
    res.render('about-us')
}

exports.blog = function(req, res) {
    res.render('blog')
}

exports.pricing = function(req, res) {
    res.render('pricing')
}

exports.menu = function(req, res) {
    res.render('sample-menu')
}

exports.program = function(req, res) {
    res.render('program')
}

exports.checkoutAboutUs = function (req, res){
    res.render('choose-plan-about-us')
}

exports.singleMenu = function (req, res){
    res.render('menu-single')
}

exports.checkout = function (req, res){
    res.render('choose-plan-checkout')
}

exports.regPage = function (req, res){
    res.render('choose-plan-about-us')
}

exports.selectPlan = function (req, res){
    res.render('choose-plan-select-program')
}

