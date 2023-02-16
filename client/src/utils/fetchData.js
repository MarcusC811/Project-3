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

export const getRandomWorkouts = (arr, num) => {
  let shuffled = arr.slice(0);
  let i = arr.length;
  let min = i - num;
  
  while (i-- > min) {
    let index = Math.floor((i + 1) * Math.random());
    let temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}