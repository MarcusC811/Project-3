import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/andrea.jpg';


const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }}  position="relative" p="20px">
        <Typography color="#99D98C"
        fontWeight="600" fontSize="26px">
            SWOLEMATE
            
        </Typography>
        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'}}}
        mb="23px" mt="30px"
        >
            Rise, Sweat <br /> and Have fun
        </Typography>
        <Typography fontSize="22px"
        lineHeight="35px" mb={4}>
            Exercise with a purpose
        </Typography>
       
        <Typography
        fontWeight={600}
        color="#99D98C"
        sx={{
            opacoty: 0.1,
            display: { lg: 'block', xs: 'none'}
        }}
        fontSize='200px'
        >

        </Typography>
        <img src={HeroBannerImage} alt="banner"
        className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner