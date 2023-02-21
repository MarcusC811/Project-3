import React, { useState } from "react";
import { Box } from '@mui/material';
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import Shiny from "../assets/images/shinydb.png";
import HorizontalScrollBar from "../components/HorizontalScrollBar";
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';



const Home = () => {
    if (!Auth.loggedIn()) {
        return <Navigate to="/login"  replace={true} />;
    }
    
    // const [bodyPart, setBodyPart] = useState('all');
    // const [exercises, setExercises] = useState([]);
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
        </Box>
    )
}

export default Home;