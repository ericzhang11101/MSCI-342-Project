import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@mui/material'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
`

const HomeCol = styled.div`
  display: grid;
  grid-template-columns: 12rem 12rem 12rem 12rem;
  grid-template-rows: repeat(4, 12rem);
  width: 64rem;
  justify-items: center;
  align-items: center;
  padding: 0 8rem;
  box-sizing: border-box;
`

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
      <h2>Welcome</h2>
      <HomeCol>
        <StyledButton variant="contained">
          <StyledLink>
              button
          </StyledLink>
        </StyledButton>      
        <StyledButton variant="contained">
          <StyledLink>
              button
          </StyledLink>
        </StyledButton>
        <StyledButton variant="contained">
          <StyledLink>
              button
          </StyledLink>
        </StyledButton>

              <StyledButton variant="contained">
          <StyledLink>
              button
          </StyledLink>
        </StyledButton>
        <StyledButton variant="contained">
          <StyledLink>
              button
          </StyledLink>
        </StyledButton>
        <StyledButton variant="contained">
          <StyledLink>
              button
          </StyledLink>
        </StyledButton>
        <StyledButton variant="contained">
          <StyledLink>
              button
          </StyledLink>
        </StyledButton>
        <StyledButton variant="contained">
          <StyledLink>
              button
          </StyledLink>
        </StyledButton>
      </HomeCol>
    </HomeContainer>
  )
}
