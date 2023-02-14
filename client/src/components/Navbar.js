import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png';
import { borderBottom } from '@mui/system';

const Navbar = () => {
    return (
        <Stack direction="row"
        justifyContent="space-around" sx={{ gap: {
            sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none' }} px='20px'>
        
            <Link to="/">
                <img src={Logo}  alt="logo" style={{
                    width: '48px', height: '48px', margin: '0 20px'}}/>
            </Link>
            <Stack
            direction="row"
            gap="40px"
            fontSize="24px"
            alignItems="flex-end" >
                <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', 
                borderBottom: '3px solid #99D98C'}}
                >Home</Link>
                <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', 
                borderBottom: '3px solid #99D98C'}}
                >Exercises</Link>
                <Link to="/login" style={{ textDecoration: 'none', color: '#3A1212', 
                borderBottom: '3px solid #99D98C'}}
                >Login</Link>
                <Link to="/profile" style={{ textDecoration: 'none', color: '#3A1212', 
                borderBottom: '3px solid #99D98C'}}
                >Profile</Link>
                
            </Stack>
        </Stack>
    )
}

export default Navbar