const usersCollections = require('../db').collection('users')
const validator = require('validator')

let User = function (data){
    this.data = data
    this.errors = []
    // console.log(this.data)
}

User.prototype.cleanUp = function (){
    //making sure data is only string
    if(typeof(this.data.name) != 'string') {this.data.name = ''}
    if(typeof(this.data.address) != 'string') {this.data.address = ''}
    if(typeof(this.data.email) != 'string') {this.data.email = ''}
    if(typeof(this.data.code) != 'string') {this.data.code = ''}
    if(typeof(this.data.cardNumber) != 'string') {this.data.cardNumber = ''}

    //removing any other unexpected irrelevant data
    this.data = {
        name: this.data.name,
        email: this.data.email.trim().toLowerCase(),
        address: this.data.address.trim().toLowerCase(),
        code: this.data.code.trim()
    }
}

User.prototype.validate = function () {
    if (this.data.name === '') {this.errors.push('You must have a valid Name')}
    if (this.data.name != '' && !validator.isAlpha(this.data.name)) {'Full Name should have only alphabets'}
    if(!validator.isEmail(this.data.email)) {this.errors.push('You must have a valid email address')}
    if (this.data.code === '') {this.errors.push('You must have a valid ZIP code')}
    if (this.data.address === '') {this.errors.push('You must have a valid Address')}
} 

User.prototype.payValidate = function() {
    if (this.data.name === '') {this.errors.push('You must have a valid Name')}
    if (this.data.name != '' && !validator.isAlpha(this.data.name)) {'Full Name should have only alphabets'}
    if (this.data.cardNumber === '') {this.errors.push('You must have a valid code')}
    if (this.data.cardNumber.length < 16) {this.errors.push('credit card has 16 character') }
    if (this.data.cvv === '') {this.errors.push('You must have a valid code')}
    if (this.data.cvv.length < 3) {this.errors.push('CVV has 3 character') }

    //save to database
    if(!this.errors.length){
        usersCollections.insertOne(this.data)
    }
}


User.prototype.register = function () {
    //validate the data
    this.cleanUp()
    this.validate()

    //save to database
    if(!this.errors.length){
        usersCollections.insertOne(this.data)
    }
}


module.exports = User