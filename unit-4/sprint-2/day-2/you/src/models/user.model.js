const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 20 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 8, maxLength: 20 }

}, {
    versionKey: false,
    timestamps: true
})

// It is call while creating and updating.
userSchema.pre('save', function(next) {
    if (!this.isModified("password")) next();

    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;

    return next();


})


userSchema.methods.checkPassword = function(password) {
    const match = bcrypt.compareSync(password, this.password);

    return match;
}
const user = mongoose.model('user', userSchema);

module.exports = user;