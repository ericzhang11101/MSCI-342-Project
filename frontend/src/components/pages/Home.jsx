import React from 'react'
import styled from 'styled-components'
import {Grid, Typography} from "@mui/material";
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Divider = styled.div`
  width: 120px;
  height: 10px;
  background: #3c87f5;
  margin-top: 40px;
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: none;
  color: white;
`

const StyledButton = styled(Button)`
  height: 10rem;
  width: 10rem;
`

export default function Home() {
  return (
    <HomeContainer>
      <Grid className={'h-100'} container>
        <Grid item xs={6} className={'h-100 bg-black p-5 text-white'}>
          <h5 className={'text-start'}>FOREWORD</h5>
          <h3 className={'mt-5 text-start'}>
            WHAT'S MANAGEMENT ENGINEERING?
          </h3>
          <Divider></Divider>
          <p className={'mt-5 text-start w-75 h6'}>
            Management Engineering began as Waterloo'sversion ofan ndustrial Engineering program
            Since then.courses have evolved to focus onbringing problem solving and decision making toany industryur courses include operationsresearch,optimization, statistics, software
            development and design.
          </p>
        </Grid>
        <Grid item xs={6} className={'h-100 p-5'}>
          <Typography variant={'h4'} color={'#3c87f5'} className={'fw-bold text-start'}>
            COMMON CAREER PATHS
          </Typography>
          <div className={'mt-4'}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <StyledButton variant="contained">
                  <StyledLink>
                    button
                  </StyledLink>
                </StyledButton>
              </Grid>
              <Grid item xs={4}>
                <StyledButton variant="contained">
                  <StyledLink>
                    button
                  </StyledLink>
                </StyledButton>
              </Grid>
              <Grid item xs={4}>
                <StyledButton variant="contained">
                  <StyledLink>
                    button
                  </StyledLink>
                </StyledButton>
              </Grid>
              <Grid item xs={4}>
                <StyledButton variant="contained">
                  <StyledLink>
                    button
                  </StyledLink>
                </StyledButton>
              </Grid>
              <Grid item xs={4}>
                <StyledButton variant="contained">
                  <StyledLink>
                    button
                  </StyledLink>
                </StyledButton>
              </Grid>
              <Grid item xs={4}>
                <StyledButton variant="contained">
                  <StyledLink>
                    button
                  </StyledLink>
                </StyledButton>
              </Grid>

            </Grid>


          </div>
        </Grid>
      </Grid>
    </HomeContainer>
  )
}
