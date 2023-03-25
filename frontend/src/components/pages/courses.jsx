import Container from "@mui/material/Container";
import {useParams} from "react-router-dom";
import {Box, Paper, Typography} from "@mui/material";
import Notes from "./Notes";
import Grade from "./Grade";


export default function Course() {
  const {term, courseId} = useParams();
  return (
    <Container>
      <Paper style={{padding: '15px'}}>
        <Typography textAlign={'start'} variant={'h4'}>Course Title</Typography>
        <Typography
          variant={'body1'}
          textAlign={'start'}
        >
          Course description..................
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
          <Grade />
        </Box>
      </Paper>
    </Container>
  )
}