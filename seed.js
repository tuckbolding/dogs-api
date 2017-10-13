// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');
//

var dogs=[
  {
       breed: "Lab",
       image: "dog.png",
       cool: true,
       fluffy: false,
  },
  {
       breed: "Cat",
       image: "dog.png",
       cool: true,
       fluffy: true,
  },
  {
       breed: "Retriever",
       image: "dog.png",
       cool: true,
       fluffy: true,
  },
  {
       breed: "Boxer",
       image: "dog.png",
       cool: true,
       fluffy: false,
  }
]


  db.Dog.create(dogs, function(err, goodDogs){
    if (err){
      return console.log("Error:", err);
    }

    console.log("Created new dogs \n", goodDogs)
    process.exit(); // we're all done! Exit the program.
  })
