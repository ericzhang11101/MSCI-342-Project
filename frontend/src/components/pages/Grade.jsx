import Box from "@mui/material/Box";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Button from "@mui/material/Button";


export default function Grade() {
  return (
    <Box>
      <Box textAlign={'start'}>
        <Button color={'info'}  variant={'contained'}>Add</Button>
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
              <Button color={'success'} style={{marginRight: '10px'}}>Edit</Button>
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
              <Button color={'success'} style={{marginRight: '10px'}}>Edit</Button>
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