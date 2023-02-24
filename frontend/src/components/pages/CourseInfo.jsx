import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { Stack } from '@mui/system'
import { Card, CardContent, Typography, Collapse, IconButton, Button} from '@mui/material'
import {ExpandMore } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



export default function CourseInfo() {
    const params = useParams()
    const course = params.course

    const [courseInfo, setCourseInfo] = useState({})

    useEffect(() => {
        console.log("course: " + course)

        // fetch data
        
        setCourseInfo({
            courseCode: 250,
            programCode: "ME",
            title: "Thermodynamics 1",
            importantDates: [
                {
                    date: new Date(),
                    event: "my harmonica recital"
                },
                {
                    date: new Date(),
                    event: "colonoscopy"
                }
            ],
            description: "The engineering science of energy. The scope and limitations of thermodynamics.",
            professor: "Roydon Fraser"
        })
    }, [course])

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
      {`${courseInfo.programCode} ${courseInfo.courseCode} - ${courseInfo.title}`}
    </Typography>
    <Typography
      align="center"
      variant="h5"
      gutterBottom={true}
    >
      {courseInfo.description}
    </Typography>
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
                <Typography variant="h6">
                    Teacher: {courseInfo.professor}
                </Typography>
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
    </Stack>

  </Stack>
  )
}
