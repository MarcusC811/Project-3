import { fetchWorkoutData, getRandomWorkouts } from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';
import React, { useState, useEffect } from 'react';

const ExerciseDetail = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchWorkoutData();
        console.log( response);
        const randomWorkouts = getRandomWorkouts(response, 50);
        setWorkouts(randomWorkouts);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

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
