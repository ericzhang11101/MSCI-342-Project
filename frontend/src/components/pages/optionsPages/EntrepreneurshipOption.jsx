import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Block } from '@mui/icons-material';

export default function EntrepreneurshipOption() {
  return (
    <Box sx={{           display: "flex",
    flexDirection: "column",
    height: 700,
    width: 700,
    overflow: "hidden",
    overflowY: "scroll",}}>
      <Typography variant="h3" gutterBottom>
        Entrepreneurship Option
      </Typography>

      <Typography variant="Subtitle2" gutterBottom>
      The Option requires students to complete six courses. Three of those courses are required, and three are electives.

      </Typography>
      <Typography >
      Required Courses:
      </Typography>
     

       <Typography variant="body2" >
        BET 100 Foundations of Entrepreneurial Practice
        </Typography>
       <Typography variant="body2" >
        BET 320 Entrepreneurial Strategy
        </Typography>
       <Typography variant="body2" >
       BET 340 Essentials of Entrepreneurial Planning and Execution
        </Typography> 
  

    <Typography>
    Electives:
    </Typography>
    <Typography variant="body2" display = "Block">
    
        Any other BET courses
        Up to two technical courses in an area related to the milestone requirement, as approved by the option co-ordinator
    
    Entrepreneurial Milestone Requirement
    
    Students can demonstrate entrepreneurial experience through one of:
        <Typography variant="body2" >
        Earning credit for an Enterprise Co-op term.
        </Typography>
        <Typography variant="body2" >
        Through a capstone design project. Students choosing the capstone design project must participate in the Esch Awards competition, the Hult Prize competition, Concept Grants, Velocity Fund Finals, or an equivalent as approved by the option co-ordinator.
        Developing a new entrepreneurial venture that is not part of the capstone design project for at least a 12-month period, as approved by the option co-ordinator.
        </Typography>
        <Typography variant="body2" >
        Developing a new entrepreneurial venture that is not part of the capstone design project for at least a 12-month period, as approved by the option co-ordinator.
        </Typography>
        <Typography variant="body2" >
        Developing a new entrepreneurial venture that is not part of the capstone design project for at least a 12-month period, as approved by the option co-ordinator.
        </Typography>
        <Typography variant="body2" >
        Working for an entrepreneurial venture, including during a co-op term, that is not part of the capstone design project, as approved by the option co-ordinator.
        </Typography>

      </Typography>
      <Button href="/options-page" variant="contained">
         Return to Options Page
        </Button>
    </Box>
  );
}