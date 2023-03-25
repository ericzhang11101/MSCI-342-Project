import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import all_courses from '../../terms-courses.json';
import {Card, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
export default function Term() {
  const {term} = useParams();
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const term_data = all_courses.find(item => item.term === term);
    if (term_data) {
      setCourses(term_data.courses);
    }
  }, [term]);


  return (
    <Grid container spacing={2}>
      {courses.map(course => {
        return (
          <Grid key={course.name} item xs={12} lg={3}>
            <Card onClick={() => {
              navigate(`./course/${encodeURIComponent(course.code)}`)
            }} sx={{height: 150, cursor: 'pointer'}}>
              <CardContent>
                <Typography textAlign={'start'} variant="h5" component="div">
                  {course.code}
                </Typography>
                <Typography  textAlign={'start'} sx={{ mb: 1.5 }} color="text.secondary">
                  {course.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}