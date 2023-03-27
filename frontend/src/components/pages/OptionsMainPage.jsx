import * as React from 'react';
import Grid from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function OptionsMainPage() {
  return (
    <Box  sx={{       
    height: 700,
    overflow: "hidden",
    overflowY: "scroll",}}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
              <Typography variant="h5" component="div">
                  Artificial Intelligence
              </Typography>
              <Typography variant="body2">
                  Study and advance ever-greater degrees of efficacy, reliability, and safety,
                  the ways in which machines and systems perceive, see, speak, decide, respond, act, and plan.
              </Typography>
          </CardContent>
          <CardActions>
              <Button size="small" href = '/ai-option'>Learn More</Button>
          </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
              <CardContent>
                  <Typography variant="h5" component="div">
                      BioMechanics
                  </Typography>
                  <Typography variant="body2">
                  Study solutions to health-care problems, birth defect prevention, 
                  medical imaging, prosthesis design, and ergonomics.
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" href = '/biomech-option'>Learn More</Button>
              </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
              <CardContent>
                  <Typography variant="h5" component="div">
                      Computer Engineering
                  </Typography>
                  <Typography variant="body2">
                  Develop skills in the areas of logic, digital hardware, operating systems, 
                  computing systems, databases, networks, and security and privacy.
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" href = '/comp-eng-option'>Learn More</Button>
              </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
              <CardContent>
                  <Typography variant="h5" component="div">
                      Computing
                  </Typography>
                  <Typography variant="body2">
                  Enrich your studies with knowledge in programming, data structures and algorithms,
                   digital systems, human-computer interaction, and more.
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" href = '/computing-option'>Learn More</Button>
              </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
              <CardContent>
                  <Typography variant="h5" component="div">
                      Entrepreneurship
                  </Typography>
                  <Typography variant="body2">
                  Pursue an innovative pathway in engineering, and 
                  enrich your studies with courses in venture creation 
                  and corporate entrepreneurship.
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" href = '/entrep-option'>Learn More</Button>
              </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
              <CardContent>
                  <Typography variant="h5" component="div">
                        Environemental Engineering
                  </Typography>
                  <Typography variant="body2">
                  Study pollution control, waste disposal, and health and sanitation.
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" href = '/env-eng-option'>Learn More</Button>
              </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
              <CardContent>
                  <Typography variant="h5" component="div">
                        Internation Studies in Engineering
                  </Typography>
                  <Typography variant="body2">
                  Enrich your undergraduate studies with study and/or work abroad.
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" href = '/int-studies-option'>Learn More</Button>
              </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
              <CardContent>
                  <Typography variant="h5" component="div">
                        Life Sciences
                  </Typography>
                  <Typography variant="body2">
                  Understand the structure and function of biological systems
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" href = '/life-sci-option'>Learn More</Button>
              </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
              <CardContent>
                  <Typography variant="h5" component="div">
                        Mechatronics
                  </Typography>
                  <Typography variant="body2">
                  Design and develop “thinking” machines and devices.
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" href = '/tron-option'>Learn More</Button>
              </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
              <CardContent>
                  <Typography variant="h5" component="div">
                        Physical Sciences
                  </Typography>
                  <Typography variant="body2">
                  Understand the basic physical sciences that lay behind many engineering applications.
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" href = '/phys-sci-option'>Learn More</Button>
              </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
              <CardContent>
                  <Typography variant="h5" component="div">
                        Software Engineering
                  </Typography>
                  <Typography variant="body2">
                  Learn about the design, implementation, and maintenance of large-scale software systems.
                   Offered jointly by the Faculties of Engineering and Mathematics.
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" href = '/soft-eng-option'>Learn More</Button>
              </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
              <CardContent>
                  <Typography variant="h5" component="div">
                        Statistics
                  </Typography>
                  <Typography variant="body2">
                  Understand the basic physical sciences that lay behind many engineering applications.
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" href = '/stats-option'>Learn More</Button>
              </CardActions>
        </Card>                      
        </Box>
  );
}