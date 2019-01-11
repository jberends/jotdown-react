import axios from 'axios';

export const ideasApi = axios.create({
  baseURL: "https://jotdown-react.firebaseio.com/ideas.json"
});
