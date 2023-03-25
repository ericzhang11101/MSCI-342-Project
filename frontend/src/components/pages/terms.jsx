import {Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Container from "@mui/material/Container";
import {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
const terms = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B'];
export default function Terms() {

  const [currentTerm, setCurrentTerm] = useState('1A');

  const navigate = useNavigate();

  useEffect(() => {
    navigate('1A');
  }, []);

  return (
    <Container maxWidth={'xl'}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={2}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            aria-label="contacts"
          >
            {terms.map(term => {
              return (
                <ListItem
                  onClick={() => {
                    setCurrentTerm(term);
                    navigate(term);
                  }}
                  selected={currentTerm === term} key={term} disablePadding>
                  <ListItemButton>
                    <ListItemText inset primary={term} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Grid>
        <Grid item xs={12} lg={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  )
}