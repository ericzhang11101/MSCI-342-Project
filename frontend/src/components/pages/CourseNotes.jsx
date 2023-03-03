import React, {useState} from 'react'
import { Card, CardContent, Typography, TextField , IconButton, Button, Stack} from '@mui/material'
import { useNavigate } from 'react-router-dom';

const courseInfo = {
  courseCode: 250,
  programCode: "ME",
  title: "Thermodynamics 1",
  importantDates: [],
  description: "The engineering science of energy. The scope and limitations of thermodynamics.",
  professor: "Roydon Fraser"
}

const courses = [
  {
    courseCode: 123,
    programCode: "ME",
    name: "course 1"
  },
  {
    courseCode: 123,
    programCode: "ME",
    name: "course 15"
  },
  {
    courseCode: 123,
    programCode: "ME",
    name: "course 14"
  },
  {
    courseCode: 123,
    programCode: "ME",
    name: "course 11"
  },
  {
    courseCode: 123,
    programCode: "ME",
    name: "course 12"
  }
]


export default function CourseNotes() {
  const [searchResult, setSearchResult] = useState([])
  const navigate = useNavigate()

  const handleSearch = (e) => {
    // TODO: search 
    setSearchResult(courses)
  }

  const handleCourseClick = (course) => {
    console.log('visiting course ' + course)
    navigate(`/courses/${course}`)
  }

  return (
    <Stack
      spacing={2}
    >
      <Typography 
        variant={"h2"}
        margin={"1rem 5rem"}  
      >
        Search Courses
      </Typography>
      <Card>
        <CardContent>
          <Stack
            direction={"row"}
            spacing="1rem"
          >
              <TextField 
                label="Search Courses"
                fullWidth
              >
              
              </TextField>
              <Button
                variant="contained"
                onClick={handleSearch}
              >
                <Typography>
                  Search
                </Typography>
              </Button>
          </Stack>
        </CardContent>
      </Card>

      {
        searchResult.length
        ?
        <Card>
          <CardContent>
            <Stack
              spacing={1}
            >
            {
                searchResult.map((course) => {
                  return (
                    <Card 
                      variant="outlined"
                    >
                      <CardContent>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <Typography variant='h6'>
                            {course.programCode} {course.courseCode} - {course.name}
                          </Typography>
                          <Stack
                              direction={"row"}
                              alignItems={"center"}
                              spacing={1}
                          >
                            <Button
                              variant="outlined"
                              onClick={() => handleCourseClick(`${course.programCode}_${course.courseCode}`)}
                            >
                              Info
                            </Button>
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  )
                })
              }
            </Stack>
          </CardContent>
        </Card>
        :
        <></>
      }
      
    </Stack>
  )
}
