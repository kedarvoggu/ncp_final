// /Users/harsh/mongodb/bin/mongod.exe --dbpath=/Users/harsh/mongodb-data

// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require("mongodb")

const connectionURL = 'mongodb://localhost:27017/ncp_project'


const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {
    if (error) {
        return console.log('Unable toconnect to database!')
    }
    const db = client.db('ncp_project')

    db.collection('users').insertOne({
        _id: id,
        fname: 'Harsh',
        lname: 'Gandhi',
        email: '18harshgandhi@gmail.com',
        password: '1'
    }, (error,result) => {
            if (error) {
              return console.log('Unable to insert user')
            }  
            console.log(result.ops)
    })
})