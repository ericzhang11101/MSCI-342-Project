import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function EnvironmentalEngineeringOption() {
  return (
    <Box sx={{           display: "flex",
    flexDirection: "column",
    height: 700,
    overflow: "hidden",
    overflowY: "scroll",}}>
      <Typography variant="h3" gutterBottom>
        Environmental Engineering Option
      </Typography>

      <Typography variant="Subtitle2" gutterBottom>
      The Environmental Engineering Option is not available to Environmental Engineering students.

      The Option consists of a set of seven courses chosen from four theme areas, as described below.
       Substitution of equivalent courses, if applicable, requires the approval of the option co-ordinator.
      </Typography>
      <Typography variant="body2" gutterBottom> 
    Take two from List A: Environmental Issues and Management

        ENVE 391/GEOE 391 Law and Ethics for Environmental and Geological Engineers
        ERS 215 Environmental and Sustainability Assessment 1
        ERS 270 Introduction to Sustainable Agroecosystems
        ERS 315 Environmental and Sustainability Assessment 2
        ERS 370 Corporate Sustainability: Issues and Prospects
        ERS 372 First Nations and the Environment
        ERS 404/PSCI 432 Global Environmental Governance

    Take at least one from List B: Environmental Chemistry and Biology

        BIOL 150 Organismal and Evolutionary Ecology
        BIOL 240 Fundamentals of Microbiology
        BIOL 354 Environmental Toxicology 1
        BIOL 383/ERS 383 Tropical Ecosystems
        EARTH 221 Introductory Geochemistry
        ENVE 275 Environmental Chemistry
        ENVS 200 Field Ecology
        GEOG 432/HLTH 420/PLAN 432 Health, Environment, and Planning

    Take at least two from List C: Environmental and Energy Processes

        CHE 571 Industrial Ecology
        CHE 572 Air Pollution Control
        CHE 574 Industrial Wastewater Pollution Control
        ENVE 375 Physico-Chemical Processes (or CIVE 375 Environmental Engineering Principles)
        ENVE 376 Biological Processes
        ENVE 577 Engineering for Solid Waste Management
        ME 452 HVAC Load Analysis and Design Fundamentals
        ME 459 Energy Conversion

    Take at least one from List D: Transport, Modelling, and Decision Analysis

        CIVE 230 Engineering and Sustainable Development
        EARTH 456 Numerical Methods in Hydrogeology
        EARTH 458 Physical Hydrogeology
        ENVE 335 Decision Making for Environmental Engineers
        ENVE 573 Contaminant Transport

    ME 571 Air Pollution
        MSCI 452 Decision Making Under Uncertainty
        SYDE 532 Introduction to Complex Systems
        SYDE 533 Conflict Resolution
    
    Plus one additional course from List B, C, or D above, to total seven courses.

      </Typography>
      <Typography variant = "h6">Notes:</Typography>
      <Typography variant = "body2">
      May count towards Complementary Studies Elective requirements
      </Typography>
      <Button href="/options-page" variant="contained">
         Return to Options Page
    </Button>
    </Box>
  );
}