import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID a0100b32a4d3988a9befc95361a24a89dae31ac4d9fc4465e607f76afda08ba7'
  }
});
