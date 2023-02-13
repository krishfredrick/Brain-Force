import axios from "axios";

export const getAllCapsule = () => {
  const data = axios
    .get(`https://api.spacexdata.com/v3/capsule/`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error>>>", error);
    });
  return data;
};
