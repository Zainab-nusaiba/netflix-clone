import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

// instance.get('/foo-bar'); good way to make requests like this
// output: http://api.themoviedb.org/3/foo-bar

export default instance;