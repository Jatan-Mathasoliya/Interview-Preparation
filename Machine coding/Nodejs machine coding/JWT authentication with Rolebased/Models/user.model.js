import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    email : {
        type:String,
        unique:true
    },
    password : {
        type:String
    },
    firstname : String,
    lastname : String,
    role:{
        type:String,
        enum:['user', 'admin'],
        default:'user'
    }
})

const UserModel = model('Users', UserSchema);

export default UserModel;