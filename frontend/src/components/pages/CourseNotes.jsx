import React, {useState} from 'react'
import { Card, CardContent, Typography, TextField , IconButton, Button, Stack} from '@mui/material'
import { useNavigate } from 'react-router-dom';


export default function CourseNotes() {
  const [searchResult, setSearchResult] = useState([])
  const [query, setQuery] = useState("")

  const navigate = useNavigate()

  const handleSearch = async (e) => {
    // TODO: search 
    console.log('searching ' + query)

    const url = 'http://localhost:5000/'

    const res = await fetch(url + 'api/searchCourses', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query
      })
    })
    .then((res) => res.json())
    
    console.log(res)

    setSearchResult(res)
  }

  const handleCourseClick = (course) => {
    console.log('visiting course ' + course)
    navigate(`/courses/${course.split(' ').join('_')}`)
  }

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
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
      <Card
        style={{'min-height': '5rem'}}
      >
        <CardContent>
          <Stack
            direction={"row"}
            spacing="1rem"
          >
              <TextField 
                label="Search Courses"
                fullWidth
                value={query}
                onChange={handleQueryChange}
                defaultValue=""
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
        <Card
          style={{
            overflow: 'auto',
            'padding-bottom': '5rem',
            'box-sizing': 'border-box'
          }}
        >
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
                            {course.name} - {course.description}
                          </Typography>
                          <Stack
                              direction={"row"}
                              alignItems={"center"}
                              spacing={1}
                          >
                            <Button
                              variant="outlined"
                              onClick={() => handleCourseClick(course.name)}
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
