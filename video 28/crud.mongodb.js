use("CrudDb")

//create
db.createCollection("course")

db.course.insertOne({
    name: "mongoDB",
    about: "it creates for mongodb with new databases",
    price: 3000
})
db.course.insertMany([{
    name: "mongoose",
    about: "It is also a command in mongodb",
    price: 0
},
// {
//     name: "Figma",
//     about: "It is used to create templates and design the website",
//     price: "understand it is free of cost"
// },
// {
//     name: "postman",
//     about: "It is used to post/get/put the url using js",
//     price: "understand to use"

// },
// {
//     name: "tailwind css",
//     about: "It is the new version of css which we don't use style",
//     price: "understand properly"

// },
// {
//     name: "git and github",
//     about: "These are used to save the code online",
//     price: "Learn properly"
// }
])

//read

// let a = db.course.find({name: "postman"})
//console.log(a)
// console.log(a.count())
// let b = db.course.findOne({price: 0})
// console.log(b)

//update
// db.course.updateOne({price: 0}, {$set:{price: 100}})

// db.course.updateMany({price: 3000}, {$set:{price: 100}})

//Delete

db.course.deleteOne({price: 100})

db.course.deleteMany({price: 100})