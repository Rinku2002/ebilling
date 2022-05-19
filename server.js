//create express app
const exp = require("express");
const app = exp();
const mclient=require("mongodb").MongoClient;
const path=require('path');

//connect build with nodejs
app.use(exp.static(path.join(__dirname,'./build')))

//DB connection URL
const DBurl="mongodb+srv://rinku:Rinku%402002@cluster0.u9rsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//connect with mongoDB server
mclient.connect(DBurl)
.then((client)=>{

  //get DB object
  let dbObj=client.db("HackForEt");

  //create collection objects
  let userCollectionObject=dbObj.collection("users");
  let studentCollectionObject=dbObj.collection("students");

  //sharing collection objects to APIs
  app.set("userCollectionObject",userCollectionObject);
  app.set("studentCollectionObject",studentCollectionObject);

  console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connection ',err))

//import userApp and studentApp
const userApp = require("./APIS/userApi");
const studentApp=require("./APIS/studentApi");

//excute specific middleware based on path
app.use("/user-api", userApp);
app.use("/student-api", studentApp);

//dealing with page refresh
app.use('*', (request, response)=>{
  response.sendFile(path.join(__dirname, './build/index.html'))
})

//handling invalid paths
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});

//error handling middleware
app.use((error, request, response, next) => {
  response.send({ message: "Error occurred", reason: `${error.message}` });
});

//assign port number
app.listen(4000, () => console.log("server listening on port 4000.."));

