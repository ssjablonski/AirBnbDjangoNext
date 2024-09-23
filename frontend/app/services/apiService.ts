import axios from "axios";
import { getAccessToken } from "../lib/actions";

const apiService = {
  get: async function (url: string): Promise<any> {
    const token = await getAccessToken();
    return new Promise((resolve, reject) => {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.data)
        .then((data) => {
          resolve(data.data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },

  post: async function (url: string, data: any): Promise<any> {
    const token = await getAccessToken();
    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response:", json);

          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default apiService;
