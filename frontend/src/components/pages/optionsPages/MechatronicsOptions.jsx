import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function MechatronicsOption() {
  return (
    <Box sx={{           display: "flex",
    flexDirection: "column",
    height: 700,
    overflow: "hidden",
    overflowY: "scroll",}}>
      <Typography variant="h3" gutterBottom>
        Mechatronics Option
      </Typography>

      <Typography variant="Subtitle2" gutterBottom>
      The Option consists of eight courses selected from specified lists plus a design project.
      Depending on the engineering plan, some of these courses may be part of the core curriculum.
      </Typography>
      <Typography variant="body2" gutterBottom>
    One from List 1: Electronics and Instrumentation

        BME 294 Circuits, Instrumentation, and Measurements
        ECE 240 Electronic Circuits 1
        MTE 220 Sensors and Instrumentation
        SYDE 292 Circuits, Instrumentation, and Measurements

    One from List 2: Embedded Microprocessor Systems

        ECE 224 Embedded Microprocessor Systems
        MTE 325 Microprocessor Systems and Interfacing for Mechatronics Engineering
    
    One from List 3: Electromechanical Devices

        ECE 260 Electromechanical Energy Conversion
        ME 269 Electromechanical Devices and Power Processing
        MTE 320 Actuators and Power Electronics

    One from List 4: Machine Design

        ME 321 Kinematics and Dynamics of Machines
        MTE 321 Design and Dynamics of Machines
        One from List 5: Advanced Control Systems
        ECE 481 Digital Control Systems
        ECE 484 Digital Control Applications
        ECE 488 Multivariable Control Systems
        MTE 460 Mechatronic Systems Integration

    One from List 6: Robotics and Automation

        ECE 486 Robot Dynamics and Control
        ME 547 Robot Manipulators: Kinematics, Dynamics, Control
        MTE 544 Autonomous Mobile Robots

    One from List 7: Mechanical Systems

        ME 322 Mechanical Design 1
        ME 524 Advanced Dynamics and Vibrations
        SYDE 553 Advanced Dynamics
    
    One from List 8: Elective

        ECE 356 Database Systems
        ECE 454 Distributed Computing
        ECE 455 Embedded Software
        ECE 457A Co-operative and Adaptive Algorithms
        ECE 457B Fundamentals of Computational Intelligence
        ECE 459 Programming for Performance
        ECE 463 Design and Applications of Power Electronic Converters
        ME 561 Fluid Power Control Systems
        SYDE 522 Foundations of Artificial Intelligence
        SYDE 572 Introduction to Pattern Recognition
        SYDE 575 Image Processing

    Mechatronics Design Project

        Each student in the Option must undertake a two-term design project/workshop (BME 461 and BME 462, or ECE 498A and ECE 498B, or ME 481 and ME 482, or SYDE 461 and SYDE 462) with a 
        mechatronics theme which must be approved by the faculty Mechatronics co-ordinator. Students must also meet the project/workshop requirements of their home department.
    </Typography>
      <Typography variant = "h6">Notes:</Typography>
      <Typography variant = "body2">
    1. The courses listed above may have prerequisites, and it is the student's responsibility to satisfy these requirements or otherwise obtain permission to enrol.
    
    2. Students are encouraged to contact the option co-ordinator if they have difficulty enrolling in a course. The Mechatronics Option is not available to the Mechatronics Engineering students.
</Typography>
<Button href="/options-page" variant="contained">
         Return to Options Page
        </Button>
    </Box>
  );
}