import Container from "@mui/material/Container";
import {useParams} from "react-router-dom";
import {Box, Paper, Typography} from "@mui/material";
import Notes from "./Notes";
import Grade from "./Grade";
import { useEffect, useState } from "react";

export default function Course() {
  const {term, courseId} = useParams();
  const [courseData, setCourseData] = useState({})
  const courseName = courseId.replace('_', ' ')


  useEffect(() => {
    const updateData = async () => {
      console.log('coursename ' + courseName)  
      const url = 'http://localhost:5000/'

      const newCourseData = await fetch(url + 'api/loadCourseData', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          course: courseName
        })
      })
      .then((res) => res.json())
      .then((res) => res[0])

      setCourseData(newCourseData)
      console.log(newCourseData)

      // load grades

    }

    updateData()

  }, [term, courseId])


  return (
    <Container>
      <Paper style={{padding: '15px'}}>
        <Typography textAlign={'start'} variant={'h4'}>{courseData.name}</Typography>
        <Typography
          variant={'body1'}
          textAlign={'start'}
        >
          {courseData.description}
        </Typography>
      </Paper>

      <Paper style={{padding: '15px', marginTop: '20px'}}>
        <Typography textAlign={'start'} variant={'h4'}>Course Note</Typography>
        <Box marginTop={'20px'}>
          <Notes />
        </Box>
      </Paper>

      <Paper style={{padding: '15px', marginTop: '20px'}}>
        <Typography textAlign={'start'} variant={'h4'}>Course Grade</Typography>
        <Box marginTop={'20px'}>
          <Grade course={courseName}/>
        </Box>
      </Paper>
    </Container>
  )
}