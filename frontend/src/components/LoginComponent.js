import React from 'react'
import { Button } from '@mui/material'
import {  Alert } from '@mui/material'

export default function LoginComponent(props) {
    const {showFailedLogin, handleSignIn} = props
    return (
        <div>
            <Button variant="contained" onClick={handleSignIn} data-testid="loginButton">
                Login
            </Button>
            {
                showFailedLogin
                &&
                <div style={{marginTop: "2rem"}}>
                <Alert severity="error">Failed to login, please try again :((</Alert>
                </div>
            }
        </div>
    )
}
