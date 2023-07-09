const mongoose = require('mongoose');

mongoose.connect ("mongodb://localhost:27017/peopleDB", {useNewUrlParser: true});

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
});

const Person = mongoose.model ("Person" , personSchema);

const Carol = new Person ({
    name: "Carol",
    age: 30,
});

const Beth = new Person ({
    name: "Beth",
    age: 30,
});

const Pri = new Person ({
    name: "Pri",
    age: 20,
});

Person.insertMany([Carol,Beth,Pri])
.then(() => {
    console.log("Successfully saved");
    mongoose.connection.close(); 
  })
  .catch((error) => {
    console.log(error);
  });