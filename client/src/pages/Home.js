import React, { useState } from "react";
import { Box } from '@mui/material';
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import HorizontalScrollBar from "../components/HorizontalScrollBar";
import { Navigate } from "react-router-dom";


import Auth from '../utils/auth';
import Footer from "../components/Footer";
import RestDays from "../components/RestDays";


const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);

    if (!Auth.loggedIn()) {
        return (
            <div className="whitespace">
            <Box>
                <HeroBanner />
                <br></br>
                <div style={{ display: "none" }}>
                {<RestDays />}
                </div>
                <Footer align='center' />
            </Box>
            </div>
        );
    }

    // User is authorized, show the div
    return (
        <div className="whitespace">
        <Box>
            <HeroBanner />
            <div>
                {<RestDays />}
            </div>
            <Footer align='center' />
        </Box>
        </div>
    )
}

export default Home;
