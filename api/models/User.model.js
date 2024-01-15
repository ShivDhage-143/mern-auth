import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({  //it is like authentication means only this type of data are acceptable.
    username:{ 
        type: String,                                  //if you know yup or formik validation so it is similar kind of that.
        required: true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps: true});

const User = mongoose.model('User',userSchema);

export default User;