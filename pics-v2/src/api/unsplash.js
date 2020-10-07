import axios from 'axios';

export default axios.create({

  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ECliaeDEhitgGUfQYXZSgaF2E9EZ50Y1onXjHf3gagc'
  }
});