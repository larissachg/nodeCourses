// const axios = require('axios'); //(2)
import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    /* const resp = await fetch(url);
    const data = await resp.json(); */

    //(2) IMPLEMENTANDO AXIOS
    const {data} = await axios.get(url);
    return data;
  },


  post: async (url: string, body: any) => {},
  put: async (url:string, body: any) => {},
  delete: async (url: string) => {},
};

// module.exports = {
//   http: httpClientPlugin,
// };
