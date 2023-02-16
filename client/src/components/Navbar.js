import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import Logo from '../assets/images/dumbbell.png';
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
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                    <Button {...bindTrigger(popupState)} style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #99D98C', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI', fontSize: "24px", padding: '0', textTransform: 'none', letterSpacing: 'none', fontWeight: 'normal', lineHeight: '1.35'}}>
                        Exercises
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Abductors</MenuItem>
                        <MenuItem onClick={popupState.close}>Abs</MenuItem>
                        <MenuItem onClick={popupState.close}>Biceps</MenuItem>
                        <MenuItem onClick={popupState.close}>Calves</MenuItem>
                        <MenuItem onClick={popupState.close}>Cardiovascular System</MenuItem>
                        <MenuItem onClick={popupState.close}>Delts</MenuItem>
                    </Menu>
                    </React.Fragment>
                )}
            </PopupState>
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