const server = require("express");

const app = server()

app.use(express.urlencoded({ extended: true }));

let student =[ { "id":1, "Name":"Suraj","roll_no": 60},
               {"id":2, "Name":"vipul","roll_no": 21},
                {"id":3, "Name":"yash" , "roll_no":63}];

                app.use(express.urlencoded({ extended: true }));

//app.use(express.urlencoded({ extended: true }));
// app.get("/",(req,res)=>{
   
//       //res.json("hello");
//       res.send(student)
// }) 

app.get("/welcome",(req,res)=>{
     
     res.send("welcome")
})

app.get("/student_all",(req,res)=>{

          let result = {};

     for(let i = 0 ; i < 3; i++)
     {      var name = "id"+i;
            result[name]= (student[i]);
     }
    // console.log(result)
     res.json(result)

})

app.get("/student_specific",(req,res)=>{
    
           let input = req.query.id;
      
           res.send(student[input])

})

app.get("/delete/",(req,res)=>{

         let input = req.query.id;
     
         student.splice(input, input + 1)       

         res.send(student)
 
})    

  app.get('/', (req, res) => {
  res.send(`
    <form action="/add-student" method="POST">
      <label>Name:</label><br>
      <input type="text" name="Name"><br><br>
      
      <label>Roll No:</label><br>
      <input type="number" name="roll_no"><br><br>
      
      <input type="submit" value="Add Student">
    </form>
  `);
});

app.post('/add-student', (req, res) => {
      
  const { Name, roll_no } = req.body; // Get the data from the form

  // Generate a new ID based on the current array length
  const newId = student.length > 0 ? student[student.length - 1].id + 1 : 1;

  // Create the new student object
  const newStudent = { id: newId, Name, roll_no };

  // Add the new student to the array
  student.push(newStudent);

  // Return a response to the user (can be JSON, HTML, etc.)
  res.send(`
    <h1>Student Added</h1>
    <p>Student Name: ${newStudent.Name}</p>
    <p>Roll Number: ${newStudent.roll_no}</p>
    <p><a href="/">Go back to the form</a></p>
    <p><a href="/students">See all students</a></p>
  `);
});

app.listen(3000,()=>{

      console.log("server is running on  port 3000");
})

