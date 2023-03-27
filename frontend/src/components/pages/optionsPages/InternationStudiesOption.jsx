import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


export default function InternationalStudiesOption() {
  return (
    <Box sx={{           display: "flex",
    flexDirection: "column",
    height: 700,
    overflow: "hidden",
    overflowY: "scroll", }}>
      <Typography variant="h3" gutterBottom>
        Internation Studies In Engineering Option
      </Typography>

      <Typography variant="Subtitle2" gutterBottom>
      The International Studies in Engineering Option will normally require extra academic material on campus, in addition to the overseas experience of work and/or study.

      The Option consists of study terms and/or work terms at overseas locations, of at least eight months, together with academic requirements. To be accepted for the 
      International Studies in Engineering Option, the complete package must be approved by the option co-ordinator.    
      </Typography>
      <Typography variant="body2" gutterBottom>
      There are three specific requirements for a student to complete the Option:

    1. International Experience: An experience of at least eight months outside of Canada after the completion of term 2B. 
    This may include study terms, work terms, or terms spent as an intern in an academic institution (such as a research laboratory in a university) 
    or with a non-government agency (such as Engineers Without Borders).

    2. Academic Courses: Six courses approved by the option co-ordinator.

        No more than three of the courses may be language skills courses.
        Courses may be taken during normal academic terms, online through the University of Waterloo, or at overseas institutions while the student is on exchange or work term. Language courses given by such organizations as the Goethe Institute may also be included.
        There is a list of approved University of Waterloo courses for the Option available on the Engineering exchange website. Most courses on the list are also approved as Complementary Studies Electives. Deviation from the list may be approved by the option co-ordinator.
        Typically, three of the courses should be completed before the international experience, and three afterwards, however, considerable flexibility in timing is allowed.
    
    3. International Report: Enrolment in and completion of the requirements for GENE 303. This consists of a report 
    to be written after completion of the international experience component of the Option. The report may include,
    but is not restricted to one of the following:

        technical, non-technical, and professional aspects of the foreign residence experience
        socio-economic aspects of life in the foreign country
        a discussion which compares and contrasts conditions in the country or countries involved in the international experience(s)
        a review or analysis of the social or political histories of the country
        trade and commercial relations with or among the country or countries involved
    
    In all cases, the report must include information addressed to the needs of other students considering a similar experience. A general guideline for the report is that it should not be shorter than a co-op work report.

    For further information regarding this Option, contact the Faculty of Engineering Exchange Office.
    </Typography>
    <Button href="/options-page" variant="contained">
         Return to Options Page
        </Button>
    </Box>
  );
}