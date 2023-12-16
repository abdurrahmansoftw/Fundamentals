import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c16116b9ceaa4e4c907c6d94c84e87f7',
  },
});
