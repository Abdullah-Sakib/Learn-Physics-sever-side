const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const courses = require('./data/courses.json')
const cors = require('cors');
const courseDetails = require('./data/courseDetails.json')

app.use(cors());

app.get('/', (req, res)=>{
  res.send(courses)
})

app.get('/details/:id', (req, res)=>{
  const id = req.params.id;
  const details = courseDetails.find(course => course.id == id);
  res.send(details);
})

app.listen(port, ()=>{
  console.log(`server is running on port ${port}`);
})