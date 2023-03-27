import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function ArtificialIntelligenceOption() {
  return (
    <Box sx={{       display: "flex",
    flexDirection: "column",
    height: 700,
    width: 700,
    overflow: "hidden",
    overflowY: "scroll",}}>
      <Typography variant="h3" gutterBottom>
        Artificial Intelligence Option
      </Typography>

      <Typography variant="Subtitle2" gutterBottom>
      The Artificial Intelligence (AI) Option is available for students in all 
      undergraduate Engineering plans at the University of Waterloo. The requirements for 
      completion of the AI Option are:
      </Typography>

      <Typography align ="left">
        List 1: One of
      </Typography>
      <Typography variant="body2">
        MSCI 442 Impact of Information Systems on Organizations and Society
      </Typography>
      <Typography variant="body2">
      STV 205 Cybernetics and Society 
      </Typography> 
      <Typography variant="body2">
      STV 208 Artificial Intelligence and Society: Impact, Ethics, and Equity
      </Typography>
      <Typography variant="body2">
      STV 208 Artificial Intelligence and Society: Impact, Ethics, and Equity
      </Typography>
      <Typography variant="body2">
      STV 210/HIST 212 The Computing Society
      </Typography>
      
      <Typography align = "left">
      List 2: Two of
      </Typography>
      <Typography variant="body2">
      CS 480 Introduction to Machine Learning
       
      </Typography>
      <Typography variant="body2">
      CS 485 Statistical and Computational Foundations of Machine Learning

      </Typography>
      <Typography variant="body2">
      CS 486 Introduction to Artificial Intelligence

      </Typography>
      <Typography variant="body2">
      ECE 457A Co-operative and Adaptive Algorithms

      </Typography>
      <Typography variant="body2">
      ECE 457B Fundamentals of Computational Intelligence

      </Typography>
      <Typography variant="body2">
      ECE 457C Reinforcement Learning

      </Typography>
      <Typography variant="body2">
      MSCI 435 Advanced Optimization Techniques

      </Typography>
      <Typography variant="body2">
      MSCI 446 Introduction to Machine Learning

      </Typography>
      <Typography variant="body2">
      SYDE 522 Foundations of Artificial Intelligence
      </Typography>

      <Typography align = "left">
      List 3: Three additional courses, which may be from either List 2 or List 3,
      </Typography>
     
      <Typography>        
  
      <Typography variant="body2">
      BIOL 487/SYDE 552 Computational Neuroscience
      </Typography>
      <Typography variant="body2">
      CHE 521 Process Optimization
      </Typography>      
      <Typography variant="body2">
      CHE 522 Advanced Process Dynamics and Control
      </Typography>      
      <Typography variant="body2">
      CHE 524 Process Control Laboratory
      </Typography>      
      <Typography variant="body2">
      CO 367 Nonlinear Optimization
      </Typography>      
      <Typography variant="body2">
      CO 456 Introduction to Game Theory
      </Typography>      
      <Typography variant="body2">
      CO 463 Convex Optimization and Analysis
      </Typography>      
      <Typography variant="body2">
      CO 466 Continuous Optimization
      </Typography>      
      <Typography variant="body2">
      CS 452 Real-time Programming
      </Typography>      
      <Typography variant="body2">
      CS 479 Neural Networks
      </Typography>      
      <Typography variant="body2">
      CS 484 Computational Vision
      </Typography>      
      <Typography variant="body2">
      ECE 423 Embedded Computer Systems
      </Typography>      
      <Typography variant="body2">
      ECE 455 Embedded Software
      </Typography>      
      <Typography variant="body2">
      ECE 481 Digital Control Systems
      </Typography>
      <Typography variant="body2">
      ECE 484 Digital Control Applications
      </Typography>  
      <Typography variant="body2">
      ECE 486 Robot Dynamics and Control
      </Typography>  
      <Typography variant="body2">
      ECE 488 Multivariable Control Systems
      </Typography>  
      <Typography variant="body2">
      ECE 495 Autonomous Vehicles  
      </Typography> 
       <Typography variant="body2">
       MSCI 546 Advanced Machine Learning
      </Typography> 
       <Typography variant="body2">
       MTE 544 Autonomous Mobile Robots
      </Typography> 
       <Typography variant="body2">
       MTE 546 Multi-sensor Data Fusion
      </Typography> 
       <Typography variant="body2">
       STAT 341 Computational Statistics and Data Analysis
      </Typography> 
      <Typography variant="body2">
      STAT 440 Computational Inference
      </Typography>        
      <Typography variant="body2">
      STAT 441 Statistical Learning - Classification
      </Typography>       
       <Typography variant="body2">
       STAT 444 Statistical Learning - Advanced Regression
      </Typography>       
       <Typography variant="body2">
       SYDE 556 Simulating Neurobiological Systems
      </Typography>        
      <Typography variant="body2">
      SYDE 572 Introduction to Pattern Recognition
      </Typography> 
        


      </Typography>
      <Typography variant = "h6">Notes:</Typography>
      <Typography variant = "body2">
      The selected courses for the Option should include at least one course from Mathematics and at least one course from Engineering. Exceptions to this rule may be granted by the option co-ordinator if it is logistically infeasible to be satisfied.
      Five of the courses must be considered elective (that is, not core requirements) in the student's academic plan. For the purposes of this Option, a course that a student could choose to graduate without will be considered elective.
      Special topics courses, independent project courses, and the capstone project courses may sometimes be appropriate for this Option, with approval of the AI option co-ordinator and the course instructor.
    </Typography>
    <Button href="/options-page" variant="contained">
         Return to Options Page
    </Button>
    </Box>
  );
}