import axios from 'axios';

const KEY = 'AIzaSyA280peCcYhfmS5U9aNZym_1G1YEIrPQ4A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
