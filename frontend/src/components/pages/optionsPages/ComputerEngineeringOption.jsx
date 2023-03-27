import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


export default function ComputerEngineeringOption() {
  return (
    <Box sx={{           display: "flex",
    flexDirection: "column",
    height: 700,
    overflow: "hidden",
    overflowY: "scroll",}}>
      <Typography variant="h3" gutterBottom>
        Computer Engineering Option
      </Typography>

      <Typography variant="Subtitle2" gutterBottom>
      The Computer Engineering Option is available to all students in the Faculty of Engineering, 
      except students in Computer Engineering. It requires a total of eight courses:
      </Typography>
      <Typography variant="body2" gutterBottom>
      Two of:
        ECE 320 Computer Architecture
        ECE 327 Digital Hardware Systems
        ECE 423 Embedded Computer Systems
        ECE 455 Embedded Software

    Five additional courses from the topics list below:
    
    Logic:

        CS 245 Logic and Computation
        ECE 208 Discrete Mathematics and Logic 2
        SE 212 Logic and Computation
    
    Databases:
        
        CS 338 Computer Applications in Business: Databases
        ECE 356 Database Systems
        MSCI 245 Databases and Software Design
        
    Operating Systems:

        ECE 350 Real-Time Operating Systems
        MTE 241 Introduction to Computer Structures and Real-Time Systems
        SE 350 Operating Systems
        
    Computing Systems:
        
        ECE 252 Systems Programming and Concurrency
        ECE 351 Compilers
        ECE 454 Distributed Computing
        ECE 455 Embedded Software
        ECE 459 Programming for Performance
        
    Networks:

        ECE 358 Computer Networks
    
    Digital Hardware:
        
        BME 393 Digital Systems
        CS 230 Introduction to Computers and Computer Systems
        ECE 124 Digital Circuits and Systems
        ECE 222 Digital Computers
        ECE 224 Embedded Microprocessor Systems
        ECE 320 Computer Architecture
        ECE 327 Digital Hardware Systems
        ECE 423 Embedded Computer Systems
        ME 262 Introduction to Microprocessors and Digital Logic
        MTE 262 Introduction to Microprocessors and Digital Logic
        MTE 325 Microprocessor Systems and Interfacing for Mechatronics Engineering
        SYDE 192 Digital Systems
        
    Software Engineering:
        
        CS 445/ECE 451 Software Requirements Specification and Analysis
        CS 446/ECE 452 Software Design and Architectures
        CS 447/ECE 453 Software Testing, Quality Assurance and Maintenance
        MSCI 342 Principles of Software Engineering
        SE 463 Software Requirements Specification and Analysis
        SE 464 Software Design and Architectures
        SE 465 Software Testing and Quality Assurance
    
    Human-Computer Interaction:
        
        MSCI 343 Human-Computer Interaction
        MSCI 541 Search Engines
        MSCI 543 Analytics and User Experience
        SYDE 542 Interface Design
        SYDE 543 Cognitive Ergonomics
        SYDE 548 User Centred Design Methods
        
    Security and Privacy:
        
        ECE 409 Cryptography and System Security
        ECE 458 Computer Security
        
    Pattern Analysis and Machine Intelligence:
        
        ECE 417 Image Processing
        ECE 457A Co-operative and Adaptive Algorithms
        ECE 457B Fundamentals of Computational Intelligence
        ECE 457C Reinforcement Learning
        MSCI 436 Decision Support Systems
        MSCI 446 Introduction to Machine Learning
        MSCI 546 Advanced Machine Learning
        SYDE 522 Foundations of Artificial Intelligence
        SYDE 552/BIOL 487 Computational Neuroscience
        SYDE 556 Simulating Neurobiological Systems
        SYDE 572 Introduction to Pattern Recognition
        SYDE 575 Image Processing
    
    Numerical Methods:
        
        BME 411 Optimization and Numerical Methods
        CHE 322 Numerical Methods for Process Analysis and Design
        CIVE 422 Finite Element Analysis
        EARTH 456 Numerical Methods in Hydrogeology
        ECE 204 Numerical Methods
        ECE 204A Numerical Methods 1 and ECE 204B Numerical Methods 2
        ENVE 225 Environmental Modelling
        ME 559 Finite Element Methods
        ME 566 Computational Fluid Dynamics for Engineering Design
        MTE 204 Numerical Methods
        NE 336 Micro and Nanosystem Computer-aided Design
        SYDE 411 Optimization and Numerical Methods           
        </Typography>
        <Button href="/options-page" variant="contained">
         Return to Options Page
        </Button>
    </Box>
  );
}