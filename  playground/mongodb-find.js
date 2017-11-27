//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      console.log('Unable to connect toMongoDb server');
      return;
    }

    console.log('Connected to MongoDB server!');

//     db.collection('Todos').insertOne({
//       text:'Do something',
//       completed: false
//     },(err,result)=>{
//       if(err){
//         console.log('unable to insert');
//         return;
//       }
//       console.log(JSON.stringify(result.ops,undefined, 2));
//     });
//
//     db.collection('Users').insertOne({
//       name:'Harvinder Singh',
//       age: 38,
//       location: 'Bangalore'
//     },(err,result)=>{
//       if(err){
//         return console.log('Not able to insert!');
//       }
//       console.log(result.ops[0]._id.getTimestamp());
//
//     });


db.collection('Users').find({name:'Harvinder Singh'}).count().then((count)=>{
    console.log('Got the document');
    console.log(count);
},(err)=>{
  console.log('Unable to get count!',err);
});

db.collection('Users').find({name:'Harvinder Singh'}).toArray().then((docs)=>{
    console.log('Got the document');
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Unable to get document!',err);
});
  //db.close();
});
