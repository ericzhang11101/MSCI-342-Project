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
import {useState} from "react";
import MenuItem from "@mui/material/MenuItem";


export default function Grade() {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Dialog onClose={() => setOpen(false)} open={open} fullWidth>
        <DialogTitle>Add Grade</DialogTitle>
        <Box padding={'25px'}>
          <Box>
            <Typography>Title</Typography>
            <TextField fullWidth label={'Grade title'}/>
          </Box>
          <Box>
            <Typography>Type</Typography>
            <TextField fullWidth select>
              <MenuItem value={'Assignment'}>Assignment</MenuItem>
              <MenuItem value={'Quiz'}>Quiz</MenuItem>
            </TextField>
          </Box>
          <Box>
            <Typography>Grade</Typography>
            <TextField fullWidth label={'Grade'} type={'number'}/>
          </Box>
          <Box>
            <Typography>Percentage</Typography>
            <TextField fullWidth label={'Percentage'} type={'number'}/>
          </Box>
          <Box marginTop={'20px'}>
            <Button onClick={() => setOpen(false)} style={{marginRight: '10px'}} variant={'contained'} color={'inherit'}>Cancel</Button>
            <Button variant={'contained'}>Submit</Button>
          </Box>
        </Box>
      </Dialog>
      <Box textAlign={'start'}>
        <Button color={'info'} onClick={() => setOpen(true)} variant={'contained'}>Add</Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Percentage</TableCell>
            <TableCell>Final Grade</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Assignment 1</TableCell>
            <TableCell>Assignment</TableCell>
            <TableCell>87</TableCell>
            <TableCell>50%</TableCell>
            <TableCell>
              {87 * 0.5}
            </TableCell>
            <TableCell>
              <Button onClick={() => setOpen(true)} color={'success'} style={{marginRight: '10px'}}>Edit</Button>
              <Button color={'error'} style={{marginRight: '10px'}}>Delete</Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Quiz 2</TableCell>
            <TableCell>Quiz</TableCell>
            <TableCell>50</TableCell>
            <TableCell>30%</TableCell>
            <TableCell>
              {50 * 0.3}
            </TableCell>
            <TableCell>
              <Button onClick={() => setOpen(true)} color={'success'} style={{marginRight: '10px'}}>Edit</Button>
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