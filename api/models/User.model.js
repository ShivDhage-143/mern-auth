import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({  //it is like authentication means only this type of data are acceptable.
    username:{ 
        type: String,                      //if you know yup or formik validation so it is similar kind of that.
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
    },
    profilePicture:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile&psig=AOvVaw3SqKnB_4Ld-iPFeqm_74Y2&ust=1705482182096000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCLCln7HG4YMDFQAAAAAdAAAAABAE",
    },
},
{timestamps: true});

const User = mongoose.model('User',userSchema);

export default User;