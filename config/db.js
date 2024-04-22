const mongoose = require('mongoose');


const connectDb = () =>{
  mongoose.connect('mongodb://localhost/Users').then(() =>{
  console.log('connected successfully to the server');
})
}

module.exports = connectDb;