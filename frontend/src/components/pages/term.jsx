import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Card, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
export default function Term() {
  const {term} = useParams();
  const [courses, setCourses] = useState([]);
  const [courseToAdd, setCourseToAdd] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    
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

    loadCourses()

  }, [term]);

  const addCourseToTerm = async () => {
    const url = 'http://localhost:5000/'
    const user = 'ericzhang11101@gmail.com'

    const res = await fetch(url + 'api/addUserCourse', {
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


  return (
    <Grid container spacing={2}>
      {courses.map(course => {
        return (
          <Grid key={course.name} item xs={12} lg={3}>
            <Card onClick={() => {
              navigate(`./course/${course.course_code.split(' ').join('_')}`)
            }} sx={{height: 150, cursor: 'pointer'}}>
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
    </Grid>
  )
}