import React, {useState} from 'react'
import { Stack } from '@mui/system'
import { Divider, Card, CardContent, Typography, Collapse, IconButton} from '@mui/material'
import {ExpandMore } from '@mui/icons-material'
import { styled } from '@mui/material/styles';


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
  const [showCurrentCourses, setShowCurrentCourses] = useState(false)
  const [showPrevCourses, setShowPrevCourses] = useState(false)

  const toggleCurrentCourses = () => {
    setShowCurrentCourses(!showCurrentCourses)
  }

  const togglePrevCourses = () => {
    setShowPrevCourses(!showPrevCourses)
  }

  return (
    <Stack
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={2}
      width={"100%"}
      textAlign="left"
      margin={"1rem 5rem"}
    >
      <Card variant="outlined">
        <CardContent>
          <Stack
            direction={"row"}
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
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
      <Card variant="outlined">
        <CardContent>
          <Stack
            direction={"row"}
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
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
    </Stack>
    
  )
}
