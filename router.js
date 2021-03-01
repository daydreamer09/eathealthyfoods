const express = require('express')
const router = express.Router()
const linkController = require('./controllers/linkController')
const userController = require('./controllers/userController')

router.get('/', linkController.home)

router.get('/about', linkController.aboutUs)

router.get('/blog', linkController.blog)

router.get('/program', linkController.program)

router.get('/pricing', linkController.pricing)

router.get('/menu', linkController.menu)

router.get('/choosePlanAboutUs', linkController.checkoutAboutUs)

router.get('/singleMenu', linkController.singleMenu)

router.get('/review', userController.review)

router.post('/register', userController.register)

router.post('/pay', userController.submit)

router.get('/checkout', linkController.checkout)

router.get('/regPage', linkController.regPage)

router.get('/selectPlan', linkController.selectPlan)

module.exports = router