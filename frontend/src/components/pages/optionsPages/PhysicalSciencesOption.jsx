import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function PhysicalSciencesOption() {
  return (
    <Box sx={{           display: "flex",
    flexDirection: "column",
    height: 700,
    overflow: "hidden",
    overflowY: "scroll", }}>
      <Typography variant="h3" gutterBottom>
        Physical Sciences Option
      </Typography>

      <Typography variant="Subtitle2" gutterBottom>
      The Physical Sciences Option has three theme areas: Physics, Chemistry, and Earth and Environmental Sciences. Each theme has four required foundations (or core) courses plus 
      three elective courses to be chosen from a set of at least 10 Faculty of Science courses in the theme area. Sub-themes may be followed by making judicious choices of three elective courses. 
      This Option is available to all students in the Faculty of Engineering.
      </Typography>
      <Typography variant="body2" gutterBottom>
      Theme 1: Physics

        Required courses:

        One of PHYS 115, PHYS 121, ECE 105, NE 131
        One of PHYS 122, PHYS 125, ECE 106, NE 241, SYDE 283
        PHYS 234 or NE 332
        One of ECE 140, PHYS 242, PHYS 263, PHYS 334, PHYS 358
        
        Electives: choose three

        PHYS 275
        PHYS 334
        PHYS 335
        PHYS 342
        PHYS 359 or NE 334
        PHYS 364
        PHYS 365
        PHYS 375
        PHYS 434
        PHYS 435
        PHYS 442
        PHYS 454/AMATH 473
        PHYS 467/CO 481/CS 467
        PHYS 475
    Subthemes
        
        Electromagnetic Theory

        PHYS 342
        PHYS 364
        PHYS 365
        
        Solid State Physics

        PHYS 334
        PHYS 335
        PHYS 358
        PHYS 359

        Astrophysics

        PHYS 263
        PHYS 275
        PHYS 375
        PHYS 475

        Quantum Physics

        PHYS 334
        PHYS 364
        PHYS 365
        PHYS 434

    Theme 2: Chemistry

        Required courses:

        One of CHEM 123, CHE 102, NE 121
        CHEM 209
        CHEM 212 or NE 225
        One of CHEM 264, CHEM 262, NE 222
       
        Electives: choose three

        CHEM 220
        CHEM 221
        One of CHEM 254, CHE 230, ME 250, SYDE 381
        CHEM 265
        CHEM 310
        CHEM 313
        CHEM 323
        CHEM 340
        CHEM 350
        One of CHEM 356, NE 332, PHYS 234
        CHEM 360
        CHEM 370 or NE 333

    Subthemes

        Analytical Chemistry

        CHEM 220
        CHEM 221
        CHEM 323

        Inorganic Chemistry

        CHEM 212
        CHEM 310
        CHEM 313

        Organic Chemistry

        One of CHEM 264, CHEM 262, NE 222
        CHEM 265
        CHEM 360

        Physical Chemistry

        CHEM 254
        CHEM 350
        CHEM 356

    Theme 3: Earth and Environmental Sciences

        Required courses:

        One of CHEM 123, CHE 102, NE 121
        One of PHYS 121, ECE 105, NE 131, PHYS 115
        One of PHYS 122, ECE 106, PHYS 125
        One of CIVE 153/ENVE 153/GEOE 153, EARTH 121 and EARTH 121L, EARTH 122 and EARTH 122L
        
        Electives: choose three

        EARTH 221
        EARTH 231
        EARTH 232
        EARTH 235
        EARTH 260
        EARTH 270
        EARTH 281
        EARTH 333
        EARTH 358
        EARTH 421
        EARTH 438
        EARTH 440
        EARTH 444/BIOL 462
        EARTH 456
        EARTH 458
        EARTH 459
        EARTH 460
        EARTH 471
    Subthemes
        
        Environmental Science
        
        EARTH 270
        EARTH 281
        EARTH 444/BIOL 462
        
        Geology
        
        EARTH 232
        EARTH 333
        EARTH 471
        
        Geochemistry
        
        EARTH 221
        EARTH 421
        EARTH 459
        
        Geophysics
        
        EARTH 260
        EARTH 438
        EARTH 460
        
        Hydrogeology
        
        EARTH 456
        EARTH 458
      </Typography>
      <Typography variant = "h6">Notes:</Typography>
      <Typography variant = "body2">
      1. Students are encouraged to seek information from the option co-ordinator related to combinations of electives and relationships among the courses. Enrolment concerns may need to be discussed with the academic advisor.

      2. Some students in the Option may wish to further specialize within a given theme. As a result, a number of sub-themes have been identified and this information is available from the option theme co-ordinator.
     
      3. Students will need to consider the terms of offering for the courses listed as well as the requisite structure. In particular, some courses require both a lecture and lab component of a
       course as a prerequisite. It is also important to note that the choices in the earlier courses in the Option may impact the elective choices in the senior courses and that some courses require the permission of the instructor.
      
      4. Listed in the electives of some of the themes are special topic courses; a list of the topics available in a given term is available from the department offering the special topics course.
      
      5. Due to the overlap, the Earth and Environmental Sciences theme is not available to Geological Engineering students.
</Typography>
<Button href="/" variant="contained">
  Return to Options Page
</Button>
<Button href="/options-page" variant="contained">
         Return to Options Page
        </Button>
    </Box>
  );
}