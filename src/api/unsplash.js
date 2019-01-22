import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID cb35aeb63e9d6dd70a19a68b1ec7d1a80129efb58ef5e60e4545ec5b8b939965'
    }
});