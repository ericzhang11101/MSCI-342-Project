import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState, useMemo} from "react";
import {Card, CardContent, Grid} from "@mui/material";
import { Select, MenuItem, InputLabel, FormControl, Stack, Button, Alert } from '@mui/material'

import Typography from "@mui/material/Typography";
export default function Term() {
  const {term} = useParams();
  const [courses, setCourses] = useState([]);
  const [courseToAdd, setCourseToAdd] = useState("")
  const [courseList, setCourseList] = useState([])

  const navigate = useNavigate();

  const loadCourses = async () => {
    console.log('term: ' + term)
    const url = 'http://localhost:5000/'
    const user = 'ericzhang11101@gmail.com'

    const res = await fetch(url + 'api/getUserCourses', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user,
        term
      })
    })
    .then((res) => res.json())
    setCourses(res)
  }

  useEffect(() => {
    loadCourses()

  }, [term]);

  useEffect(() => {
    const loadCourseList = async () => {
      const url = 'http://localhost:5000/'
      const res = await fetch(url + 'api/getAllCourses', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())
  
      console.log(res)
      setCourseList(res)
    }

    loadCourseList()
  }, [])

  const addCourseToTerm = async () => {
    if (courseToAdd.length === 0) {
      return 
    } 
    
    // check in courses

    for (let course of courses){
      if (course.name === courseToAdd.name) {
        console.log('duplicate course')
        return
      }
    }

    const url = 'http://localhost:5000/'
    const user = 'ericzhang11101@gmail.com'

    await fetch(url + 'api/addUserCourse', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user,
        term,
        course: courseToAdd.name
      })
    })
    .then((res) => res.json())

    setCourseToAdd("")
    loadCourses()
  }

  const updateCourseToAdd = (e) => {
    setCourseToAdd(e.target.value)
  }

  return (
    <Grid container spacing={2}>
      {courses.map(course => {
        return (
          <Grid key={course.name} item xs={12} lg={3}>
            <Card onClick={() => {
              navigate(`./course/${course.course_code.split(' ').join('_')}`)
            }} sx={{height: 170, cursor: 'pointer'}}>
              <CardContent>
                <Typography textAlign={'start'} variant="h5" component="div">
                  {course.name}
                </Typography>
                <Typography  textAlign={'start'} sx={{ mb: 1.5 }} color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
  
      <Grid item xs={15} lg={3}>
      <Card sx={{height: 170, cursor: 'pointer'}}>
          <CardContent>
            <Stack
              spacing={1}
            >
              <Typography textAlign={'start'} variant="h5" component="div">
                Add Course
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="select-label">Course</InputLabel>
                <Select
                  labelId="select-label"
                  id="simple-select"
                  value={courseToAdd}
                  label="Course"
                  onChange={updateCourseToAdd}
                  defaultValue = ""
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
              <Stack
                alignContent="end"
              >
                <Button
                  variant="contained"
                  onClick={addCourseToTerm}
                >
                  Add
                </Button>
              </Stack>
            </Stack>
          </CardContent>

        </Card>
      </Grid>
    </Grid>
  )
}