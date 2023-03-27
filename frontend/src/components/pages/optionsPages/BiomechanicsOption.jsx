import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


export default function BiomechanicsOption() {
  return (
    <Box sx={{           display: "flex",
    flexDirection: "column",
    height: 700,
    overflow: "hidden",
    overflowY: "scroll",}}>
      <Typography variant="h3" gutterBottom>
        Biomechanics Option
      </Typography>

      <Typography variant="Subtitle2" gutterBottom>
      The Biomechanics Option is available to all Engineering students.

      The Option consists of seven courses selected from specified lists. 
      At least one course must be taken as an “extra.” An extra can be a 
      course taken during a work term. Individual department requirements 
      must be satisfied and thus the precise number of courses that need to 
      be taken as extras may vary. Contact the associate chair, option co-ordinator, 
      or director for the plan for information regarding the number of extras as well
      as any other restrictions that may apply.
      </Typography>
      <Typography variant="body2" gutterBottom>
      To satisfy the Option, students must successfully complete:

      List 1: one course from:

      CIVE 460/ME 574 Engineering Biomechanics
      BME 588 Special Topics in Biomechanics 

      List 2: one course from: Anatomy and Physiology. see Note 1

      BIOL 201 Human Anatomy
      BIOL 273 Principles of Human Physiology 1
      BME 284 Physiological and Biological Systems
      KIN 100 Regional Human Anatomy and KIN 100L Regional Human Anatomy Laboratory
      SYDE 584 Physiological Systems and Biomedical Design
      
      List 3: one course from: Ergonomics
      KIN 121 Biomechanics of Human Movement and KIN 121L Biomechanics of Human Movement Laboratory
      KIN 320 Task Analysis
      KIN 420 Occupational Biomechanics. see Note 2
      SYDE 162 Human Factors in Design
      SYDE 543 Cognitive Ergonomics
      SYDE 548 User Centred Design Methods
      
      List 4: one course from: Techniques of Biomechanics

      CHE 341 Introduction to Process Control
      CIVE 306 Solid Mechanics 3
      CIVE 422 Finite Element Analysis
      ECE 380 Analog Control Systems
      ECE 486 Robot Dynamics and Control
      ME 322 Mechanical Design 1
      ME 360 Introduction to Control Systems
      ME 423 Mechanical Design 2
      ME 547 Robot Manipulators: Kinematics, Dynamics, Control
      ME 555 Computer-Aided Design
      ME 559 Finite Element Methods
      ME 566 Computational Fluid Dynamics for Engineering Design
      MTE 360 Automatic Control Systems
      NE 336 Micro and Nanosystem Computer-aided Design
      PHYS 395 Biophysics of Therapeutic Methods
      SYDE 352 Introduction to Control Systems
      SYDE 543 Cognitive Ergonomics
      SYDE 544 Biomedical Measurement and Signal Processing
      SYDE 553 Advanced Dynamics
      SYDE 572 Introduction to Pattern Recognition
      SYDE 575 Image Processing
      
      List 5: one course from: Kinesiology
      BME 551 Biomechanics of Human Movement
      KIN 221 Advanced Biomechanics of Human Movement and KIN 221L Advanced Biomechanics of Human Movement Laboratory
      KIN 255 Fundamentals of Neuroscience and KIN 255L Fundamentals of Neuroscience Laboratory
      KIN 312 Introduction to Neurological Disorders
      KIN 340 Muskuloskeletal Injuries in Sport and Activity
      KIN 356 Sensory Systems Neuroscience
      KIN 416 Neuromuscular Integration
      KIN 420 Occupational Biomechanics. see Note 2
      KIN 422 Human Posture, Balance and Gait
      KIN 425 Biomechanics Modelling
      KIN 472 Directed Study in Special Topics
      
      List 6: plus a two-term project from: Project, see Note 3

      CHE 482 Group Design Project and CHE 483 Group Design Project and Symposium
      CIVE 400 Civil Engineering Design Project 1 and CIVE 401 Civil Engineering Design Project 2
      ECE 498A and ECE 498B Engineering Design Project
      ENVE 400 Environmental Engineering Design Project 1 and ENVE 401 Environmental Engineering Design Project 2
      GENE 401 and GENE 402 Special Directed Studies
      GENE 403 Interdisciplinary Design Project 1 and GENE 404 Interdisciplinary Design Project 2
      ME 481 Mechanical Engineering Design Project 1 and ME 482 Mechanical Engineering Design Project 2
      MTE 481 Mechatronics Engineering Design Project and MTE 482 Mechatronics Engineering Project
      NE 408 Nanosystems Design Project and NE 409 Nanosystems Design Project and Symposium
      SYDE 461 Systems Design Capstone Project 1 and SYDE 462 Systems Design Capstone Project 2    
      </Typography>
      <Typography variant = "h6">Notes:</Typography>
      <Typography variant = "body2">
      1. List 2 course is to be taken by the end of the student's 3B term.

      2. KIN 420 may count towards List 3 or List 5, but not both.

      3. The project topic must be in the area of biomechanics and students are encouraged to have their projects supervised or co-supervised by a faculty member outside of their home department. 
      
      </Typography>
      <Button href="/options-page" variant="contained">
         Return to Options Page
        </Button>
    </Box>
  );
}