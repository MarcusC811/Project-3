import React, { useState } from 'react';

function ProfilePage() {
  const [exercises, setExercises] = useState([]);
  const [completedExercises, setCompletedExercises] = useState([]);

  const handleAddExercise = (e) => {
    e.preventDefault();
    const exerciseInput = e.target.elements.exercise.value.trim();
    if (exerciseInput) {
      setExercises((prevExercises) => [...prevExercises, exerciseInput]);
      e.target.elements.exercise.value = '';
    }
  };

  const handleCompleteExercise = (index) => {
    setCompletedExercises((prevCompletedExercises) => [
      ...prevCompletedExercises,
      exercises[index],
    ]);
    setExercises((prevExercises) => [
      ...prevExercises.slice(0, index),
      ...prevExercises.slice(index + 1),
    ]);
  };

  const handleDeleteExercise = (index) => {
    setExercises((prevExercises) => [
      ...prevExercises.slice(0, index),
      ...prevExercises.slice(index + 1),
    ]);
  };

  return (
    <div>
      <h1>My Exercises</h1>
      <form onSubmit={handleAddExercise}>
        <input type="text" name="exercise" />
        <button type="submit">Add</button>
      </form>
      <h2>Current Exercises</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise}
            <button onClick={() => handleCompleteExercise(index)}>
              Completed
            </button>
            <button onClick={() => handleDeleteExercise(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Completed Exercises</h2>
      <ul>
        {completedExercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfilePage