import axios from "axios";

export const getCapsule = (id) => {
  const data = axios
    .get(`https://api.spacexdata.com/v3/capsule/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error>>>", error);
    });
  return data;
};
