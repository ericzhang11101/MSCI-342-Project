import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function StatisticsOption() {
  return (
    <Box sx={{           display: "flex",
    flexDirection: "column",
    height: 700,
    overflow: "hidden",
    overflowY: "scroll", }}>
      <Typography variant="h3" gutterBottom>
        Statistics Option
      </Typography>
      <Typography variant="body2" gutterBottom>
      Four required courses:

        STAT 231 Statistics, or one of the following courses:
        CHE 220 Process Data Analysis
        CIVE 224 Probability and Statistics
        ENVE 224/GEOE 224 Probability and Statistics
        ME 202 Statistics for Engineers
        MSCI 251 Probability and Statistics 1
        MTE 201 Experimental Measurement & Statistical Analysis
        NE 215 Probability and Statistics
        SYDE 212 Probability and Statistics
        STAT 331 Applied Linear Models, or
        SYDE 334 Applied Statistics
        STAT 332 Sampling and Experimental Design, or
        MSCI 253 Probability and Statistics 2
        STAT 435 Statistical Methods for Process Improvements
    
    Three courses from those listed below:

        CHE 225/CHE 425 Strategies for Process Improvement and Product Development
        CHE 341 Introduction to Process Control
        CHE 522 Advanced Process Dynamics and Control
        CHE 524 Process Control Laboratory
        CIVE 343 Traffic Simulation Modelling and Applications
        CIVE 375 Environmental Engineering Principles
        CIVE 440/PLAN 478 Transit Planning and Operations
        ENVE 573 Contaminant Transport
        ME 340 Manufacturing Processes
        MSCI 431 Stochastic Models and Methods, or
        SYDE 531 Design Optimization Under Probabilistic Uncertainty
        MSCI 432 Production and Service Operations Management
        MSCI 452 Decision Making Under Uncertainty
        STAT 230 Probability (or equivalent)
        STAT 333 Stochastic Processes 1
        STAT 430 Experimental Design
        STAT 431 Generalized Linear Models and their Applications
        STAT 433 Stochastic Processes 2
        STAT 443 Forecasting
        SYDE 533 Conflict Resolution
        SYDE 572 Introduction to Pattern Recognition
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