import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    email: {
        type: String,
        validate: {
            validator: v => /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(studenti.polito)\.it$/.test(v)
        },
        message: props => `${props.value} is not a valid student PoliTO email`
    },
    password: String,
    privileges: {
        type: String,
        enum: [ 'ADMIN', 'USER' ]
    }
});

const User = mongoose.model('User', userSchema);

export default User;