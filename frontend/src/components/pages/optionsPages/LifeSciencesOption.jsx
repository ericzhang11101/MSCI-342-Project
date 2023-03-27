import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function LifeSciencesOption() {
  return (
    <Box sx={{           display: "flex",
    flexDirection: "column",
    height: 700,
    overflow: "hidden",
    overflowY: "scroll",}}>
      <Typography variant="h3" gutterBottom>
        Life Sciences Option
      </Typography>

      <Typography variant="Subtitle2" gutterBottom>
      The Life Sciences Option has four theme areas: Molecular and Cell Biology, Environmental/Ecological Science, Biophysical Science, and Biochemical Science. Each theme has four required foundations ,or core,
      courses plus three elective courses to be selected from a set of at least seven Faculty of Science courses in the particular theme area. Although this Option is available to all students in the Faculty of 
      Engineering, it is expected to be of particular interest to students in Chemical Engineering, Environmental Engineering, Nanotechnology Engineering, and Systems Design Engineering.
      </Typography>
      <Typography variant="body2" gutterBottom>
      Theme 1: Molecular and Cell Biology

        Required courses:

        BIOL 130
        BIOL 239
        BIOL 240
        CHEM 266
        CHEM 262 or NE 222

        Electives: choose three

        BIOL 266
        BIOL 308
        BIOL 309
        BIOL 331
        BIOL 342
        BIOL 349/CHE 565
        BIOL 382/AMATH 382
        BIOL 434

    Theme 2: Environmental/Ecological Science

        Required courses:

        BIOL 239
        BIOL 240
        BME 285 or CHE 161
        One of BME 186, CHEM 123, CHE 102, NE 121
        Electives: choose three

        BIOL 150
        BIOL 241
        BIOL 349/CHE 565
        BIOL 350
        BIOL 351
        BIOL 354
        BIOL 462/EARTH 444
    
    Theme 3: Biophysical Science

        Required courses:

        One of BME 186, CHEM 123, CHE 102, NE 121
        PHYS 125 or ECE 105
        PHYS 280/BIOL 280
        PHYS 380

        Electives: choose three

        BIOL 349/CHE 565
        CHEM 237 or CHEM 233
        One of CHEM 266, CHEM 262, NE 222
        CHEM 357
        PHYS 395
        PHYS 396
    Theme 4: Biochemical Science

        Required courses:

        One of BME 285, CHE 161
        One of BME 186, CHEM 123, CHE 102, NE 121
        One of CHEM 266, CHEM 262, NE 222
        CHEM 267

        Electives: choose three

        CHEM 220
        CHEM 237 or CHEM 233
        CHEM 333
        CHEM 357
        CHEM 430
        CHEM 432
      </Typography>
      <Typography variant = "h6">Notes:</Typography>
      <Typography variant = "body2">
      1. Students are encouraged to seek information from the option co-ordinator related to combinations of electives and relationships among the courses. Enrolment concerns may need to be discussed with the academic advisor.
     
      2. Some students in the Option may wish to further specialize within a given theme.

      3. Students will need to consider the terms of offering for the courses listed as well as the requisite structure. In particular, some courses require both the lecture and the lab component of a course as a prerequisite. 
      It is also important to note that the choices in the earlier courses in the option may impact the elective choices in the senior courses and that some courses require the permission of the instructor.
      
      4. Listed in the electives of some of the themes are special topic courses; a list of the topics available in a given term is available from the department offering the special topics course.
    </Typography>
    <Button href="/options-page" variant="contained">
         Return to Options Page
    </Button>
    </Box>
  );
}