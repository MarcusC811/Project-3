import React, { useState } from "react";
import { Box } from '@mui/material';
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import HorizontalScrollBar from "../components/HorizontalScrollBar";
import { Navigate } from "react-router-dom";


import Auth from '../utils/auth';
import Footer from "../components/Footer";


const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);

    if (!Auth.loggedIn()) {
        return <Navigate to="/" replace={true}/>}
    return (
        <Box>
            <HeroBanner/>
            {/* <SearchExercises setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            />
            <Exercises 
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
             /> */}
             <Footer align='center' />
        </Box>
    )
}

export default Home;