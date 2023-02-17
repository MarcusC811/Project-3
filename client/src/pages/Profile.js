import React from 'react'
import { Box, Typography, Stack } from '@mui/material';
import avatar from '../assets/images/shinydb.png';
import Button from '@mui/joy/Button';

const Profile = () => {
  return (
    <div className="vh-100" style={{ backgroundColor: '#f4f5f7'}}>
      <card className="py-5 h-100">
        <cardbody className="justify-content-center">
            <img
                src={avatar}
                alt="avatar"
                className="rounded-circle"
                style={{ width: '150px'}}
                fluid />
        </cardbody>

      </card>
      <div>
      <Button sx={{ mt: 1 }}>Log out</Button>
            <div className="logout-btn">

            </div>
      </div>
    </div>
  )
}

export default Profile
