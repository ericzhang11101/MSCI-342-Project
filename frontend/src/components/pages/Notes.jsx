import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import {Button, Modal, Dialog, DialogTitle, DialogContent, TextField} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {useState} from "react";
import DownloadIcon from '@mui/icons-material/Download';
export default function Notes() {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Box textAlign={'start'} marginBottom={'20px'}>
        <Button
          onClick={() => setOpen(true)}
          variant={'contained'}
          startIcon={<CloudUploadIcon/>}>
          Upload
        </Button>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant={'h5'}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign={'start'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Box marginTop={'20px'} textAlign={'start'}>
            <Button endIcon={<DownloadIcon />}>
              note.pdf
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Dialog
        onClose={() => setOpen(false)}
        open={open}>
        <Box
          boxSizing={'border-box'}
          width={'600px'}>
          <DialogTitle>Upload Course Note</DialogTitle>

          <DialogContent>
            <Button
              startIcon={<CloudUploadIcon/>}
              component={'label'}>
              Select pdf file
              <input type={'file'} hidden />
            </Button>
            <Box>
              <TextField
                placeholder={'Enter note description'}
                fullWidth
                multiline
                rows={4}
              />
            </Box>
            <Box marginTop={'25px'}>
              <Button
                onClick={() => setOpen(false)}
                style={{marginRight: '15px'}} variant={'contained'} color={'inherit'}>Cancel</Button>
              <Button variant={'contained'}>Submit</Button>
            </Box>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  )
}