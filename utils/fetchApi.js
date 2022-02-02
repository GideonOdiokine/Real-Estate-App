
import axios from "axios";

export  const baseUrl = 'https://bayut.p.rapidapi.com';

export  const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '21b4c9853emshdf9bc0eead1a265p1d71e7jsne7e2aca335d6' ,
    },
  });
    
  return data;
}