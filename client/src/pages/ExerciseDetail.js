import { fetchWorkoutData, getRandomWorkouts } from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from "react-router-dom";

import Auth from '../utils/auth';

const ExerciseDetail = () => {
  const [workouts, setWorkouts] = useState([]);
  const { bodyPart } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setWorkouts([]);

      if (!Auth.loggedIn()) {
        return <Navigate to="/login" replace={true}/>}
      
      try {
        const response = await fetchWorkoutData(bodyPart);
        if(response.length >= 50) {
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

  return (
    <div>
      {workouts.map((workout) => {
        return (
          <ExerciseCard key={workout.id} exercise={workout} />
        )
      })}
    </div>
  );
};

export default ExerciseDetail;
