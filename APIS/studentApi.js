//create router to handle user api reqs
const exp = require("express");
const studentApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");

//to extract body of request object
studentApp.use(exp.json());

//USER API Routes

//create route to handle '/getusers' path
studentApp.get(
  "/getstudents/:sid",
  expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let studentCollectionObject = request.app.get("studentCollectionObject");
    //get username from url param
    let id=request.params.sid;
    //get all users
    let student = await studentCollectionObject.find({sid:{$eq:id}}).toArray();
    //send res
    response.send({ message: "Users list", payload: student });
  })
);


//create a route to 'create-student'
studentApp.post(
    "/create-student",
    expressAsyncHandler(async (request, response) => {
      //get userCollectionObject
      let studentCollectionObject = request.app.get("studentCollectionObject");
      //get userObj from client
      let newStudentObj = request.body;
      //seacrh for user by username
      let studentOfDB = await studentCollectionObject.findOne({
        sid: newStudentObj.sid,
      });
      //if user existed
      if (studentOfDB !== null) {
        response.send({
          message: "Username has already taken..Plz choose another",
        });
      }
      //if user not existed
      else {
        //insert newUser
        await studentCollectionObject.insertOne(newStudentObj);
        //send response
        response.send({ message: "New Student created" });
      }
    })
  );
  
//create a route to 'create-student'
studentApp.post(
    "/credit",
    expressAsyncHandler(async (request, response) => {
      //get userCollectionObject
      let studentCollectionObject = request.app.get("studentCollectionObject");
      //get userObj from client
      let newStudentObj = request.body;
      //seacrh for user by username
      let studentOfDB = await studentCollectionObject.findOne({
        sid: newStudentObj.sid,
      });
      //if user not existed
      if (studentOfDB == null) {
        response.send({
          message: "Invalid User",
        });
      }
      //if user existed
      else {
        let nb=(+newStudentObj.amount)+(+studentOfDB.balance)
        await studentCollectionObject.updateOne({sid:newStudentObj.sid},{$set:{balance:nb}})
        response.send({message: "Credited!"})
      }
    })
  );
  
//create a route to 'create-student'
studentApp.post(
    "/debit",
    expressAsyncHandler(async (request, response) => {
      //get userCollectionObject
      let studentCollectionObject = request.app.get("studentCollectionObject");
      //get userObj from client
      let newStudentObj = request.body;
      //seacrh for user by username
      let studentOfDB = await studentCollectionObject.findOne({
        sid: newStudentObj.sid,
      });
      //if user not existed
      if (studentOfDB == null) {
        response.send({
          message: "Invalid User",
        });
      }
      //if user existed
      else {
        let nb=(studentOfDB.balance)-(newStudentObj.amount)
        if (nb<0){
            response.send({message:"Insufficient balance"})
        }
        else{
            await studentCollectionObject.updateOne({sid:newStudentObj.sid},{$set:{balance:nb}})
            response.send({message: "Debited!"})
        }
      }
    })
  );

  //export studentApp
module.exports = studentApp;
