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
            Management Engineering is a program that provides undergraduate students with an interdisciplinary engineering education that covers a wide range of information from social sciences, decision making and optimizing operations. Students can use this knowledge to design, implement and manage complex real-world questions upon which organizations depend.
          </p>

          <h3 className={'mt-5 text-start'}>
            WHAT IS THIS APPLICATION?
          </h3>

          <Divider></Divider>
          <p className={'mt-5 text-start w-75 h6'}>
          This application is a tool that helps undergraduate students manage their courses, 
          analyze notes and share with their cohorts and program. Also designed for anyone who 
          is interested in management engineering which allows them to view the courses they 
          potentially will be taking in the future and plan their future courses and career path. 
          You can log into your account, upload any course notes/ grades and plan your future courses. 
          Or access any public information from the tabs at the top of this page. 
          </p>

        </Grid>

      </Grid>
    </HomeContainer>
  )
}
