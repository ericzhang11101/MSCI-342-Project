import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { Stack } from '@mui/system'
import { Card, CardContent, Typography, Collapse, IconButton, Button} from '@mui/material'
import {ExpandMore } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



export default function CourseInfo() {
    const {course} = useParams()

    const [courseInfo, setCourseInfo] = useState({})

     useEffect(() => {
        const updateData = async () => {
        const courseName = course.replace('_', ' ')
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

        setCourseInfo({
            ...newCourseData,
            importantDates: [
                {
                    event: "Midterm",
                    date: new Date('March 2, 2023')
                },
                {
                    event: "Final Exam",
                    date: new Date('April 20, 2023')
                }
            ]
        })
        console.log(newCourseData)
        // load grades

        }

        updateData()

    }, [ course])

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
      gutterBottom={false}
    >
      {`${courseInfo.name} - ${courseInfo.description}`}
    </Typography>
    <Stack>
        <Stack
            spacing={2}
            width={"100%"}
            margin={"1rem 5rem"}
            direction={"row"}
            alignItems={"stretch"}
            justifyContent={"space-between"}
        > 
            <Card
                sx={{
                    width: "50%"
                }}
            >
                <CardContent>
                    <Stack>
                        <Typography variant="h6">
                            About the Course
                        </Typography>
                        <Typography>
                            {courseInfo.full_description}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
            <Card
                sx={{
                    width: "50%"
                }}
            >
                <CardContent>
                    <Typography variant="h6" gutterBottom={true}>
                        Important Dates:
                    </Typography>
                    {
                        courseInfo.importantDates
                        &&
                        <Stack
                            spacing={2}
                        >
                            {
                                courseInfo.importantDates.map((importantDate) => {
                                    return (
                                        <Card>
                                            <CardContent>
                                                <Typography>
                                                    {importantDate.event}
                                                </Typography>
                                                <Typography
                                                    gutterBottom={false}
                                                >
                                                    {importantDate.date.toLocaleDateString()}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    )
                                })
                            }
                        </ Stack>
                    }
                    
                </CardContent>
            </Card>
            <Card
                sx={{
                    width: "50%"
                }}
            >
                <CardContent>
                    <Stack
                        spacing={2}
                    >
                        <Card>
                            <CardContent>
                            
                                <Typography>
                                    Prereqs: 
                                </Typography>
                                <Typography
                                    gutterBottom={false}
                                >
                                    {courseInfo.prereq}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <Typography>
                                    Antireqs: 
                                </Typography>
                                <Typography
                                    gutterBottom={false}
                                >
                                    {courseInfo.antireq}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    </Stack>    
  </Stack>
  )
}
