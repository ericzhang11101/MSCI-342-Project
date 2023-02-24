import React, {useState} from 'react'
import { Stack } from '@mui/system'
import { Card, CardContent, Typography, Collapse, IconButton, Button} from '@mui/material'
import {ExpandMore } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const currCourses = {
  term: "3A",
  courses: [
    {
      courseCode: 342,
      programCode: "MSCI",
      name: "Introduction to bofa my nuts"
    },
    {
      courseCode: 334,
      programCode: "MSCI",
      name: "ur mom"
    }
  ]
}

const ExpandMoreComponent = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function MyCourses() {
  const [showCurrentCourses, setShowCurrentCourses] = useState(true)
  const [showPrevCourses, setShowPrevCourses] = useState(false)
  const [currentCourses, setCurrentCourses] = useState(currCourses)
  const [prevCourses, setPrevCourses] = useState(currCourses)

  const navigate = useNavigate()

  const toggleCurrentCourses = () => {
    setShowCurrentCourses(!showCurrentCourses)
  }

  const togglePrevCourses = () => {
    setShowPrevCourses(!showPrevCourses)
  }

  const handleCourseClick = (course) => {
    console.log('visiting course ' + course)
    navigate(`/courses/${course}`)
  }

  const handleMyCourseClick = (course) => {
    console.log('visiting my course ' + course)
    navigate(`/my-courses/${course}`)
  }

  return (
    <Stack
      spacing={2}
      width={"100%"}
      textAlign="left"
      margin={"1rem 5rem"}
    >
      <Typography
        align="center"
        variant="h2"
        gutterBottom={true}
      >
        My Courses
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Stack
            direction={"row"}
            alignItems={"center"}
          >
            <Typography sx={{ fontSize: 20 }}>
              Current Courses
            </Typography>
            <ExpandMoreComponent
              expand={showCurrentCourses}
              onClick={toggleCurrentCourses}
              aria-expanded={showCurrentCourses}
              aria-label="show more"
            >
              <ExpandMore />
            </ExpandMoreComponent>
          </Stack>
          
        </CardContent>
        <Collapse in={showCurrentCourses} timeout="auto" unmountOnExit>
        <CardContent>
        <Stack
            spacing={2}
            width={"100%"}
            textAlign="left"
            justifyContent={"center"}
            alignContent="center"
          >
            <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography sx={{ fontSize: 16 }}>
              Term: {currCourses.term}
            </Typography>
            <Button
              variant='contained'
              sx={{ fontSize: 16 }}
            >
              <Typography sx={{ fontSize: 16 }}>
                Add Course            
              </Typography>
                
            </Button>
          </Stack>

            {
              currentCourses.courses.map((course) => {
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
                            onClick={() => handleMyCourseClick(`${course.programCode}_${course.courseCode}`)}
                          >
                            Grades
                          </Button>
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
      </Collapse>
      </Card>
      <Card variant="outlined">
        <CardContent>
          <Stack
            direction={"row"}
            alignItems={"center"}
          >
            <Typography sx={{ fontSize: 20 }}>
              Previous Courses
            </Typography>

            <ExpandMoreComponent
              expand={showPrevCourses}
              onClick={togglePrevCourses}
              aria-expanded={setShowPrevCourses}
              aria-label="show more"
            >
              <ExpandMore />
            </ExpandMoreComponent>
          </Stack>
        </CardContent>
        <Collapse in={showPrevCourses} timeout="auto" unmountOnExit>
        <CardContent>
        <Stack
            spacing={2}
            width={"100%"}
            textAlign="left"
            justifyContent={"center"}
            alignContent="center"
          >
            <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography sx={{ fontSize: 16 }}>
              Term: {currCourses.term}
            </Typography>
            <Button
              variant='contained'
              sx={{ fontSize: 16 }}
            >
              <Typography sx={{ fontSize: 16 }}>
                Add Course            
              </Typography>
                
            </Button>
          </Stack>
            {
              prevCourses.courses.map((course) => {
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
                              onClick={() => handleMyCourseClick(`${course.programCode}_${course.courseCode}`)}
                            >
                              Grades
                            </Button>
                          <Button
                            variant="outlined"
                            onClick={() => handleCourseClick(`${course.programCode}_${course.courseCode}`)}
                          >
                            Go
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
      </Collapse>
      </Card>
    </Stack>
    
  )
}
