var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DogSchema = new Schema({
     breed: String,
     image: String,
     cool: Boolean,
     fluffy: Boolean,
});

var Dog = mongoose.model('Dog', DogSchema);
module.exports = Dog;
