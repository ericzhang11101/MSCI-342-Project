import Box from "@mui/material/Box";
import {
  Dialog,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import {useState, useEffect} from "react";
import MenuItem from "@mui/material/MenuItem";

const initialData = [
  {
    id: 1,
    title: 'Quiz 1',
    type: 'Quiz',
    grade: 85,
    weight: 0.5,
    final: 42.5
  },
  {
    id: 2,
    title: 'Assignemnt 2',
    type: 'Quiz',
    grade: 80,
    weight: 0.5,
    final: 40
  }
]

const assessmentTypes = ["Quiz", "Exam", "Assignment", "Lab"]

export default function Grade() {
  const [addOpen, setAddOpen] = useState(false);
  const [gradeData, setGradeData] = useState(initialData)
  const [editOpen, setEditOpen] = useState(false)
  const [editGradeData, setEditGradeData] = useState()
  const [finalGrade, setFinalGrade] = useState(0)
  
  useEffect(() => {
    let total = 0
    for (let grade of gradeData){
      total += grade.final
    }
    setFinalGrade(total)
  }, [gradeData])

  const handleAddGrade = async () => {

  }

  const handleDeleteGrade = async (id) => {
    let newRows = []

    for (let row of gradeData){
      if (row.id !== id) newRows.push(row)
    }
  }

  function handleEdit(gradeRow){
    setEditOpen(true)
    setAddOpen(false)
    setEditGradeData(gradeRow)
  }

  return (
    <Box>
      <Dialog onClose={() => setAddOpen(false)} open={addOpen} fullWidth>
        <DialogTitle>Add Grade</DialogTitle>
        <Box padding={'25px'}>
          <Box>
            <Typography>Title</Typography>
            <TextField required fullWidth label={'Grade title'}/>
          </Box>
          <Box>
            <Typography>Type</Typography>
            <TextField required fullWidth select>
              <MenuItem value={'Assignment'}>Assignment</MenuItem>
              <MenuItem value={'Quiz'}>Quiz</MenuItem>
            </TextField>
          </Box>
          <Box>
            <Typography>Grade</Typography>
            <TextField required fullWidth label={'Grade'} type={'number'}/>
          </Box>
          <Box>
            <Typography>Percentage</Typography>
            <TextField required fullWidth label={'Percentage'} type={'number'}/>
          </Box>
          <Box marginTop={'20px'}>
            <Button onClick={() => setAddOpen(false)} style={{marginRight: '10px'}} variant={'contained'} color={'inherit'}>Cancel</Button>
            <Button variant={'contained'}>Submit</Button>
          </Box>
        </Box>
      </Dialog>
      <Box textAlign={'start'}>
        <Button color={'info'} onClick={() => setAddOpen(true)} variant={'contained'}>Add</Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Percentage</TableCell>
            <TableCell>Final Grade</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            gradeData 
            &&
            gradeData.map((gradeRow) => {
              return (
                <TableRow>
                  <TableCell>{gradeRow.title}</TableCell>
                  <TableCell>{gradeRow.type}</TableCell>
                  <TableCell>{gradeRow.grade}</TableCell>
                  <TableCell>{gradeRow.weight*100}%</TableCell>
                  <TableCell>{gradeRow.final} </TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(gradeRow)} color={'success'} style={{marginRight: '10px'}}>Edit</Button>
                    <Button onClick={() => handleDeleteGrade(gradeRow.id)} color={'error'} style={{marginRight: '10px'}}>Delete</Button>
                  </TableCell>
                </TableRow>
              )
            })
          }
          <TableRow>
            <TableCell>Assignment 1</TableCell>
            <TableCell>Assignment</TableCell>
            <TableCell>87</TableCell>
            <TableCell>50%</TableCell>
            <TableCell>
              {87 * 0.5}
            </TableCell>
            <TableCell>
              <Button onClick={() => setEditOpen(true)} color={'success'} style={{marginRight: '10px'}}>Edit</Button>
              <Button color={'error'} style={{marginRight: '10px'}}>Delete</Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Quiz 2</TableCell>
            <TableCell>Quiz</TableCell>
            <TableCell>50</TableCell>
            <TableCell>30%</TableCell>
            <TableCell>
              {50 * 0.3}
            </TableCell>
            <TableCell>
              <Button onClick={() => setEditOpen(true)} color={'success'} style={{marginRight: '10px'}}>Edit</Button>
              <Button color={'error'} style={{marginRight: '10px'}}>Delete</Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={5}></TableCell>
            <TableCell>Total</TableCell>
            <TableCell>89</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}