const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  favorite: [{ 
    type: String, 
  }]
  // DOB: {
  //   type: Number,
  //   required: true,
  // }
},
  {
    timestamps: true
  }
);

// 'User =' may cause a problem with heroku
module.exports = User = mongoose.model('User', UserSchema);


// const mongoose = require('mongoose')
// const Schema = mongoose.Schema



// const UserSchema = new Schema({
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     favedEvents: [{
//         type: mongoose.Types.ObjectId,
//         ref: 'Event'
//     }],
//     date: {
//       type: Date,
//       default: Date.now
//     },
//     avatar: {
//         type:String,
//     }
//   });

//   module.exports = User = mongoose.model('users', UserSchema)