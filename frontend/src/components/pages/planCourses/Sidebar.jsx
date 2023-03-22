import React, {useState} from 'react';
import { Select, MenuItem, InputLabel, FormControl, Stack, Button, Alert } from '@mui/material'

// const courseList = [
//   {
//     name: "ECE 467",
//     description: "Intro to my grandma"
//   },
//   {
//     name: "ME 250",
//     description: "Intro to my feet"
//   },
//   {
//     name: "MSCI 201",
//     term: '2A',
//     prereq: ['MSCI 101'],
//     antireq: []
//   },
// ]

const termList = [
  '1A',
  '1B',
  '2A',
  '2B'
]

const Sidebar = (props) => {
  const courseList = props.courseList
  
  const [selectedCourse, setSelectedCourse] = useState('')
  const [selectedTerm, setSelectedTerm ] = useState('')

  const createClassNode = () => {
    console.log(selectedCourse)

    if (selectedCourse.name.length && selectedTerm.length){
      props.createClassNode(selectedCourse, selectedTerm)
      // clear
      setSelectedCourse('')
      setSelectedTerm('')
    } else {
      // handle error
    }
    
  }

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
    console.log(event)
  };

  const updateCourse = (e) => {
    console.log('updating course')
    setSelectedCourse(e.target.value)
    // update terms possible
  }

  const updateTerm = (e) => {
    console.log('updating course')
    setSelectedTerm(e.target.value)
  }

  const saveCourses = () => {
    props.saveCourses()
  }
 
  return (
    <aside>
      <Stack
          spacing={2}
      >
        <div 
          className="dndnode input" 
          onDragStart={(event) => onDragStart(event, 'input')} 
          draggable
        >
          Input Node
        </div>
        <div 
          className="dndnode" 
          onDragStart={(event) => onDragStart(event, 'default')} 
          draggable
        >
          Default Node
        </div>
        <div 
          className="dndnode output" 
          onDragStart={(event) => onDragStart(event, 'output')} 
          draggable
        >
          Output Node
        </div>
        <FormControl fullWidth>
          <InputLabel id="select-label">Course</InputLabel>
          <Select
            labelId="select-label"
            id="simple-select"
            value={selectedCourse}
            label="Course"
            onChange={updateCourse}
          >
            {          
              courseList.map((course) => {
                return (
                  <MenuItem value={course}>{course.name}</MenuItem>
                )
              })
            }
          </Select>  
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="select-label">Term</InputLabel>
          <Select
            labelId="select-label"
            id="select-term"
            value={selectedTerm}
            label="Course"
            onChange={updateTerm}
          >
            {
              termList.map((term) => {
                return (
                  <MenuItem value={term}>{term}</MenuItem>
                )
              })
            }
          </Select>  
        </FormControl>
        <Button variant="contained" onClick={() => createClassNode()}>
          Add Course
        </Button>
        <Button variant="outlined" onClick={() => createClassNode()}>
          Save
        </Button>
        {
          props.errorMessage
          &&
          <Alert variant="outlined" severity="error">
              {props.errorMessage}
          </Alert>
        }
      </Stack>
  </aside>
  );
};

export default Sidebar