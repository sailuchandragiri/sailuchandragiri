const mongoose = require('mongoose');

const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
        first_name: { type: String, required: false },
        last_name: { type: String, required: false },
        gender: { type: String, required: false },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, minLength: 5, maxLength: 100 },
        age: { type: Number, required: false },
        roles: [{ type: String, required: false }]
    }, {
        versionKey: false,
        timestamps: true
    })
    
userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const hash = bcryptjs.hashSync(this.password, 8);

    this.password = hash;

    return next();
})

userSchema.methods.checkPassword = function(password) {
    const match = bcryptjs.compareSync(password, this.password);

    return match;
}
module.exports = mongoose.model('user', userSchema);
