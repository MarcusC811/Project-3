export const fetchWorkoutData = async (query) => {
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  const response = await fetch('https://exercisedb.p.rapidapi.com/exercises', options)
      const workoutData = await response.json()
      return workoutData;
};