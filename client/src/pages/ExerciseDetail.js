import { fetchWorkoutData, getRandomWorkouts } from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Grid from '@mui/material/Grid'; // Grid version 1
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// import { Navigate } from "react-router-dom";


import Auth from '../utils/auth';

const ExerciseDetail = () => {
  const [workouts, setWorkouts] = useState([]);
  const { bodyPart } = useParams();

  function FirstLetterCap (arr) {
    const string = arr;
    const splitString = string.split(" ");
  
    for (var i = 0; i < splitString.length; i++) {
      splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
    }
  
    const newString = splitString.join(" ");
    return newString
  }

  useEffect(() => {
    const fetchData = async () => {
      setWorkouts([]);

      try {
        const response = await fetchWorkoutData(bodyPart);
        if (response.length >= 50) {
          const randomWorkouts = getRandomWorkouts(response, 50);
          setWorkouts(randomWorkouts);
        } else {
          setWorkouts(response);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [bodyPart]);

  if (!Auth.loggedIn()) {
    return <Navigate to="/access" replace={true} />
  }
  return (
    <div className='cardContainer'>
      <h1 className='exerciseTitle'>{FirstLetterCap(bodyPart)}</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {workouts.map((workout, index) => {
        return (
          <Grid key={index} item xs={6}>
            <ExerciseCard key={workout.id} exercise={workout} />
          </Grid>
        )
      })}
      </Grid>
    </div>
  );
};

export default ExerciseDetail;
