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

export default function Grade({course}) {
  const [addOpen, setAddOpen] = useState(false);
  const [gradeData, setGradeData] = useState(initialData)
  const [editOpen, setEditOpen] = useState(false)
  const [editGradeData, setEditGradeData] = useState({
    id: 1,
    title: 'Quiz 1',
    type: 'Quiz',
    grade: 85,
    weight: 0.5,
    final: 42.5
  })

  const [finalGrade, setFinalGrade] = useState(0)

  const [newGradeTitle, setNewGradeTitle] = useState("")
  const [newGradeType, setNewGradeType] = useState("")
  const [newGradeMark, setNewGradeMark] = useState(0)
  const [newGradeWeight, setNewGradeWeight] = useState(0)

  const [editGradeTitle, setEditGradeTitle] = useState("")
  const [editGradeType, setEditGradeType] = useState("")
  const [editGradeMark, setEditGradeMark] = useState(0)
  const [editGradeWeight, setEditGradeWeight] = useState(0)
  
  const user = "ericzhang11101@gmail.com"

  useEffect(() => {
    let total = 0

    for (let grade of gradeData){
      console.log(grade)
      total += grade.final_grade
    }
    setFinalGrade(total)
  }, [gradeData])

  useEffect(() => {
    loadGradeData()
  }, [])

  const loadGradeData = async () => {
    const url = 'http://localhost:5000/'
    
    const res = await fetch(url + 'api/loadGradeData', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        course
      })
    })
    .then((res) => res.json())

    setGradeData(res)
    console.log(res)
  }
  const handleAddGrade = async () => {
    // TODO: check invalid

    const newGradeData = {
      title: newGradeTitle,
      type: newGradeType,
      grade: newGradeMark,
      weight: newGradeWeight/100,
      final: newGradeMark*newGradeWeight/100
    }

    console.log(newGradeData)
    // api call

    const url = 'http://localhost:5000/'
    
    const res = await fetch(url + 'api/createGradeRow', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...newGradeData,
        user,
        course

      })
    })
    .then((res) => res.json())
    closeAdd()
    loadGradeData()
  }

  const closeAdd = () => {
    setNewGradeMark(0)
    setNewGradeTitle("")
    setNewGradeType("")
    setNewGradeWeight(0)

    setAddOpen(false)
  }

  const handleEditSubmit = async () => {
    // delete id 
    handleDeleteGrade(editGradeData.id)
    // add new one 

     const newGradeData = {
      title: editGradeTitle,
      type: editGradeType,
      grade: editGradeMark,
      weight: editGradeWeight/100,
      final: editGradeMark*newGradeWeight/100
    }

    console.log(newGradeData)
    // api call

    const url = 'http://localhost:5000/'
    
    const res = await fetch(url + 'api/createGradeRow', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...newGradeData,
        user,
        course

      })
    })
    .then((res) => res.json())

    setEditOpen(false)

    loadGradeData()
  }

  const handleDeleteGrade = async (id) => {
    const url = 'http://localhost:5000/'

    const res = await fetch(url + 'api/deleteGradeRow', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id
      })
    })
    .then((res) => res.json())
    .then((res) => console.log(res))

    loadGradeData()    
    
  }

  function handleEdit(gradeRow){
    setEditOpen(true)
    setAddOpen(false)

    setEditGradeData(gradeRow) // kinda redundant whatever

    setEditGradeMark(gradeRow.grade)
    setEditGradeTitle(gradeRow.title)
    setEditGradeType(gradeRow.type)
    setEditGradeWeight(gradeRow.weight*100)

  }

  return (
    <Box>
      <Dialog onClose={() => setAddOpen(false)} open={addOpen} fullWidth>
        <DialogTitle>Add Grade</DialogTitle>
        <Box padding={'25px'}>
          <Box>
            <Typography>Title</Typography>
            <TextField 
              required fullWidth 
              label={'Grade title'}
              value={newGradeTitle}
              onChange={(e) => setNewGradeTitle(e.target.value)}
            />
          </Box>
          <Box>
            <Typography>Type</Typography>
            <TextField 
              required fullWidth select
              value={newGradeType}
              onChange={(e) => setNewGradeType(e.target.value)}
            >
              {
                assessmentTypes.map((assessmentType) => {
                  return (
                    <MenuItem value={assessmentType}>{assessmentType}</MenuItem>
                  )
                })
              }
            </TextField>
          </Box>
          <Box>
            <Typography>Grade</Typography>
            <TextField 
              required fullWidth 
              label={'Grade'} 
              type={'number'}
              value={newGradeMark}
              onChange={(e) => setNewGradeMark(e.target.value)}
            />
          </Box>
          <Box>
            <Typography>Weight</Typography>
            <TextField 
              required fullWidth 
              label={'Weight'} 
              type={'number'}
              value={newGradeWeight}
              onChange={(e) => setNewGradeWeight(e.target.value)}
            />
          </Box>
          <Box marginTop={'20px'}>
            <Button onClick={closeAdd} style={{marginRight: '10px'}} variant={'contained'} color={'inherit'}>Cancel</Button>
            <Button onClick={handleAddGrade} variant={'contained'}>Submit</Button>
          </Box>
        </Box>
      </Dialog>
      <Dialog onClose={() => setEditGradeData(false)} open={editOpen} fullWidth>
        <DialogTitle>Edit Grade</DialogTitle>
        <Box padding={'25px'}>
          <Box>
            <Typography>Title</Typography>
            <TextField required fullWidth label={'Grade title'} 
              defaultValue={editGradeData.title}
              value={editGradeTitle}
              onChange={(e) => {setEditGradeTitle(e.target.value)}}
            />
          </Box>
          <Box>
            <Typography>Type</Typography>
            <TextField required fullWidth select 
              defaultValue={editGradeData.type}
              value={editGradeType}
              onChange={(e) => {setEditGradeType(e.target.value)}}
            >
              {
                assessmentTypes.map((assessmentType) => {
                  return (
                    <MenuItem value={assessmentType}>{assessmentType}</MenuItem>
                  )
                })
              }
            </TextField>
          </Box>
          <Box>
            <Typography>Grade</Typography>
            <TextField required fullWidth 
              label={'Grade'} type={'number'} 
              defaultValue={editGradeData.grade}
              value={editGradeMark}
              onChange={(e) => {setEditGradeMark(e.target.value)}}  
            />
          </Box>
          <Box>
            <Typography>Weight</Typography>
            <TextField required fullWidth label={'Weight'} type={'number'} 
              defaultValue={editGradeData.weight*100}
              value={editGradeWeight}
              onChange={(e) => {setEditGradeWeight(e.target.value)}}    
            />
          </Box>
          <Box marginTop={'20px'}>
            <Button onClick={() => setEditOpen(false)} style={{marginRight: '10px'}} variant={'contained'} color={'inherit'}>Cancel</Button>
            <Button onClick={handleEditSubmit} variant={'contained'}>Submit</Button>
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
            <TableCell>Weight</TableCell>
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
                  <TableCell>{gradeRow.final_grade} </TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(gradeRow)} color={'success'} style={{marginRight: '10px'}}>Edit</Button>
                    <Button onClick={() => handleDeleteGrade(gradeRow.id)} color={'error'} style={{marginRight: '10px'}}>Delete</Button>
                  </TableCell>
                </TableRow>
              )
            })
          }
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell colSpan={3}></TableCell>
            <TableCell>{finalGrade}</TableCell>
            <TableCell></TableCell>

          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}