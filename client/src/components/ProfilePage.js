import React, { useState } from 'react';


function ProfilePage() {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [weeklyCalendar, setWeeklyCalendar] = useState([
    { day: 'Sunday', exercises: [] },
    { day: 'Monday', exercises: [] },
    { day: 'Tuesday', exercises: [] },
    { day: 'Wednesday', exercises: [] },
    { day: 'Thursday', exercises: [] },
    { day: 'Friday', exercises: [] },
    { day: 'Saturday', exercises: [] },
  ]);

  const handleAddExercise = (e) => {
    e.preventDefault();
    if (selectedExercise && selectedDay) {
      const updatedWeeklyCalendar = weeklyCalendar.map((day) => {
        if (day.day === selectedDay) {
          return {
            ...day,
            exercises: [...day.exercises, selectedExercise],
          };
        } else {
          return day;
        }
      });
      setWeeklyCalendar(updatedWeeklyCalendar);
      setExercises((prevExercises) => [...prevExercises, selectedExercise]);
      setSelectedExercise('');
    }
  };

  const handleDeleteExercise = (index) => {
    setExercises((prevExercises) => [
      ...prevExercises.slice(0, index),
      ...prevExercises.slice(index + 1),
    ]);
  };

  const exerciseOptions = [
    'Legs',
    'Arms',
    'Abs',
    'Back',
    'Full Body',
    'Cardio',
    'Rest',
  ];

  return (
    <div className='profileContent'>
      {weeklyCalendar.map((day, index) => (
        <div key={index}>
          <h3>{day.day}</h3>
          <ul>
            {day.exercises.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
          <button onClick={() => setSelectedDay(day.day)}>Select this day to add exercise(s)</button>
        </div>
      ))}
      <form className='exerciseSelection' onSubmit={handleAddExercise}>
        <select
          value={selectedExercise}
          onChange={(e) => setSelectedExercise(e.target.value)}
        >
          <option value=''>Select an exercise</option>
          {exerciseOptions.map((exercise, index) => (
            <option key={index} value={exercise}>
              {exercise}
            </option>
          ))}
        </select>
        <button type='submit'>Add</button>
      </form>
      <ul>
        {exercises.map((exercise, index) => (
          <div className='addedExercise' key={index}>
            <button onClick={() => handleDeleteExercise(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};


export default ProfilePage