import axios, {AxiosPromise} from "axios";

//Just a bit lazy to make .env file :P and parse with dot env so
//i just pass the server address which i include with with some
//mock data with json-server

const request = axios.create({
  baseURL: "http://localhost:3000"
});


//Axios has some tricky error handling, this trick basicly returns
// error as response as well.
const get = (endpoint: string, headers?: object): AxiosPromise => {
  return request.get(endpoint, headers).catch(e => e.response)
};

export {get, request}
