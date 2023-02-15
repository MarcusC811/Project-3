export const exerciseOptions = {
    method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '6f2837fd3dmsh95fabaf633f198dp1705b7jsn6a2e2c4fce39',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
    





export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = response.json();

    return data;
}